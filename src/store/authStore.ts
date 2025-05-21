import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (name) => set({ user: name }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage", // Key used in localStorage
    }
  )
);
