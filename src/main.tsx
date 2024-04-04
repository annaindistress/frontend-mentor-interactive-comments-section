import React from "react";
import ReactDOM from "react-dom/client";
import { CommentsProvider } from "./contexts/CommentsProvider.tsx";
import { UserProvider } from "./contexts/UserProvider.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CommentsProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CommentsProvider>
  </React.StrictMode>
);
