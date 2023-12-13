import { Box, Text } from "@chakra-ui/react";
import PreviewCardLayout from "./CardLayout";
import Background from "../../../assets/social-media.jpg"
import ModalComponent from "../ModalComp";


export default function SocialMediaCard() {
    return (
        <PreviewCardLayout cardLabel="Find other coursemates" bgImage={Background} children={
            <Box>
                <ModalComponent modalOpenButtonText="Learn more" headerText="Campus life social media app"
                    haslink={false} footerButtonText="Join waitlist" modalBody={
                        <>
                            <Text>Keep your fingers crossed this feature is coming soon</Text>
                        </>
                    } />
            </Box>
        } />
    )
}