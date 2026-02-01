import { Request, RequestStatus, RequestHistoryItem } from "@/types";
import { generateProtocol } from "./utils";

// Simulação de banco de dados - em produção, usar banco real
const requests: Map<string, Request> = new Map();

// Criar nova solicitação
export async function createRequest(data: {
  userId?: string;
  serviceId: string;
  serviceName: string;
  categoryName: string;
  description: string;
  address?: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  isAnonymous: boolean;
}): Promise<{ success: boolean; protocol?: string; error?: string }> {
  try {
    const protocol = generateProtocol();
    const now = new Date();
    
    const request: Request = {
      id: `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      protocol,
      userId: data.isAnonymous ? "anonymous" : (data.userId || "guest"),
      serviceId: data.serviceId,
      serviceName: data.serviceName,
      categoryName: data.categoryName,
      status: "pending",
      description: data.description,
      address: data.address,
      attachments: [],
      createdAt: now,
      updatedAt: now,
      history: [
        {
          id: `hist_${Date.now()}`,
          status: "pending",
          message: "Solicitação registrada no sistema.",
          createdAt: now,
          isPublic: true,
        },
      ],
      isAnonymous: data.isAnonymous,
    };
    
    requests.set(protocol, request);
    
    return { success: true, protocol };
  } catch (error) {
    console.error("Erro ao criar solicitação:", error);
    return { success: false, error: "Erro interno ao criar solicitação" };
  }
}

// Buscar solicitação por protocolo
export async function getRequestByProtocol(
  protocol: string
): Promise<Request | null> {
  return requests.get(protocol) || null;
}

// Buscar solicitações do usuário
export async function getRequestsByUser(userId: string): Promise<Request[]> {
  const userRequests: Request[] = [];
  
  for (const request of requests.values()) {
    if (request.userId === userId) {
      userRequests.push(request);
    }
  }
  
  return userRequests.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
}

// Atualizar status da solicitação
export async function updateRequestStatus(
  protocol: string,
  status: RequestStatus,
  message: string
): Promise<{ success: boolean; error?: string }> {
  const request = requests.get(protocol);
  
  if (!request) {
    return { success: false, error: "Solicitação não encontrada" };
  }
  
  const now = new Date();
  const historyItem: RequestHistoryItem = {
    id: `hist_${Date.now()}`,
    status,
    message,
    createdAt: now,
    isPublic: true,
  };
  
  request.status = status;
  request.updatedAt = now;
  request.history.push(historyItem);
  
  requests.set(protocol, request);
  
  return { success: true };
}

// Validação de dados sensíveis (LGPD)
export function sanitizeRequestForPublic(request: Request): Partial<Request> {
  // Remove dados sensíveis para consulta pública
  return {
    protocol: request.protocol,
    serviceName: request.serviceName,
    categoryName: request.categoryName,
    status: request.status,
    description: request.description,
    address: request.address,
    createdAt: request.createdAt,
    updatedAt: request.updatedAt,
    history: request.history.filter((h) => h.isPublic),
  };
}

// Estatísticas
export async function getRequestStats(): Promise<{
  total: number;
  pending: number;
  inProgress: number;
  resolved: number;
}> {
  let pending = 0;
  let inProgress = 0;
  let resolved = 0;
  
  for (const request of requests.values()) {
    switch (request.status) {
      case "pending":
        pending++;
        break;
      case "in_progress":
        inProgress++;
        break;
      case "resolved":
      case "closed":
        resolved++;
        break;
    }
  }
  
  return {
    total: requests.size,
    pending,
    inProgress,
    resolved,
  };
}
