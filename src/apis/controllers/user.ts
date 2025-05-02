import {TResUserProfile, TResRepos} from '@/types/apis/user';
import {methodGet} from '@/apis/methods';
import {useQuery} from "@tanstack/react-query";
import {apiKeys} from "@/apis/apiKeys";

export const useApiUserProfile = (username: string) =>
    useQuery<TResUserProfile>({
        queryFn: () => methodGet({
            url: `/users/${username}`,
        }),
        queryKey: [apiKeys.USER_PROFILE, username],
        enabled: !!username,
        retry: false,
    })

export const useApiUserRepositories = (username: string) =>
    useQuery<TResRepos[]>({
        queryFn: () => methodGet({
            url: `/users/${username}/repos`,
        }),
        queryKey: [apiKeys.USER_REPOS, username],
        enabled: !!username,
        retry: false,
    })
