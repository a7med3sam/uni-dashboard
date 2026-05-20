export const paths = {
  home: '/',
  products: {
    single: (id: string, orderId?: string) =>
      `/product/${id}${orderId ? `?orderId=${orderId}` : ''}`,
  },
  addresses: {
    root: '/addresses',
  },
  managecart: '/managecart',
  orders: {
    root: '/orders',
    single: (id: string) => `/orders/${id}`,
  },
  orderlink:{
    root: '/order-link',
    single: (linkCode: string) => `/order-link/${linkCode}`,
  },
};
