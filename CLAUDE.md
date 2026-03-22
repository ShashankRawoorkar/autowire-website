# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# From repo root — runs both client (port 5173) and server (port 3001) concurrently
npm run dev

# Run only one side
npm run dev:client
npm run dev:server

# Install all dependencies (root + client + server)
npm run install:all

# Production build (client only)
npm run build
```

There are no test scripts configured in this project.

## Architecture

This is a monorepo with two independent packages:

- `client/` — React 18 + Vite SPA
- `server/` — Express.js API

The client proxies `/api` requests to the server via Vite's dev proxy. In production, something external must handle that routing.

### Server

**No database.** All product data lives in `server/src/data/products.js` as an in-memory array. To add or modify products, edit that file directly.

Route → Controller pattern: `server/src/routes/` files register endpoints and delegate entirely to `server/src/controllers/`. Error handling is centralized in `server/src/middleware/errorHandler.js` — controllers call `next(err)` with an optional `err.status` code.

**API endpoints:**
- `GET /api/products` — supports `?category=`, `?maxPrice=`, `?sort=price_asc|price_desc|newest|rating`, `?badge=`, `?search=`
- `GET /api/products/featured` — returns first 4 products from the array
- `GET /api/products/:id` — integer ID lookup
- `POST /api/newsletter/subscribe` — `{ email }` body, regex-validated

### Client

**State management:** Two React contexts wrap the entire app (in `App.jsx`):
- `CartContext` — useReducer-based cart with `items`, `isOpen`, `totalItems`, `totalPrice`. Cart items are keyed by `(id, selectedSize, selectedColor)` tuple — adding the same combo increments qty. Access via `useCart` hook.
- `ToastContext` — single transient notification, auto-hides after 2.5s. Access via `useToast` hook.

**API calls:** All server requests go through `client/src/services/api.js`, which exports named async functions (`getProducts`, `getProductById`, `getFeaturedProducts`, `subscribeNewsletter`). The Axios instance uses `baseURL: '/api'`.

**Component conventions:**
- Each component lives in its own folder (e.g., `components/ui/Button/Button.jsx`) with a co-located CSS Module (`Button.module.css`)
- Pages are under `pages/`, composed of page-specific sub-components in a `components/` subfolder within the page directory
- `CartDrawer` and `Toast` are rendered once at the app root level in `AppLayout`; they read open/visible state from context

**Routes:**
- `/` → `Home` (hero, categories, featured products, promo, newsletter sections)
- `/shop` → `Shop` (sidebar filters + toolbar + product grid)
- `/product/:id` → `ProductDetail` (gallery, info, tabs)
