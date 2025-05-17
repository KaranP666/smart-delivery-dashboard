'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { DeliveryPartner } from '@/types/partner';

type Props = {
  partner: DeliveryPartner;
  onUpdated: (updatedPartner: DeliveryPartner) => void;
};

export default function EditPartnerDialog({ partner, onUpdated }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: partner.name,
    email: partner.email,
    phone: partner.phone,
    status: partner.status,
    areas: partner.areas.join(', '),
    shiftStart: partner.shiftStart,
    shiftEnd: partner.shiftEnd,
    rating: partner.rating,
    completedOrders: partner.completedOrders,
    cancelledOrders: partner.cancelledOrders,
    currentLoad: partner.currentLoad,
  });

  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/partners/${partner.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          areas: form.areas.split(',').map((a) => a.trim()),
          shift: {
            start: form.shiftStart,
            end: form.shiftEnd,
          },
          metrics: {
            rating: +form.rating,
            completedOrders: +form.completedOrders,
            cancelledOrders: +form.cancelledOrders,
          },
        }),
      });

      const updated = await res.json();
      onUpdated(updated);
      setOpen(false);
    } catch (err) {
      console.error('Failed to update partner', err);
      alert('Something went wrong.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Partner</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div>
            <Label>Name</Label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <Label>Email</Label>
            <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <Label>Phone</Label>
            <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div>
            <Label>Status</Label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="border p-2 rounded w-full"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <Label>Areas</Label>
            <Input value={form.areas} onChange={(e) => setForm({ ...form, areas: e.target.value })} />
          </div>
          <div>
            <Label>Shift Start</Label>
            <Input type="time" value={form.shiftStart} onChange={(e) => setForm({ ...form, shiftStart: e.target.value })} />
          </div>
          <div>
            <Label>Shift End</Label>
            <Input type="time" value={form.shiftEnd} onChange={(e) => setForm({ ...form, shiftEnd: e.target.value })} />
          </div>
          <div>
            <Label>Rating</Label>
            <Input type="number" value={form.rating} onChange={(e) => setForm({ ...form, rating: +e.target.value })} />
          </div>
          <div>
            <Label>Completed Orders</Label>
            <Input type="number" value={form.completedOrders} onChange={(e) => setForm({ ...form, completedOrders: +e.target.value })} />
          </div>
          <div>
            <Label>Cancelled Orders</Label>
            <Input type="number" value={form.cancelledOrders} onChange={(e) => setForm({ ...form, cancelledOrders: +e.target.value })} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleUpdate}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
