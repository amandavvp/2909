// Tipos para Categorias e Serviços
export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  slug: string;
  description?: string;
  services: Service[];
}

export interface DetailedServiceInfo {
  oQueE: string;
  paraQueServe: string;
  quemPodeSolicitar: string;
  informacoesComplementares?: string;
  informacoesNecessarias: string[];
  tempoAtendimento: string;
  legislacao?: string[];
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description: string;
  requiresAuth: boolean;
  detailedInfo?: DetailedServiceInfo;
  fields: FormField[];
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'file' | 'date' | 'cpf' | 'phone' | 'email' | 'address';
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

// Tipos para Usuário e Autenticação
export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone?: string;
  address?: Address;
  createdAt: Date;
}

export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

// Tipos para Solicitações/Protocolos
export interface Request {
  id: string;
  protocol: string;
  userId: string;
  serviceId: string;
  serviceName: string;
  categoryName: string;
  status: RequestStatus;
  description: string;
  address?: Address;
  attachments: Attachment[];
  createdAt: Date;
  updatedAt: Date;
  history: RequestHistoryItem[];
  isAnonymous: boolean;
}

export type RequestStatus = 
  | 'pending'
  | 'in_progress'
  | 'waiting_info'
  | 'resolved'
  | 'closed'
  | 'cancelled';

export interface RequestHistoryItem {
  id: string;
  status: RequestStatus;
  message: string;
  createdAt: Date;
  isPublic: boolean;
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}

// Tipos para Notícias
export interface News {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  category: string;
  publishedAt: Date;
  author: string;
}

// Tipos para FAQ/Perguntas Frequentes
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  categoryId: string;
  order: number;
}

// Tipos para formulários
export interface LoginFormData {
  cpf: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface RequestFormData {
  serviceId: string;
  description: string;
  address?: Address;
  attachments?: File[];
  isAnonymous: boolean;
}

// Tipos para API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Tipos para acessibilidade
export type FontSize = 'normal' | 'large' | 'larger';
export type ContrastMode = 'normal' | 'high';

export interface AccessibilitySettings {
  fontSize: FontSize;
  contrastMode: ContrastMode;
}
