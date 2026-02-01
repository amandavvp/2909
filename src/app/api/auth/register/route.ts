import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/lib/auth";
import { validateCPF, validateEmail, sanitizeHTML } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, cpf, email, phone, password } = body;

    // Validações de segurança
    if (!name || !cpf || !email || !phone || !password) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Sanitização de inputs
    const sanitizedName = sanitizeHTML(name.trim());
    const sanitizedEmail = email.trim().toLowerCase();

    // Validar nome
    if (sanitizedName.length < 3 || sanitizedName.length > 100) {
      return NextResponse.json(
        { error: "Nome deve ter entre 3 e 100 caracteres" },
        { status: 400 }
      );
    }

    // Validar CPF
    if (!validateCPF(cpf)) {
      return NextResponse.json(
        { error: "CPF inválido" },
        { status: 400 }
      );
    }

    // Validar email
    if (!validateEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: "E-mail inválido" },
        { status: 400 }
      );
    }

    // Validar telefone (mínimo 10 dígitos)
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return NextResponse.json(
        { error: "Telefone inválido" },
        { status: 400 }
      );
    }

    // Validar senha
    if (password.length < 6 || password.length > 50) {
      return NextResponse.json(
        { error: "Senha deve ter entre 6 e 50 caracteres" },
        { status: 400 }
      );
    }

    // Registrar usuário
    const result = await registerUser({
      name: sanitizedName,
      cpf: cpf.replace(/\D/g, ""),
      email: sanitizedEmail,
      phone: phoneDigits,
      password,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Cadastro realizado com sucesso",
      userId: result.userId,
    });
  } catch (error) {
    console.error("Erro no registro:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
