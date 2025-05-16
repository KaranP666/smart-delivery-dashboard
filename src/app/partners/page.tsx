'use client';

import { useEffect, useState } from 'react';
import { DeliveryPartner } from '@/types/partner';
import { Button } from '@/components/ui/button';
import AddPartnerDialog from '@/components/AddPartnerDialog';

export default function PartnersPage() {
  const [partners, setPartners] = useState<DeliveryPartner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/partners')
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this partner?');
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/partners/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 204) {
        setPartners((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert('Failed to delete partner.');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Something went wrong.');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'inactive':
        return 'bg-yellow-100 text-yellow-700';
      case 'blocked':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Delivery Partners</h1>
      <AddPartnerDialog onAdded={(newPartner) => setPartners((prev) => [...prev, newPartner])} />

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white shadow-sm rounded-2xl border p-5 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <h2 className="text-lg font-semibold mb-1">{partner.name}</h2>
                <p className="text-sm text-gray-600 mb-1">📧 {partner.email}</p>
                <p className="text-sm text-gray-600 mb-3">📞 {partner.phone}</p>
                <div className={`inline-block px-2 py-1 text-sm font-medium rounded-md ${getStatusColor(partner.status)}`}>
                  {partner.status}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  📦 Current Load: <span className="font-medium">{partner.currentLoad}</span>
                </p>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(partner.id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
