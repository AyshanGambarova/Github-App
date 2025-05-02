import {create} from "zustand";

interface UsernameStore {
    username: string;
    setUsername: (value: string) => void;
}

export const useUsernameStore = create<UsernameStore>((set) => ({
    username: "",
    setUsername: (value) => set({username: value}),
}));
