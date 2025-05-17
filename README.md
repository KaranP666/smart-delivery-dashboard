# 🚚 Smart Delivery Management System

A full-stack delivery management platform that enables efficient partner assignments, order tracking, and performance monitoring using smart logic (time, area, load).

## 🌟 Features Overview

### ✅ Partner Management
- Add / Edit / Delete Delivery Partners
- Assign area, shift timings, and set active/inactive status
- View all partners in a responsive card UI
- Track performance via `/metrics`

### ✅ Order Management
- Add orders via UI or API (Postman supported)
- View all orders with customer details, status, and assigned partner
- Status flow: `Placed → Picked → Delivered`
- Smart assignment logic auto-assigns to eligible partners

### ✅ Smart Assignment Logic
- Assigns based on:
  - Active Status ✅
  - Shift Time ✅
  - Area Match ✅
  - Load Limit (Max 3 active orders) ✅
- Dynamic API-based assignment

### ✅ Performance Metrics
- Partner success ratio calculation
- Metrics page `/metrics` shows tabular performance
- Backend available at `/api/metrics/partners`

### ✅ Frontend Pages
| Page | Purpose |
|------|---------|
| `/partners` | Manage and view partners |
| `/orders` | Manage and track orders |
| `/metrics` | View performance metrics |

### 🧠 Bonus Features
- Clean and responsive UI (using Tailwind + shadcn/ui)
- Smart dialogs with prefilled data for edits
- State-sync without reloads
- API-centric backend design

---

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL via Prisma ORM
- **Tools**: TypeScript, Zustand (or other state management), Postman

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KaranP666/smart-delivery-system.git
cd smart-delivery-system
