import { Box, Flex, Spacer, useMediaQuery, Heading } from "@chakra-ui/react";
import SideBar from "./Sidebar";
import NavItemsRenderer from "./NavItemsRenderer";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isMobile] = useMediaQuery('(max-width: 650px)');


    return (
        <Box alignContent="center" height={70} bg="gray.200" p={4}>
            <Flex h="100%" align="center">
                {isMobile ? <Box>
                    <SideBar />
                </Box> : <NavLink to="/dashboard"><Heading fontSize='xl'>Campus Life</Heading></NavLink>}
                <Spacer />
                {!isMobile && <NavLink to={"/dashboard"}>Dashboard </NavLink>}
                <NavItemsRenderer includeButton={false} direction="row" />
            </Flex>
        </Box>
    );
}