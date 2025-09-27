export interface Tramite {
  id: number;
  title: string;
  description: string;
  link: string;
  category: string;
  created_at?: string;
}

export interface TramiteGroup {
  category: string;
  tramites: Tramite[];
}

export interface TramitesApiResponse {
  success: boolean;
  data: Tramite[] | TramiteGroup[];
  message?: string;
  error?: string;
}
