import React from "react";
import {
    Button,
    Grid,
    Flex,
    Input,
    InputGroup,
    Icon,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {LuUser} from "react-icons/lu";
import {AiOutlineSearch} from "react-icons/ai";
import {IoLogoGithub} from "react-icons/io";
import {useUsernameStore} from "@/stores/user";
import {useColorModeValue} from "@/components/ui/color-mode";

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
        <Grid placeItems="center" h="100%">
            <Flex direction="column" align="center" gap={10}>
                <Icon as={IoLogoGithub} boxSize={20} color={modeColor}/>

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
        </Grid>
    );
};

export default SearchPage;
