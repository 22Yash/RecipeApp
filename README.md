

# 🍲 Recipe App


## 📂 Project Structure

```
project-root/
│
├── frontend/               # React Native + Expo frontend
│   ├── app/                # Screens & navigation
│   ├── assets/             # Images, fonts
│   ├── components/         # Reusable UI components
│   ├── contexts/           # Context providers (auth, theme, etc.)
│   ├── graphql/            # Apollo Client setup, queries, mutations
│   ├── theme/              # Tamagui theming
│   ├── app.json            # Expo config
│   └── package.json
│
├── backend/                # Node.js backend
│   ├── config/             # Config files (db, server setup)
│   ├── graphql/            # Apollo Server setup
│   │   ├── resolvers/      # GraphQL resolvers
│   │   └── typeDefs/       # GraphQL schemas & typedefs
│   ├── models/             # Mongo/JS models (Recipe, Notes)
│   ├── index.js            # Express + Apollo server entry point
│   ├── .env                # Environment variables
│   └── package.json
│
└── README.md
```

---

## ⚡ Major Architecture Decisions

1. **Frontend**

   * **Expo + React Native:** Chosen for easy multi-platform development (Android, iOS, Web).
   * **Apollo Client:** Used for GraphQL communication with backend.
   * **React Query:** Handles REST API interactions for **Notes feature**.
   * **Tamagui:** Provides consistent theming, light/dark mode, and reusable UI primitives.
   * **React Navigation:** Manages app navigation (stack + tabs) with deep linking support.

2. **Backend**

   * **Apollo Server:** Provides a GraphQL API for recipes CRUD.
   * **Express REST Endpoints:** Handles **Notes CRUD** via REST, consumed by frontend with React Query.
   * **Schema-first GraphQL:** Type definitions (`typeDefs`) and resolvers ensure scalability.

3. **Deployment**

   * **EAS (Expo Application Services):** Handles Android, iOS, and Web builds.
   * **Static Web Hosting:** Expo web deployment or alternative hosting (e.g., Netlify).

---

## 🚀 Setup & Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/recipe-book-app.git
cd recipe-book-app
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

* Create a `.env` file in `backend/` with:

  ```env
  PORT=4000
  ```

* Start backend:

  ```bash
  npm start
  ```

* Backend runs at:

  * GraphQL: `http://localhost:4000/graphql`
  * REST Notes: `http://localhost:4000/notes`

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

* Start Expo app:

  ```bash
  npx expo start
  ```

* Choose platform:

  * Press `a` → Android Emulator
  * Press `i` → iOS Simulator
  * Press `w` → Web Browser

---

## 📱 App Features

* **Recipes (GraphQL)**

  * Create, Read, Update, Delete recipes
  * Search + filter by category
  * View recipe details

* **Notes (REST + React Query)**

  * Add/edit/delete notes per recipe

* **UI/UX**

  * Tamagui-based theming (light/dark mode)
  * Responsive layouts for Android, iOS, Web
  * Navigation + Deep Linking

    * `myapp://recipe/:id` → opens recipe details
    * `myapp://add` → opens Add Recipe screen

---

## 🛠 Development & Testing

* **Testing framework:** Jest / React Testing Library
* Run tests:

  ```bash
  cd frontend
  npm test
  ```

---

## 📦 Deployment

### Expo EAS Setup

```bash
npm install -g eas-cli
eas login
```

* Configure `eas.json` (in `frontend/`) with dev & preview profiles.

### Build Commands

* Android:

  ```bash
  eas build -p android
  ```
* iOS:

  ```bash
  eas build -p ios
  ```
* Web:

  ```bash
  expo build:web
  ```

---



---

Would you like me to also **add diagrams** (like architecture flow or folder structure visuals) inside this README for better clarity, or keep it text-based?
