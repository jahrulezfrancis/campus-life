import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Imagebg from "../../../assets/calender_image.png"
import { Box, Image } from "@chakra-ui/react"

export default function HighlightCarousel() {
    return (
        <Carousel swipeable stopOnHover infiniteLoop width="100%" autoPlay>
            <Box>
                <Image objectFit="cover" h="600px" src={Imagebg} />
                {/* <p className="legend">Memories from year one</p> */}
            </Box>
            <Box  >
                <Image objectFit="cover" h="600px" src={Imagebg} />
                {/* <p className="legend">Highlights from year two</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Imagebg} />
                {/* <p className="legend">Highlights from year three</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Imagebg} />
                {/* <p className="legend">Highlights from year four</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Imagebg} />
                {/* <p className="legend">Highlights from year five</p> */}
            </Box>
        </Carousel>
    );
}
