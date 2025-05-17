'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

type PartnerMetrics = {
  name: string;
  email: string;
  totalAssigned: number;
  delivered: number;
  cancelled: number;
  successRatio: number;
};

export default function MetricsPage() {
  const [data, setData] = useState<PartnerMetrics[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/metrics/partners')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Partner Performance Metrics</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Assigned</th>
                <th className="p-3 border">Delivered</th>
                <th className="p-3 border">Cancelled</th>
                <th className="p-3 border">Success %</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p) => (
                <tr key={p.email} className="hover:bg-gray-50">
                  <td className="p-3 border font-medium">{p.name}</td>
                  <td className="p-3 border">{p.email}</td>
                  <td className="p-3 border text-center">{p.totalAssigned}</td>
                  <td className="p-3 border text-center">{p.delivered}</td>
                  <td className="p-3 border text-center">{p.cancelled}</td>
                  <td className="p-3 border text-center">{p.successRatio}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
