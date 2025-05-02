import React, {useState} from "react";
import {
    Box,
    Text,
    SimpleGrid,
    Button,
    Flex,
    Badge, Link
} from "@chakra-ui/react";
import {TResRepos} from "@/types/apis/user";
import {LuExternalLink} from "react-icons/lu";
import {FaStar} from "react-icons/fa";
import {useColorModeValue} from "@/components/ui/color-mode";

interface UserReposProps {
    data?: TResRepos[];
}

const ITEMS_PER_PAGE = 6;

const UserRepos: React.FC<UserReposProps> = ({data = []}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const modeColor = useColorModeValue("gray.100", "gray.900");
    const modeColorForPaginationButtons = useColorModeValue("gray.900", "gray.200");

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
        <Box p={5}>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
                Repositories
            </Text>

            <SimpleGrid columns={{base: 1, sm: 2, md: 2, lg: 3, xl: 3}} spacing={4}>
                {paginatedData.map((repo) => (
                    <Box
                        bgColor={modeColor}
                        key={repo.id}
                        p={3}
                        m={2}
                        borderWidth="1px"
                        borderRadius="md"
                        boxShadow="sm"
                        position="relative"
                        minH="150px"
                        display="flex"
                        flexDirection="column"
                    >
                        {repo.private && (
                            <Badge colorScheme="red" position="absolute" top="2" right="2">
                                Private
                            </Badge>
                        )}

                        <Box flex="1">
                            <Text fontWeight="bold" mb={1}>{repo.name}</Text>
                            <Text fontSize="sm" mt={2}>
                                {repo.description}
                            </Text>
                        </Box>

                        <Flex justify="space-between" align="center" mt="auto" pt={3}>
                            <Flex align="center" gap={1} fontSize="sm">
                                <Box color="yellow.400">
                                    <FaStar/>
                                </Box>
                                {repo.stargazers_count}
                            </Flex>
                            <Link
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                fontSize="sm"
                                display="flex"
                                alignItems="center"
                                gap={1}
                                color="teal.500"
                            >
                                Repo link <LuExternalLink/>
                            </Link>
                        </Flex>
                    </Box>


                ))}
            </SimpleGrid>

            <Flex justify="end" mt={6} gap={4} flexWrap="wrap">
                <Button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    bgColor={modeColorForPaginationButtons}
                >
                    Previous
                </Button>
                <Text alignSelf="center">
                    Page {currentPage} of {totalPages}
                </Text>
                <Button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages || totalPages === 0}
                    bgColor={modeColorForPaginationButtons}
                >
                    Next
                </Button>
            </Flex>
        </Box>
    );
};

export default UserRepos;
