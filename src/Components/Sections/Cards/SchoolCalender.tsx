import { Box, Heading } from "@chakra-ui/react";
import PreviewCardLayout from "./CardLayout";
import ModalComponent from "../ModalComp";
import CalendarBg from "../../../assets/calender_image.png";

export default function SchoolCalendar() {

    return (
        <Box>
            <PreviewCardLayout bgImage={CalendarBg} cardLabel="View Session calender" children={
                <Box>
                    <ModalComponent modalOpenButtonText="View Calendar" headerText="2023 Session Calender" haslink={false} footerButtonText="Download" modalBody={
                        <>
                            <Heading>School calendar for current semester goes here</Heading>
                        </>
                    }
                    />
                </Box>
            } />
        </Box>
    )
}