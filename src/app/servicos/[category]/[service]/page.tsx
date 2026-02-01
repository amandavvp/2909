import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, AlertCircle } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import { getServiceBySlug, serviceCategories, getCategoryBySlug } from "@/data/services";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ category: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; service: string }[] = [];
  
  serviceCategories.forEach((cat) => {
    cat.services.forEach((service) => {
      params.push({
        category: cat.slug,
        service: service.slug,
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, service } = await params;
  const serviceData = getServiceBySlug(category, service);
  
  if (!serviceData) {
    return {
      title: "Serviço não encontrado",
    };
  }

  return {
    title: serviceData.name,
    description: serviceData.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { category, service } = await params;
  const categoryData = getCategoryBySlug(category);
  const serviceData = getServiceBySlug(category, service);

  if (!categoryData || !serviceData) {
    notFound();
  }

  return (
    <div className="container-main py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <Sidebar activeCategory={category} />

        {/* Conteúdo principal */}
        <div className="flex-1">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-neutral-500 flex-wrap">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Portal 2909
                </Link>
              </li>
              <ChevronRight size={14} />
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <ChevronRight size={14} />
              <li>
                <Link
                  href={`/servicos/${category}`}
                  className="hover:text-primary transition-colors"
                >
                  {categoryData.name}
                </Link>
              </li>
              <ChevronRight size={14} />
              <li className="text-primary font-medium">{serviceData.name}</li>
            </ol>
          </nav>

          {/* Detalhes do serviço */}
          <div className="bg-white rounded-lg shadow-card border border-neutral-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-neutral-100">
              <h1 className="text-2xl font-bold text-neutral-800">
                {serviceData.name}
              </h1>
              <p className="text-neutral-600 mt-2">{serviceData.description}</p>
            </div>

            <div className="px-6 py-6">
              {/* Aviso de autenticação */}
              {serviceData.requiresAuth && (
                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
                  <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-amber-800">
                      Este serviço requer login
                    </p>
                    <p className="text-sm text-amber-700 mt-1">
                      Para abrir esta solicitação, você precisa estar logado em sua conta.{" "}
                      <Link href="/auth" className="underline hover:no-underline">
                        Clique aqui para fazer login ou se cadastrar
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              )}

              {/* Informações do serviço */}
              <div className="space-y-4 mb-8">
                <h2 className="font-semibold text-lg text-neutral-800">
                  Informações sobre este serviço
                </h2>
                <div className="prose prose-sm max-w-none text-neutral-600">
                  <p>
                    Utilize este formulário para registrar sua solicitação relacionada a{" "}
                    <strong>{serviceData.name.toLowerCase()}</strong> na cidade de Belford Roxo.
                  </p>
                  <p>
                    Após o envio, você receberá um número de protocolo para acompanhamento.
                    O prazo de resposta varia de acordo com a complexidade da demanda.
                  </p>
                </div>
              </div>

              {/* Campos do formulário (preview) */}
              {serviceData.fields.length > 0 && (
                <div className="space-y-4 mb-8">
                  <h2 className="font-semibold text-lg text-neutral-800">
                    Informações necessárias
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-neutral-600">
                    {serviceData.fields.map((field) => (
                      <li key={field.id}>
                        {field.label}
                        {field.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Botão de ação */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/solicitacao?category=${category}&service=${service}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Abrir Solicitação
                </Link>
                <Link
                  href={`/servicos/${category}`}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-300 text-neutral-700 font-medium rounded-lg hover:border-neutral-400 transition-colors"
                >
                  Voltar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
