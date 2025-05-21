import { create } from "zustand";

interface User {
  name: string;
}

interface AuthStore {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (name) => set({ user: { name } }),
  logout: () => set({ user: null }),
}));
