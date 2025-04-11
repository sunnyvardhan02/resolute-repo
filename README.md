# User Management System

A simple and responsive **User Management System** built with **Angular 14**.  
It allows users to **add**, **edit**, **delete**, **search**, **sort**, and **manage roles** with **localStorage-based persistence**. Styled using **pure CSS** (no Angular Material).

---

## ✨ Features

- ✅ List users with pagination (10 per page)
- 🔍 Search users by name or email
- ↕️ Sort by name or email (asc/desc)
- ➕ Add new users with validation
- ✏️ Edit existing users
- ❌ Delete users with confirmation
- 🛡️ Role management (Admin/User)
- 💾 Persistent data using localStorage
- 📱 Responsive design (works on desktop & mobile)

---

## 💻 How to Run Locally

Follow these steps to run the project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/sunnyvardhan02/resolute-repo.git
cd resolute-repo
```

### 2. Install dependencies
Make sure you have Node.js and Angular CLI installed. Then run:
```bash
npm install
```

### 3. Run the development server
```bash
ng serve
```

### 4. Open in browser
Visit [http://localhost:4200](http://localhost:4200) to view the app in action.

---

## 📁 Project Structure

```bash
src/
│
├── app/
│   ├── components/
│   │   ├── user-list/         # Lists users
│   │   └── user-form/         # Add/Edit user form
│   ├── models/
│   │   └── user.model.ts      # User interface
│   ├── services/
│   │   └── user.service.ts    # Business logic & localStorage
│   ├── app-routing.module.ts
│   └── app.module.ts
│
├── assets/
├── styles.css
└── index.html
```

---

## 🧑‍💻 Tech Stack

- Angular 14
- TypeScript
- HTML + CSS (no Angular Material)
- LocalStorage (for persistence)

