import React from "react";
import {
    Box,
    Badge,
    Text,
    Flex,
    Link,
} from "@chakra-ui/react";
import {FaStar} from "react-icons/fa";
import {LuExternalLink} from "react-icons/lu";
import {TResRepos} from "@/types/apis/user";
import {useColorModeValue} from "@/components/ui/color-mode";

interface UserRepoItemProps {
    repo: TResRepos;
}

const UserRepoItem: React.FC<UserRepoItemProps> = ({repo}) => {
    const modeColor = useColorModeValue("gray.100", "gray.900");

    return (
        <Box
            bgColor={modeColor}
            p={3}
            mr={{base: 0, md: 3}}
            mb={5}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
            position="relative"
            h="120px"
            display="flex"
            flexDirection="column"
        >
            {repo.private && (
                <Badge colorScheme="red" position="absolute" top="2" right="2">
                    Private
                </Badge>
            )}

            <Box flex="1">
                <Text fontWeight="bold" mb={1}>
                    {repo.name}
                </Text>
                <Text fontSize="sm" mt={2} color="gray.500" lineClamp="2">
                    {repo.description || "No description provided."}
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
    );
};

export default UserRepoItem;
