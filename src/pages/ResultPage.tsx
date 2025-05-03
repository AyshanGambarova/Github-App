import React from "react";
import {useParams} from "react-router-dom";
import {useApiUserProfile, useApiUserRepositories} from "@/apis/controllers/user";
import {Box, Grid, Spinner, Text} from "@chakra-ui/react";
import UserInfoCards from "@/components/UserInfoCards";
import UserRepos from "@/components/UserRepos";

const ResultPage: React.FC = () => {
    const {username} = useParams<{ username: string }>();

    const {
        data: dataUserProfile,
        isSuccess: isSuccessUserProfile,
        isFetching: isFetchingUserProfile,
        isError: isErrorUserProfile,
    } = useApiUserProfile(username!);

    const {
        data: dataUserRepositories,
    } = useApiUserRepositories(username!, isSuccessUserProfile);

    if (isFetchingUserProfile)
        return (
            <Grid h="100%" placeItems="center">
                <Spinner/>
            </Grid>
        );

    if (isErrorUserProfile || !dataUserProfile)
        return (
            <Grid h="100%" placeItems="center">
                <Text fontSize="xl" fontWeight="bold">
                    User not found
                </Text>
            </Grid>
        );

    return (
        <>
            <Grid
                templateColumns={{base: "1fr", md: "1fr 2.5fr"}}
                gap={6}
                p={5}
                mt={10}
            >
                <Box>
                    <UserInfoCards data={dataUserProfile}/>
                </Box>
                <Box>
                    <UserRepos data={dataUserRepositories}/>
                </Box>
            </Grid>


        </>
    );
};

export default ResultPage;
