import {TResUserProfile, TResRepos} from '@/types/apis/user';
import {get} from '@/apis/methods';
import {useQuery} from "@tanstack/react-query";
import {apiKeys} from "@/apis/apiKeys";

export const useApiUserProfile = (username: string) =>
    useQuery<TResUserProfile>({
        queryFn: () => get({
            url: `/users/${username}`,
        }),
        queryKey: [apiKeys.USER_PROFILE, username],
        enabled: !!username,
    })

export const useApiUserRepositories = (username: string, hasUserProfileData: boolean) =>
    useQuery<TResRepos[]>({
        queryFn: () => get({
            url: `/users/${username}/repos`,
        }),
        queryKey: [apiKeys.USER_REPOS, username],
        enabled: !!username && hasUserProfileData,
    })
