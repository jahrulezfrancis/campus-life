import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import NavItemsRenderer from "./NavItemsRenderer";

export default function DesktopSidebar() {
    const { onClose } = useDisclosure()
    return (
        <Box display="flex" flexDirection="column" alignItems="center" minH="100vh" bg="white">
            <Heading mt="40px">Logo</Heading>
            <NavItemsRenderer onClick={onClose} includeButton={true} direction="column" />
        </Box>
    )
}