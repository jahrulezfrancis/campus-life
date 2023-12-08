import { Box, Flex, Spacer, useDisclosure, Collapse, useMediaQuery } from "@chakra-ui/react";
import SideBar from "./Sidebar";
import NavItemsRenderer from "./NavItemsRenderer";

export default function Navbar() {
    const { isOpen, } = useDisclosure();
    const [isMobile] = useMediaQuery('(max-width: 650px)');


    return (
        <Box bg="gray.200" p={4}>
            <Flex align="center">
                <Box>
                    <SideBar />
                </Box>
                <Spacer />
                <Collapse in={!isMobile || isOpen} animateOpacity>
                    <NavItemsRenderer includeButton={false} direction="row" />
                </Collapse>
            </Flex>
        </Box>
    );
}