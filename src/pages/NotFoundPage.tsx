import React from "react";
import {Flex, Grid, Icon, Text,} from "@chakra-ui/react";
import {MdErrorOutline} from "react-icons/md";

const NotFoundPage: React.FC = () => {

    return (
        <Grid placeItems="center" h="100%">
            <Flex direction="column" align="center" gap={6}>
                <Icon as={MdErrorOutline} boxSize={20} color="red.500"/>
                <Text fontSize="3xl" fontWeight="bold">
                    404 - Page Not Found
                </Text>
                <Text fontSize="lg" color="gray.600" textAlign="center">
                    The page you are looking for doesn’t exist.
                </Text>
            </Flex>
        </Grid>
    );
};

export default NotFoundPage;
