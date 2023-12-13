import { Box, Stack, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps {
    bgImage: string,
    children: ReactNode;
    cardLabel: string
}

export default function PreviewCardLayout(props: CardProps) {
    return (
        <Box borderRadius={8} bgImage={props.bgImage} backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover" width={300} height={300}>
            <Stack borderRadius={8} bg="rgba(0, 0, 0, 0.5)" height="100%" align="center" justify="center">
            <Heading color="#E2E8F0" as="h3" textAlign="center">{props.cardLabel}</Heading>
                {props.children}
            </Stack>
        </Box>
    )
}