import { Flex, Icon, Stack, StackDirection, Text } from "@chakra-ui/react";
import { navItems } from "./navitems";
import { NavLink } from "react-router-dom";

interface NavItemProps {
    direction: StackDirection
    includeButton: boolean;
    onClick?: () => void;
}

export default function NavItemsRenderer(props: NavItemProps) {

    return (
        <Stack gap="50px" direction={props.direction} >
            {navItems.map((item) => {
                return (
                    <NavLink key={item.id} to={item.path}>
                        <Flex align="center" gap="19px">
                            <Icon color="green" as={item.icon} />
                            <Text color="#757897" fontWeight={700} fontSize="20px">{item.title}</Text>
                        </Flex>
                    </NavLink>
                )
            })}
        </Stack>
    )
}