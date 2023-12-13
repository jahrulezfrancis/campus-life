import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Text } from "@chakra-ui/react";
import PreviewCardLayout from "./CardLayout";
import Background from "../../../assets/social-media.jpg"
import { Link } from "react-router-dom";

export default function SocialMediaCard() {
    const { isOpen, onClose, onOpen } = useDisclosure()
    function component() {
        return (
            <Box>
                <Button onClick={onOpen}>Learn More</Button>
                <Modal isCentered isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay backdropFilter="blur(4px) hue-rotate(10deg)" />
                    {/* <ModalOverlay  bg='none' backdropFilter='auto' backdropInvert='40%' backdropBlur='2.5px' /> */}
                    <ModalContent>
                        <ModalHeader>Campus Life social media app</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>This feature is coming soon</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                <Link target="_blank" to="https://twitter.com/">
                                    Join waitlist
                                </Link>
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        )
    }
    return (
        <PreviewCardLayout cardLabel="Find other coursemates" bgImage={Background} children={
            <>
                {component()}
            </>
        } />
    )
}