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

type Props = {
  onAdded: (partner: any) => void;
};

export default function AddPartnerDialog({ onAdded }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'active',
    areas: '',
    shiftStart: '',
    shiftEnd: '',
    rating: 0,
    completedOrders: 0,
    cancelledOrders: 0,
    currentLoad: 0,
  });

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/partners/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          status: form.status,
          currentLoad: Number(form.currentLoad),
          areas: form.areas.split(',').map((a) => a.trim()),
          shift: {
            start: form.shiftStart,
            end: form.shiftEnd,
          },
          metrics: {
            rating: Number(form.rating),
            completedOrders: Number(form.completedOrders),
            cancelledOrders: Number(form.cancelledOrders),
          },
        }),
      });

      const newPartner = await res.json();
      onAdded(newPartner);

      // Reset form
      setForm({
        name: '',
        email: '',
        phone: '',
        status: 'active',
        areas: '',
        shiftStart: '',
        shiftEnd: '',
        rating: 0,
        completedOrders: 0,
        cancelledOrders: 0,
        currentLoad: 0,
      });
    } catch (error) {
      console.error('Add partner error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-4">➕ Add Partner</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Partner</DialogTitle>
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
            <Label>Areas (comma-separated)</Label>
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
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
