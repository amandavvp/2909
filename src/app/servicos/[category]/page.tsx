import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Bell } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import { getCategoryBySlug, serviceCategories } from "@/data/services";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);
  
  if (!categoryData) {
    return {
      title: "Categoria não encontrada",
    };
  }

  return {
    title: categoryData.name,
    description: categoryData.description || `Serviços de ${categoryData.name} da Prefeitura de Belford Roxo`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
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
            <ol className="flex items-center gap-2 text-neutral-500">
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
              <li className="text-primary font-medium">{categoryData.name}</li>
            </ol>
          </nav>

          {/* Título da categoria */}
          <div className="bg-white rounded-lg shadow-card border border-neutral-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-800">
                {categoryData.name}
              </h1>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors">
                <Bell size={16} />
                Seguir
              </button>
            </div>

            {/* Lista de serviços */}
            <div className="divide-y divide-neutral-100">
              {categoryData.services.map((service) => (
                <Link
                  key={service.id}
                  href={`/servicos/${category}/${service.slug}`}
                  className="flex items-center justify-between px-6 py-4 hover:bg-neutral-50 transition-colors group"
                >
                  <div>
                    <h2 className="font-medium text-neutral-800 group-hover:text-primary transition-colors">
                      {service.name}
                    </h2>
                    {service.description && (
                      <p className="text-sm text-neutral-500 mt-1">
                        {service.description}
                      </p>
                    )}
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-neutral-400 group-hover:text-primary transition-colors"
                  />
                </Link>
              ))}
            </div>

            {categoryData.services.length === 0 && (
              <div className="px-6 py-12 text-center text-neutral-500">
                <p>Nenhum serviço cadastrado nesta categoria.</p>
              </div>
            )}
          </div>

          {/* Link para todos os serviços */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-primary hover:underline"
            >
              ← Voltar para todos os serviços
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
