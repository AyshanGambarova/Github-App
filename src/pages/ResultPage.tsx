import React from "react";
import {useParams} from "react-router-dom";
import {useApiUserProfile} from "@/apis/controllers/user";
import {Box, Grid, Spinner, Text} from "@chakra-ui/react";
import UserInfoCard from "@/components/UserInfoCard";
import UserRepos from "@/components/UserRepos";

const ResultPage: React.FC = () => {
    const {username} = useParams<{ username: string }>();

    const {
        data: dataUserProfile,
        isSuccess: isSuccessUserProfile,
        isFetching: isFetchingUserProfile,
        isError: isErrorUserProfile,
    } = useApiUserProfile(username!);

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
        <Grid
            templateColumns={{base: "1fr", md: "1fr 2.5fr"}}
            gap={6}
            py={5}
            px={5}
            pl={9}
            alignItems="start"
        >
            <Box alignSelf="start" minH='502px' height="100%">
                <UserInfoCard data={dataUserProfile}/>
            </Box>
            <Box>
                <UserRepos totalRepoCount={dataUserProfile.public_repos} hasUserProfileData={isSuccessUserProfile}/>
            </Box>
        </Grid>
    );
};

export default ResultPage;
