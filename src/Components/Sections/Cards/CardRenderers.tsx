import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { yearlyData } from "./YearlyData";
import PreviewCardLayout from "./CardLayout";
import { Link } from "react-router-dom";

export default function CardRenderers() {
    return (
        <Box>
            <Flex justify="center" gap={10} wrap="wrap">
                {yearlyData.map((item) => {
                    return (
                        <PreviewCardLayout key={item.id} bgImage={item.cardImage} cardLabel={item.title} children={
                            <>
                                <Text color="whitesmoke">{item.description}</Text>
                                <Link to={"/" + item.link}>
                                    <Button>Explore {item.title} highlights</Button>
                                </Link>
                            </>
                        } />
                    )
                })}
            </Flex>
        </Box>
    )
} 