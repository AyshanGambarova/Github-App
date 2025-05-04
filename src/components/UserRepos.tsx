import React, {useState} from "react";
import {
    Box,
    SimpleGrid,
    Flex,
    Text,
} from "@chakra-ui/react";
import {TResRepos} from "@/types/apis/user";
import Pagination from "@/components/Pagination";
import UserRepoItem from "@/components/UserRepoItem";
import {RiGitRepositoryLine} from "react-icons/ri";

interface UserReposProps {
    data?: TResRepos[];
    totalRepoCount: number
}

const ITEMS_PER_PAGE = 8;

const UserRepos: React.FC<UserReposProps> = ({data = [], totalRepoCount}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <Flex direction="column" justify="space-between" h="100%">
            {data.length === 0 ? (
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
                            {paginatedData.map((repo) => (
                                <UserRepoItem key={repo.id} repo={repo}/>
                            ))}
                        </SimpleGrid>
                    </Box>

                    <Flex justify="flex-end">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
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
