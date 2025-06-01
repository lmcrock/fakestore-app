# 🛍️ FakeStore E-Commerce App

A React-based e-commerce front-end that interacts with the [FakeStoreAPI](https://fakestoreapi.com/). This project simulates CRUD operations — users can browse, create, edit, and delete products using API calls.

---

## 🚀 Features

- 🏠 Home page with intro message and navigation
- 🛍 Product listing pulled from FakeStoreAPI
- 📄 View individual product details
- ➕ Add new products (POST)
- ✏️ Edit existing products (PUT)
- 🗑 Delete products (DELETE)
- ✅ Responsive design with React Bootstrap
- 🔁 Routing with React Router
- ⚙️ Error and loading states handled gracefully

> ℹ️ **Note:** FakeStoreAPI does not persist POST/PUT/DELETE changes. All success responses are simulated for front-end testing purposes.

---

## 🛠 Built With

- React + Vite
- React Router
- Axios
- React Bootstrap
- FakeStoreAPI (mock API)

---

## 📸 Screenshots

| Page        | Preview |
|-------------|---------|
| Home        | ![Home](./screenshots/home.png) |
| Product List| ![Products](./screenshots/products.png) |
| Details     | ![Details](./screenshots/details.png) |

*(optional: add actual screenshots if you'd like)*

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/lmcrock/fakestore-app.git
cd fakestore-app
npm install
npm run dev
