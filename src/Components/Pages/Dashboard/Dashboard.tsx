import { Box, Heading } from "@chakra-ui/react";
import UnverifiedMessage from "../../Sections/Unverified";
import AlmanacGenerator from "../../Core/AlmanacGenerator/AlamacGenerator";

export default function Dashboard() {
    const isVerified = false
    return (
        <Box height="300px">
            <Heading>Hi Isa'ac</Heading>
            {!isVerified && <UnverifiedMessage />}
            {!isVerified && <AlmanacGenerator />}
        </Box>
    )
}