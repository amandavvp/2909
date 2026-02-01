import { NextRequest, NextResponse } from "next/server";
import { getRequestByProtocol, sanitizeRequestForPublic } from "@/lib/requests";

// Consultar solicitação por protocolo
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ protocol: string }> }
) {
  try {
    const { protocol } = await params;

    if (!protocol || protocol.length < 6) {
      return NextResponse.json(
        { error: "Protocolo inválido" },
        { status: 400 }
      );
    }

    const requestData = await getRequestByProtocol(protocol.toUpperCase());

    if (!requestData) {
      return NextResponse.json(
        { error: "Protocolo não encontrado" },
        { status: 404 }
      );
    }

    // Retornar dados sanitizados (sem informações sensíveis)
    const publicData = sanitizeRequestForPublic(requestData);

    return NextResponse.json({
      success: true,
      request: publicData,
    });
  } catch (error) {
    console.error("Erro ao buscar solicitação:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
