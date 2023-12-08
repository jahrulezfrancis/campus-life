import { Box, Flex, Stack, VStack } from "@chakra-ui/react";

export default function SharedLayout() {
    return (
        <Box>
            <Stack>
                <Flex>
                    Your nav Items
                </Flex>
                <VStack>
                    Your side bar
                </VStack>
            </Stack>
        </Box >
    )
}