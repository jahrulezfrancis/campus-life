import { Box, HStack, Heading } from "@chakra-ui/react";
import UnverifiedMessage from "../../Sections/Unverified";
import PhotoHighlightCard from "../../Sections/Cards/ImageHighlight";
import SocialMediaCard from "../../Sections/Cards/Social";

export default function Dashboard() {
    const isVerified = false
    return (
        <Box padding={5} height="300px">
            <Heading>Hi Isa'ac</Heading>
            {!isVerified && <UnverifiedMessage />}
            <section>
                <HStack p={5} gap={10} wrap="wrap">
                    <PhotoHighlightCard />
                    <SocialMediaCard />
                </HStack>
            </section>
        </Box>
    )
}