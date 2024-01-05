import { Box, HStack, } from "@chakra-ui/react";
import UnverifiedMessage from "../../Sections/Unverified";
import CardRenderers from "../../Sections/Cards/CardRenderers";
import HighlightCarousel from "../../Sections/Slider/Carousel";
import FileHighlightCard from "../../Sections/Cards/FileHighlightCard";




export default function Dashboard() {
    const isVerified = true
    return (
        <Box bg="#FDFDFD" padding={0} height="300px">
            <section>
                <Box padding={0}>
                    <HighlightCarousel />
                </Box>
            </section>
            {!isVerified && <UnverifiedMessage />}
            <FileHighlightCard />
            <section>
                <HStack align="center" justify="center" p={5} gap={10} wrap="wrap">
                    <CardRenderers />
                </HStack>
            </section>
        </Box>
    )
}