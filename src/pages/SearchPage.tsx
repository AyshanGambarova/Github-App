import React from "react";
import {
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    Icon,
    IconButton,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {LuUser} from "react-icons/lu";
import {AiOutlineSearch} from "react-icons/ai";
import {IoLogoGithub} from "react-icons/io";
import {useUsernameStore} from "@/stores/user";
import ColorModeButton from "@/pages/ColorModeButton";
import {useColorMode, useColorModeValue} from "@/components/ui/color-mode";

const SearchPage: React.FC = () => {
    const username = useUsernameStore((state) => state.username);
    const setUsername = useUsernameStore((state) => state.setUsername);
    const navigate = useNavigate();

    const modeColor = useColorModeValue("gray.900", "gray.200");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedUsername = username.trim();
        if (!trimmedUsername) return;
        navigate(`/result/${trimmedUsername}`);
    };

    return (
        <>
            <Flex justifyContent="end" p={5}>
                <ColorModeButton/>
            </Flex>
            <Center h="100vh">
                <Flex direction="column" align="center" gap={10}>
                    {/* GitHub Logo */}
                    <Icon as={IoLogoGithub} boxSize={20} color={modeColor}/>

                    {/* Form */}
                    <Flex as="form" gap={2} onSubmit={handleSubmit}>
                        <InputGroup startElement={<LuUser/>}>
                            <Input
                                placeholder="Enter GitHub username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </InputGroup>

                        <Button colorScheme="teal" type="submit" bgColor={modeColor}>
                            Search <AiOutlineSearch style={{marginLeft: 6}}/>
                        </Button>
                    </Flex>
                </Flex>
            </Center>
        </>
    );
};

export default SearchPage;
