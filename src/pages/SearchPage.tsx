import React from "react";
import {Grid, Flex, Icon} from "@chakra-ui/react";
import {IoLogoGithub} from "react-icons/io";
import {useColorModeValue} from "@/components/ui/color-mode";
import SearchForm from "@/components/SearchForm"; // Adjust path as needed

const SearchPage: React.FC = () => {
    const modeColor = useColorModeValue("gray.900", "gray.200");

    return (
        <Grid placeItems="center" h="100%">
            <Flex direction="column" align="center" gap={10}>
                <Icon as={IoLogoGithub} boxSize={20} color={modeColor}/>
                <SearchForm/>
            </Flex>
        </Grid>
    );
};

export default SearchPage;
