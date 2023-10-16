import { create } from "zustand";
const useAppStore = create((set) => ({
  user:
    typeof window !== undefined && localStorage.getItem("xaypher_user")
      ? JSON.parse(localStorage.getItem("xaypher_user") ?? "")
      : null,
  setUser: (payload: any) => set(() => ({ user: payload })),
  removeUser: () => set(() => ({ user: null })),
}));
export default useAppStore;
