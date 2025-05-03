import {create} from "zustand";
import {persist} from "zustand/middleware";

interface UsernameStore {
    username: string;
    setUsername: (value: string) => void;
}

export const useUsernameStore = create<UsernameStore>()(
    persist(
        (set) => ({
            username: "",
            setUsername: (value) => set({username: value}),
        }),
        {
            name: "github-username-store",
        }
    )
);
