import { Grid, GridItem, } from "@chakra-ui/react";
import CardRenderers from "../../Sections/Cards/CardRenderers";
import DesktopSidebar from "../../Navigation/DesktopSidebar";




export default function Dashboard() {
    return (
        <Grid templateColumns="262px 1fr">
            <GridItem width="262px">
                <DesktopSidebar />
            </GridItem>
            <GridItem bg="grey">
                <CardRenderers />
            </GridItem>
        </Grid>
    )
}