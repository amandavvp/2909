import { NextRequest, NextResponse } from "next/server";
import { createRequest, getRequestsByUser } from "@/lib/requests";
import { getCurrentUser } from "@/lib/auth";
import { sanitizeHTML } from "@/lib/utils";
import { getServiceBySlug, getCategoryBySlug } from "@/data/services";

// Criar nova solicitação
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      categorySlug,
      serviceSlug,
      description,
      address,
      isAnonymous = false,
    } = body;

    // Validar categoria e serviço
    const category = getCategoryBySlug(categorySlug);
    const service = getServiceBySlug(categorySlug, serviceSlug);

    if (!category || !service) {
      return NextResponse.json(
        { error: "Serviço não encontrado" },
        { status: 400 }
      );
    }

    // Validar descrição
    if (!description || description.length < 20) {
      return NextResponse.json(
        { error: "Descrição deve ter pelo menos 20 caracteres" },
        { status: 400 }
      );
    }

    if (description.length > 5000) {
      return NextResponse.json(
        { error: "Descrição muito longa (máximo 5000 caracteres)" },
        { status: 400 }
      );
    }

    // Sanitizar descrição para prevenir XSS
    const sanitizedDescription = sanitizeHTML(description);

    // Verificar autenticação se serviço requer
    let userId: string | undefined;
    if (service.requiresAuth && !isAnonymous) {
      const user = await getCurrentUser();
      if (!user) {
        return NextResponse.json(
          { error: "Este serviço requer autenticação" },
          { status: 401 }
        );
      }
      userId = user.id;
    }

    // Sanitizar endereço se fornecido
    const sanitizedAddress = address
      ? {
          street: sanitizeHTML(address.street || ""),
          number: sanitizeHTML(address.number || ""),
          complement: address.complement ? sanitizeHTML(address.complement) : undefined,
          neighborhood: sanitizeHTML(address.neighborhood || ""),
          city: sanitizeHTML(address.city || "Belford Roxo"),
          state: sanitizeHTML(address.state || "RJ"),
          zipCode: (address.zipCode || "").replace(/\D/g, ""),
        }
      : undefined;

    // Criar solicitação
    const result = await createRequest({
      userId,
      serviceId: service.id,
      serviceName: service.name,
      categoryName: category.name,
      description: sanitizedDescription,
      address: sanitizedAddress,
      isAnonymous,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      protocol: result.protocol,
      message: "Solicitação criada com sucesso",
    });
  } catch (error) {
    console.error("Erro ao criar solicitação:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// Listar solicitações do usuário logado
export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Não autenticado" },
        { status: 401 }
      );
    }

    const requests = await getRequestsByUser(user.id);

    return NextResponse.json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error("Erro ao listar solicitações:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
