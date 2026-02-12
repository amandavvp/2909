// =============================================================================
// Serviços e categorias a partir do banco (para páginas conectadas ao admin)
// =============================================================================

import prisma from "@/lib/db";

export interface CategoryFromDb {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string | null;
  services: {
    id: string;
    name: string;
    slug: string;
    description: string;
    slaHours: number | null;
    slaPriority: string | null;
    detailedInfo: string | null;
    fields: string | null;
  }[];
}

export interface ServiceFromDb {
  id: string;
  name: string;
  slug: string;
  description: string;
  slaHours: number | null;
  slaPriority: string | null;
  detailedInfo: Record<string, unknown> | null;
  fields: unknown[] | null;
  category: {
    id: string;
    name: string;
    slug: string;
    icon: string;
  };
}

export async function getCategoryBySlugFromDb(slug: string): Promise<CategoryFromDb | null> {
  const cat = await prisma.serviceCategory.findFirst({
    where: { slug, isActive: true },
    include: {
      services: {
        where: { isActive: true },
        orderBy: { order: "asc" },
        select: {
          id: true,
          name: true,
          slug: true,
          description: true,
          slaHours: true,
          slaPriority: true,
          detailedInfo: true,
          fields: true,
        },
      },
    },
  });
  if (!cat) return null;
  return {
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    icon: cat.icon,
    description: cat.description,
    services: cat.services,
  };
}

export async function getServiceBySlugsFromDb(
  categorySlug: string,
  serviceSlug: string
): Promise<ServiceFromDb | null> {
  const category = await prisma.serviceCategory.findFirst({
    where: { slug: categorySlug, isActive: true },
    select: { id: true },
  });
  if (!category) return null;

  const service = await prisma.service.findFirst({
    where: { categoryId: category.id, slug: serviceSlug, isActive: true },
    include: {
      category: { select: { id: true, name: true, slug: true, icon: true } },
    },
  });
  if (!service) return null;

  let detailedInfo: Record<string, unknown> | null = null;
  if (service.detailedInfo) {
    try {
      detailedInfo = JSON.parse(service.detailedInfo) as Record<string, unknown>;
    } catch {
      // ignore
    }
  }

  let fields: unknown[] | null = null;
  if (service.fields) {
    try {
      fields = JSON.parse(service.fields) as unknown[];
    } catch {
      // ignore
    }
  }

  return {
    id: service.id,
    name: service.name,
    slug: service.slug,
    description: service.description,
    slaHours: service.slaHours,
    slaPriority: service.slaPriority,
    detailedInfo,
    fields,
    category: service.category,
  };
}

export async function getAllCategorySlugsFromDb(): Promise<{ category: string }[]> {
  const categories = await prisma.serviceCategory.findMany({
    where: { isActive: true },
    select: { slug: true },
  });
  return categories.map((c) => ({ category: c.slug }));
}
