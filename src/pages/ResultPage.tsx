import React from "react";
import {useParams} from "react-router-dom";
import {useApiUserProfile, useApiUserRepositories} from "@/apis/controllers/user";
import {Box, Center, Spinner, Text} from "@chakra-ui/react";
import UserInfoCard from "@/components/UserInfoCard";
import GoToBackButton from "@/components/GoToBackButton";
import UserRepos from "@/components/UserRepos";


const ResultPage: React.FC = () => {
    const {username} = useParams<{ username: string }>();


    const {
        data: dataUserProfile,
        isFetching: isFetchingUserProfile,
        isError: isErrorUserProfile,
    } = useApiUserProfile(username!)


    const {
        data: dataUserRepositories,
        isFetching: isFetchingUserRepositories,
        isError: isErrorUserRepositories,
    } = useApiUserRepositories(username!)

    if (isFetchingUserProfile) return (<Center h="100vh"><Spinner/></Center>);
    if (isErrorUserProfile || !dataUserProfile) return (
        <Center flexDirection="column" h='100vh'>
            <Text fontSize="xl" fontWeight="bold" mb={3}>
                User not found
            </Text>
            <GoToBackButton/>
        </Center>
    );

    return (
        <>
            <Box p={5}>
                <GoToBackButton/>
            </Box>
            <UserInfoCard data={dataUserProfile}/>
            <UserRepos data={dataUserRepositories}/>
        </>
    );
};

export default ResultPage;