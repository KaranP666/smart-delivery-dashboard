"use client";

import { useEffect, useState } from "react";
import { Order } from "@/types/order";
import { Button } from "@/components/ui/button";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "assigned":
        return "bg-blue-100 text-blue-700";
      case "picked":
        return "bg-purple-100 text-purple-700";
      case "delivered":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getNextStatus = (status: Order["status"]) => {
    if (status === "assigned") return "picked";
    if (status === "picked") return "delivered";
    return null;
  };

  const handleNextStatus = async (id: string, nextStatus: Order["status"]) => {
    try {
      const res = await fetch(`/api/orders/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });

      const updated = await res.json();
      setOrders((prev) => prev.map((o) => (o.id === updated.id ? updated : o)));
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleAssign = async () => {
    await fetch("/api/orders/assign", { method: "POST" });
    alert("Assignment triggered!");
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
          {orders.map((order) => {
            const nextStatus = getNextStatus(order.status);

            return (
              <div
                key={order.id}
                className="bg-white shadow-sm rounded-2xl border p-5 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    #{order.orderNumber}
                  </h2>
                  <p className="text-sm text-gray-600">
                    👤 {order.customerName}
                  </p>
                  <p className="text-sm text-gray-600">
                    📞 {order.customerPhone}
                  </p>
                  <p className="text-sm text-gray-600">
                    📍 {order.customerAddress}
                  </p>
                  <p className="text-sm text-gray-600">
                    🕒 {order.scheduledFor}
                  </p>
                  <p className="text-sm text-gray-600">
                    📦 Items: {order.items.length}
                  </p>
                  <p className="text-sm text-gray-600">
                    💰 ₹{order.totalAmount.toFixed(2)}
                  </p>
                  <div
                    className={`mt-2 inline-block px-2 py-1 text-sm rounded ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status.toUpperCase()}
                  </div>
                  {order.deliveryPartner?.name ? (
                    <p className="text-xs mt-1 text-gray-500">
                      👨 Assigned to: {order.deliveryPartner.name}
                    </p>
                  ) : (
                    <p className="text-xs mt-1 text-gray-400 italic">
                      Not assigned
                    </p>
                  )}
                </div>

                {nextStatus && (
                  <div className="mt-4 flex justify-end">
                    <Button
                      size="sm"
                      onClick={() => handleNextStatus(order.id, nextStatus)}
                    >
                      Mark as{" "}
                      {nextStatus.charAt(0).toUpperCase() + nextStatus.slice(1)}
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
