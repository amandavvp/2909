import { cookies } from "next/headers";

// Chave secreta para JWT - em produção, usar variável de ambiente
const JWT_SECRET = process.env.JWT_SECRET || "2909-portal-secret-key-change-in-production";

// Simulação de banco de dados - em produção, usar banco real
const users: Map<string, {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  passwordHash: string;
  createdAt: Date;
}> = new Map();

// Hash simples para demonstração - em produção usar bcrypt
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(16, '0');
}

// Gerar token JWT simples - em produção usar jose ou jsonwebtoken
function generateToken(payload: object): string {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const data = btoa(JSON.stringify({ ...payload, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 }));
  const signature = simpleHash(`${header}.${data}.${JWT_SECRET}`);
  return `${header}.${data}.${signature}`;
}

// Verificar token
function verifyToken(token: string): { valid: boolean; payload?: Record<string, unknown> } {
  try {
    const [header, data, signature] = token.split(".");
    const expectedSignature = simpleHash(`${header}.${data}.${JWT_SECRET}`);
    
    if (signature !== expectedSignature) {
      return { valid: false };
    }
    
    const payload = JSON.parse(atob(data));
    if (payload.exp < Date.now()) {
      return { valid: false };
    }
    
    return { valid: true, payload };
  } catch {
    return { valid: false };
  }
}

export async function registerUser(data: {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
}): Promise<{ success: boolean; error?: string; userId?: string }> {
  // Validar se CPF já existe
  if (users.has(data.cpf)) {
    return { success: false, error: "CPF já cadastrado" };
  }
  
  // Validar email único
  for (const user of users.values()) {
    if (user.email === data.email) {
      return { success: false, error: "E-mail já cadastrado" };
    }
  }
  
  // Criar usuário
  const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const passwordHash = simpleHash(data.password + JWT_SECRET);
  
  users.set(data.cpf, {
    id: userId,
    name: data.name,
    cpf: data.cpf,
    email: data.email,
    phone: data.phone,
    passwordHash,
    createdAt: new Date(),
  });
  
  return { success: true, userId };
}

export async function loginUser(cpf: string, password: string): Promise<{
  success: boolean;
  error?: string;
  token?: string;
  user?: { id: string; name: string; email: string };
}> {
  const user = users.get(cpf);
  
  if (!user) {
    return { success: false, error: "CPF não encontrado" };
  }
  
  const passwordHash = simpleHash(password + JWT_SECRET);
  if (user.passwordHash !== passwordHash) {
    return { success: false, error: "Senha incorreta" };
  }
  
  const token = generateToken({
    userId: user.id,
    cpf: user.cpf,
    name: user.name,
    email: user.email,
  });
  
  return {
    success: true,
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}

export async function getCurrentUser(): Promise<{
  id: string;
  name: string;
  email: string;
  cpf: string;
} | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  
  if (!token) return null;
  
  const { valid, payload } = verifyToken(token);
  if (!valid || !payload) return null;
  
  return {
    id: payload.userId as string,
    name: payload.name as string,
    email: payload.email as string,
    cpf: payload.cpf as string,
  };
}

export { generateToken, verifyToken };
