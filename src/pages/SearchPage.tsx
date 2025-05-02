import React from "react";
import {
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    Icon,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {LuUser} from "react-icons/lu";
import {AiOutlineSearch} from "react-icons/ai";
import {IoLogoGithub} from "react-icons/io";
import {useUsernameStore} from "@/stores/user"; // adjust path as needed

const SearchPage: React.FC = () => {
    const username = useUsernameStore((state) => state.username);
    const setUsername = useUsernameStore((state) => state.setUsername);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedUsername = username.trim();
        if (!trimmedUsername) return;
        navigate(`/result/${trimmedUsername}`);
    };

    return (
        <Center h="100vh">
            <Flex direction="column" align="center" gap={10}>
                {/* GitHub Logo */}
                <Icon as={IoLogoGithub} boxSize={20} color="gray.900"/>

                {/* Form */}
                <Flex as="form" gap={2} onSubmit={handleSubmit}>
                    <InputGroup startElement={<LuUser/>}>
                        <Input
                            placeholder="Enter GitHub username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </InputGroup>

                    <Button colorScheme="teal" type="submit" bgColor="gray.700">
                        Search <AiOutlineSearch style={{marginLeft: 6}}/>
                    </Button>
                </Flex>
            </Flex>
        </Center>
    );
};

export default SearchPage;
