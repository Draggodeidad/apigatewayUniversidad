export interface ServicesConfig {
  authService: {
    url: string;
    timeout: number;
  };
  tramitesService: {
    url: string;
    timeout: number;
  };
  userService: {
    url: string;
    timeout: number;
  };
  productService: {
    url: string;
    timeout: number;
  };
  supabase: {
    url: string;
    jwksUrl: string;
  };
}

export const servicesConfig = (): ServicesConfig => ({
  authService: {
    url: process.env.AUTH_SERVICE_URL || 'http://localhost:3000/graphql',
    timeout: parseInt(process.env.AUTH_SERVICE_TIMEOUT ?? '5000', 10),
  },
  tramitesService: {
    url: process.env.TRAMITES_SERVICE_URL || 'http://localhost:3050',
    timeout: parseInt(process.env.TRAMITES_SERVICE_TIMEOUT ?? '5000', 10),
  },
  userService: {
    url: process.env.USER_SERVICE_URL || 'http://localhost:3001',
    timeout: parseInt(process.env.USER_SERVICE_TIMEOUT ?? '5000', 10),
  },
  productService: {
    url: process.env.PRODUCT_SERVICE_URL || 'http://localhost:3002',
    timeout: parseInt(process.env.PRODUCT_SERVICE_TIMEOUT ?? '5000', 10),
  },
  supabase: {
    url: process.env.SUPABASE_URL || 'https://sirtkdkbqsklncyoallp.supabase.co',
    jwksUrl:
      process.env.SUPABASE_JWKS_URL ||
      'https://sirtkdkbqsklncyoallp.supabase.co/auth/v1/.well-known/jwks.json',
  },
});
