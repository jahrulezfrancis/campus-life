import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { yearlyData } from "./YearlyData";
import PreviewCardLayout from "./CardLayout";
import SocialMediaCard from "./SocialCardComp";

export default function CardRenderers() {
    return (
        <Box>
            <Flex justify="center" gap={10} wrap="wrap">
                {yearlyData.map((item) => {
                    return (
                        <PreviewCardLayout bgImage={item.cardImage} cardLabel={item.title} children={
                            <>
                                <Text color="whitesmoke">{item.description}</Text>
                                <Button>Explore {item.title} highlights</Button>
                            </>
                        } />
                    )
                })}
                <SocialMediaCard />
            </Flex>
        </Box>
    )
} 