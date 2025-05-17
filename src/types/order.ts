export type Order = {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  area: string;
  items: { name: string; quantity: number; price: number }[];
  status: 'pending' | 'assigned' | 'picked' | 'delivered';
  scheduledFor: string;
  totalAmount: number;
  assignedTo?: string | null;
  deliveryPartner?: {
    name: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};
