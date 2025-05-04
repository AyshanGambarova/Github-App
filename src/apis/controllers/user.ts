import {TResUserProfile, TResRepos, TReqUserProfile} from '@/types/apis/user';
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

export const useApiUserRepositories = (
    {username, page = 1, per_page = 8}: TReqUserProfile,
    hasUserProfileData: boolean
) => {
    return useQuery<TResRepos[]>({
        queryFn: () =>
            get({
                url: `/users/${username}/repos`,
                params: {page, per_page},
            }),
        queryKey: [apiKeys.USER_REPOS, username, page, per_page],
        enabled: !!username && hasUserProfileData,
    })
};