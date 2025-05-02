import React from "react";
import {Box, Center, Text, Icon} from "@chakra-ui/react";
import {MdErrorOutline} from "react-icons/md";
import GoToBackButton from "@/components/GoToBackButton";

const NotFoundPage: React.FC = () => {
    return (
        <Center h="100vh" flexDirection="column" textAlign="center">
            <Icon as={MdErrorOutline} boxSize={20} color="red.500" mb={4}/>
            <Text fontSize="3xl" fontWeight="bold" mb={2}>
                404 - Page Not Found
            </Text>
            <Text fontSize="lg" color="gray.600" mb={6}>
                The page you are looking for doesn’t exist.
            </Text>
            <GoToBackButton/>
        </Center>
    );
};

export default NotFoundPage;
