import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/lib/auth";
import { validateCPF } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cpf, password } = body;

    // Validações básicas
    if (!cpf || !password) {
      return NextResponse.json(
        { error: "CPF e senha são obrigatórios" },
        { status: 400 }
      );
    }

    // Validar CPF
    const cpfNumbers = cpf.replace(/\D/g, "");
    if (!validateCPF(cpfNumbers)) {
      return NextResponse.json(
        { error: "CPF inválido" },
        { status: 400 }
      );
    }

    // Tentar login
    const result = await loginUser(cpfNumbers, password);

    if (!result.success) {
      // Mensagem genérica para não revelar se CPF existe
      return NextResponse.json(
        { error: "CPF ou senha incorretos" },
        { status: 401 }
      );
    }

    // Criar resposta com cookie
    const response = NextResponse.json({
      success: true,
      user: result.user,
    });

    // Definir cookie httpOnly para segurança
    response.cookies.set({
      name: "auth_token",
      value: result.token!,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 dias
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
