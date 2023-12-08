import { Button, Icon, Stack, StackDirection } from "@chakra-ui/react";
import { navItems } from "./navitems";
import { NavLink } from "react-router-dom";

interface NavItemProps {
    direction: StackDirection
    includeButton: boolean;
}

export default function NavItemsRenderer(props: NavItemProps) {
    return (
        <Stack direction={props.direction} >
            {navItems.map((item) => {
                return (

                    <NavLink to={item.path}>
                        <Button display={props.includeButton ? 'flex' : 'none'} alignItems="center" justifyContent="start" width={150} leftIcon={<Icon as={item.icon} />}>{item.title}</Button>
                        {!props.includeButton && item.title}
                    </NavLink>
                )
            })}
        </Stack>
    )
}