export interface ServicesConfig {
  userService: {
    url: string;
    timeout: number;
  };
  productService: {
    url: string;
    timeout: number;
  };
}

export const servicesConfig = (): ServicesConfig => ({
  userService: {
    url: process.env.USER_SERVICE_URL || 'http://localhost:3001',
    timeout: parseInt(process.env.USER_SERVICE_TIMEOUT ?? '5000', 10),
  },
  productService: {
    url: process.env.PRODUCT_SERVICE_URL || 'http://localhost:3002',
    timeout: parseInt(process.env.PRODUCT_SERVICE_TIMEOUT ?? '5000', 10),
  },
});
