import React from "react";
import {
    Box,
    Flex,
    Image,
} from "@chakra-ui/react";
import {TResUserProfile} from "@/types/apis/user";
import {useColorModeValue} from "@/components/ui/color-mode";
import UserInfoSection from "./UserInfoSection";

interface UserInfoProps {
    data: TResUserProfile;
}

const UserInfoCard: React.FC<UserInfoProps> = ({data}) => {
    const modeColor = useColorModeValue("gray.100", "gray.900");

    return (
        <Box
            bg={modeColor}
            p={4}
            pt={{base: 4, md: 10}}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            h="100%"
        >
            <Flex
                direction={{base: "column"}}
                align={{base: "center"}}
                gap={4}
            >
                <Image
                    src={data?.avatar_url}
                    boxSize={{base: "100px"}}
                    borderRadius="full"
                    alt={data?.login}
                />
                <UserInfoSection data={data}/>
            </Flex>
        </Box>
    );
};

export default UserInfoCard;
