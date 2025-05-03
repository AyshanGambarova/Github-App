import React from "react";
import {
    Box,
    Flex,
    Image,
    Link,
    Text,
    Stack,
    Icon,
} from "@chakra-ui/react";
import {LuExternalLink} from "react-icons/lu";
import {TResUserProfile} from "@/types/apis/user";
import {useColorModeValue} from "@/components/ui/color-mode";

interface UserInfoProps {
    data: TResUserProfile;
}

const UserInfoCards: React.FC<UserInfoProps> = ({data}) => {
    const modeColor = useColorModeValue("gray.100", "gray.900");

    return (
        <Box
            bg={modeColor}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
            h="100%"
        >
            <Flex
                direction={{base: "column", md: "column", lg: "row"}}
                align={{base: "center"}}
                textAlign={{base: "center", lg: "left"}}
                gap={4}
            >
                {/* Avatar */}
                <Image
                    src={data?.avatar_url}
                    boxSize={{base: "120px", md: "140px", lg: "100px", xl: "180px"}}
                    borderRadius="full"
                    alt={data?.login}
                />

                {/* Info */}
                <Stack fontSize="sm" w="100%">
                    <Text><strong>Username:</strong> {data?.login ?? "Unknown"}</Text>
                    <Text><strong>Full Name:</strong> {data?.name || "Not provided"}</Text>
                    <Text><strong>Email:</strong> {data?.email || "Not public"}</Text>
                    <Text><strong>Bio:</strong> {data?.bio || "Not provided"}</Text>
                    <Text><strong>Location:</strong> {data?.location || "Not available"}</Text>
                    <Text><strong>Repositories:</strong> {data?.public_repos ?? 0}</Text>
                    <Text>
                        <strong>Followers / Following:</strong>{" "}
                        {data?.followers ?? 0} / {data?.following ?? 0}
                    </Text>
                    <Text>
                        <strong>Profile Link:</strong>{" "}
                        {data?.html_url ? (
                            <Link
                                href={data.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                color="teal.500"
                                display="inline-flex"
                                alignItems="center"
                                gap={1}
                            >
                                Visit GitHub <Icon as={LuExternalLink}/>
                            </Link>
                        ) : (
                            "Unavailable"
                        )}
                    </Text>
                </Stack>
            </Flex>
        </Box>
    );
};

export default UserInfoCards;
