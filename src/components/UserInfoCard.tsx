import React from "react";
import {Avatar, Box, Flex, Link, List, Text} from "@chakra-ui/react";
import {LuExternalLink} from "react-icons/lu";
import {TResUserProfile} from "@/types/apis/user";

interface UserInfoProps {
    data: TResUserProfile;
}

const UserInfoCard: React.FC<UserInfoProps> = ({data}) => {


    return (
        <Flex justify="center" py={10}>
            <Box
                maxW="lg"
                w="100%"
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
            >
                <Flex alignItems="center" justifyContent="between" py={10}>
                    <Avatar.Root size="2xl" mr={5}>
                        <Avatar.Fallback name={data?.login}/>
                        <Avatar.Image src={data?.avatar_url}/>
                    </Avatar.Root>
                    <Box ml={5} mt={4}>
                        <List.Root spacing={2} styleType="none" stylePosition="outside">
                            <List.Item>
                                <Text>
                                    <Text as="span"
                                          fontWeight="bold">Username:</Text> {data?.login ?? "Unknown"}
                                </Text>
                            </List.Item>

                            <List.Item>
                                <Text>
                                    <Text as="span" fontWeight="bold">Full
                                        Name:</Text> {data?.name || "Not provided"}
                                </Text>
                            </List.Item>

                            <List.Item>
                                <Text>
                                    <Text as="span"
                                          fontWeight="bold">Email:</Text> {data?.email || "Not public"}
                                </Text>
                            </List.Item>

                            <List.Item>
                                <Text>
                                    <Text as="span"
                                          fontWeight="bold">Bio:</Text> {data?.bio || "Not provided"}
                                </Text>
                            </List.Item>

                            <List.Item>
                                <Text>
                                    <Text as="span"
                                          fontWeight="bold">Location:</Text> {data?.location || "Not available"}
                                </Text>
                            </List.Item>

                            <List.Item>
                                <Text>
                                    <Text as="span" fontWeight="bold">Repositories
                                        Count:</Text> {data?.public_repos ?? 0}
                                </Text>
                            </List.Item>

                            <List.Item>
                                <Text>
                                    <Text as="span" fontWeight="bold">Followers /
                                        Following:</Text> {data?.followers ?? 0} / {data?.following ?? 0}
                                </Text>
                            </List.Item>

                            <List.Item>
                                <Text>
                                    <Text as="span" fontWeight="bold">Profile Link:</Text>{" "}
                                    {data?.html_url ? (
                                        <Link href={data.html_url} target="_blank"
                                              rel="noopener noreferrer">
                                            Visit Github profile <LuExternalLink/>
                                        </Link>
                                    ) : (
                                        "Unavailable"
                                    )}
                                </Text>
                            </List.Item>
                        </List.Root>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default UserInfoCard;