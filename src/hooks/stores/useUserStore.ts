import { create } from 'zustand';
import { User } from "@prisma/client";
import { privateRoutes } from '@/utils/apiUrlBase';

interface UserStore {
  user: User | null;
  setUser: (newUser: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
  clearUser: () => set({ user: null }),
}));