import React from "react";
import {Stack, Text, Link, Icon} from "@chakra-ui/react";
import {LuExternalLink} from "react-icons/lu";
import {TResUserProfile} from "@/types/apis/user";

interface UserInfoSectionProps {
    data: TResUserProfile;
}

const UserInfoSection: React.FC<UserInfoSectionProps> = ({data}) => {
    return (
        <Stack as="div" fontSize="sm">
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
                        color="teal.600"
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
    );
};

export default UserInfoSection;
