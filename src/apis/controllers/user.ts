import {TResUserProfile, TResRepos} from '@/types/apis/user';
import {methodGet} from '@/apis/methods';

export const useApiUserProfile = (username: string): Promise<TResUserProfile> =>
    methodGet({
        url: `/users/${username}`,
    });

export const useApiUserRepositories = (username: string): Promise<TResRepos[]> =>
    methodGet({
        url: `/users/${username}/repos`,
    });
