import { Avatar, Box, HStack, Heading, Icon, Image, Stack, Flex, Text, Button, AvatarGroup } from "@chakra-ui/react";
import FolderIcon from "../../../assets/folder-icon.svg"
import { MdOutlineMoreVert } from "react-icons/md";
import PersonImage from "../../../assets/black-female-student.jpg"

export default function FileHighlightCard() {
    return (
        <Box>
            <Stack justify="center" align="center" borderRadius={8} boxShadow="0px 0px 20px 5px rgba(182,182,185,1)" padding={15} bg="#FFFFFF" gap="10px" w="332px" height="193px">
                <HStack justify="space-evenly" align="start">
                    <Stack alignItems="center" justifyContent="center" bg="#CAFCED" width="40px" h="40px">
                        <Image width={"17px"} height={"13px"} src={FolderIcon} />
                    </Stack>
                    <Stack>
                        <Heading fontWeight={700} textTransform="capitalize" lineHeight={"18px"} fontSize={"16px"}>This is your title</Heading>
                        <Text fontSize="14px" color="#757897">This is your date</Text>
                    </Stack>
                    <Icon color="#757897" fontSize={40} as={MdOutlineMoreVert} />
                </HStack>
                <Stack>
                    <Text textTransform="capitalize">Share users</Text>
                    <Flex justify="space-between" wrap="wrap">
                        <AvatarGroup>
                            <Avatar width="36px" height="36px" borderRadius={10} src={PersonImage} />
                            <Avatar width="36px" height="36px" borderRadius={10} src={PersonImage} />
                            <Avatar width="36px" height="36px" borderRadius={10} src={PersonImage} />
                            <Avatar width="36px" height="36px" borderRadius={10} src={PersonImage} />
                            <Stack align="center" justify="center" borderRadius={10} bg="#CAFCED" width={"36px"} height="36px">
                                <Text color="#2DF8BB">+80</Text>
                            </Stack>
                        </AvatarGroup>
                        <Button border="1px solid #064733" width="76px" height="36px">View</Button>
                    </Flex>
                </Stack>
            </Stack>
        </Box>
    )
}