import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {
    Box,
    SimpleGrid,
    Flex,
    Text,
} from "@chakra-ui/react";
import {useApiUserRepositories} from "@/apis/controllers/user";
import Pagination from "@/components/Pagination";
import UserRepoItem from "@/components/UserRepoItem";
import {RiGitRepositoryLine} from "react-icons/ri";
import {TReqUserProfile, TResRepos} from "@/types/apis/user";

interface UserReposProps {
    totalRepoCount: number;
    hasUserProfileData: boolean;
}

const UserRepos: React.FC<UserReposProps> = ({totalRepoCount, hasUserProfileData}) => {
    const {username} = useParams<{ username: string }>();
    const safeUsername = username || "";

    const [queryUser, setQueryUser] = useState<TReqUserProfile>({
        username: safeUsername,
        page: 1,
        per_page: 8
    });

    const {data: dataUserRepositories} = useApiUserRepositories(queryUser, hasUserProfileData);

    console.log(dataUserRepositories);
    const handlePrevPage = () => {
        setQueryUser((prev) => ({
            ...prev,
            page: Math.max(prev.page - 1),
        }));
    };

    const handleNextPage = () => {
        setQueryUser((prev) => ({
            ...prev,
            page: prev.page + 1,
        }));
    };

    return (
        <Flex direction="column" justify="space-between" h="100%">
            {dataUserRepositories?.length === 0 ? (
                <Flex justify="center" align="center" h="150px">
                    <Text fontSize="md" color="gray.500" textAlign="center">
                        This user doesn't have any public repositories yet.
                    </Text>
                </Flex>
            ) : (
                <>
                    <Box flex="1">
                        <Flex align="center" textStyle="xl" fontWeight="semibold" mb={5}>
                            <Box mr={2}><RiGitRepositoryLine/></Box>
                            <Text>Repositories</Text>
                            <Box
                                borderRadius="full"
                                bg="gray.100"
                                color="blackAlpha.800"
                                px={4}
                                ml={3}
                                fontSize="md"
                            >
                                {totalRepoCount}
                            </Box>
                        </Flex>
                        <SimpleGrid columns={{base: 1, sm: 1, md: 2, lg: 3, xl: 4}}>
                            {dataUserRepositories?.map((repo: TResRepos) => (
                                <UserRepoItem key={repo.id} repo={repo}/>
                            ))}
                        </SimpleGrid>
                    </Box>

                    <Flex justify="flex-end" mt={6}>
                        <Pagination
                            currentPage={queryUser.page}
                            dataUserRepositories={dataUserRepositories}
                            onPrev={handlePrevPage}
                            onNext={handleNextPage}
                        />
                    </Flex>
                </>
            )}
        </Flex>
    );
};

export default UserRepos;
