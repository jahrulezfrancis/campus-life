import { Button, Icon, Stack, StackDirection } from "@chakra-ui/react";
import { navItems } from "./navitems";
import { NavLink } from "react-router-dom";

interface NavItemProps {
    direction: StackDirection
    includeButton: boolean;
    onClick?: () => void;
}

export default function NavItemsRenderer(props: NavItemProps) {

    return (
        <Stack direction={props.direction} >
            {navItems.map((item) => {
                return (
                    <NavLink key={item.id} to={item.path}>
                        <Button onClick={props.onClick} display={props.includeButton ? 'flex' : 'none'} alignItems="center" justifyContent="start" width={150} leftIcon={<Icon as={item.icon} />}>{item.title}</Button>
                        {!props.includeButton && !item.title.includes("Dashboard") && item.title}
                    </NavLink>
                )
            })}
        </Stack>
    )
}