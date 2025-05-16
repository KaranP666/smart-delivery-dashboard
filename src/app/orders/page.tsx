'use client';

import { useEffect, useState } from 'react';
import { Order } from '@/types/order';
import { Button } from '@/components/ui/button';

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/orders')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'assigned':
        return 'bg-blue-100 text-blue-700';
      case 'picked':
        return 'bg-purple-100 text-purple-700';
      case 'delivered':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleAssign = async () => {
    const res = await fetch('/api/orders/assign', { method: 'POST' });
    const data = await res.json();
    alert('Assignment triggered!');
    location.reload();
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Orders</h1>
        <Button onClick={handleAssign}>⚡ Assign All Pending Orders</Button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-sm rounded-2xl border p-5 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold mb-2">#{order.orderNumber}</h2>
                <p className="text-sm text-gray-600">👤 {order.customerName}</p>
                <p className="text-sm text-gray-600">📞 {order.customerPhone}</p>
                <p className="text-sm text-gray-600">📍 {order.customerAddress}</p>
                <p className="text-sm text-gray-600">🕒 {order.scheduledFor}</p>
                <p className="text-sm text-gray-600">📦 Items: {order.items.length}</p>
                <p className="text-sm text-gray-600">💰 ₹{order.totalAmount.toFixed(2)}</p>
                <div className={`mt-2 inline-block px-2 py-1 text-sm rounded ${getStatusColor(order.status)}`}>
                  {order.status.toUpperCase()}
                </div>
                {order.assignedTo && (
                  <p className="text-xs mt-1 text-gray-500">👨 Assigned to: {order.assignedTo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
