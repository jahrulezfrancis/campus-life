import { Box, Heading } from "@chakra-ui/react";
import UnverifiedMessage from "../../Sections/Unverified";

export default function Dashboard() {
    const isVerified = false
    return (
        <Box padding={5} height="300px">
            <Heading>Hi Isa'ac</Heading>
            {!isVerified && <UnverifiedMessage />}
        </Box>
    )
}