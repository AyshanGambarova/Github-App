import React, {useState} from "react";
import {Button, Center, Flex, Input} from "@chakra-ui/react";
import {useQuery} from "@tanstack/react-query";
import {useApiUserProfile} from "@/apis/controllers/user";
import {apiKeys} from "@/apis/apiKeys";

const SearchPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const {
        data: dataUserProfile,
        isFetching: isFetchingUserProfile,
    } = useQuery({
        queryFn: () => useApiUserProfile(searchTerm),
        queryKey: [apiKeys.USER_PROFILE, searchTerm],
        enabled: !!searchTerm,
        retry: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchTerm(username.trim());
    };

    return (
        <Center h="100vh">
            <Flex as="form" gap={2} onSubmit={handleSubmit}>
                <Input
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Button colorScheme="teal" type="submit" isLoading={isFetchingUserProfile}>
                    Search
                </Button>
            </Flex>
        </Center>
    );
};

export default SearchPage;


