import create from "zustand";
import { persist } from "zustand/middleware";

const user = persist(
  (set) => ({
    token: "",
    isLoggedIn: true,
    user: null,
    recipes: [],
    comments: [],
    setRecipes: (recipes) => set({ recipes }),
    setComments: (comments) => set({ comments }),
    setUser: (token, user) => set({ token, user, isLoggedIn: true }),
    logout: () => set({ token: "", isLoggedIn: false, user: null }),
  }),
  { name: "user_setting" }
);

export const useUserStore = create(user);
