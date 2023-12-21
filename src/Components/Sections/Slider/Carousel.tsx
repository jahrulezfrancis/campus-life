import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Image } from "@chakra-ui/react"
import Image1 from "../../../assets/celebrating-lady.jpg"
import Image2 from "../../../assets/graduating-lady.jpg"
import Image3 from "../../../assets/graduating-students-stairs.jpg"
import Image4 from "../../../assets/man-standing.jpg"
import Image5 from "../../../assets/student-in-lab.jpg"
import Image6 from "../../../assets/student.jpg"
import Image7 from "../../../assets/student1.jpg"
import Image8 from "../../../assets/thirrdStudent.jpg"
import Image9 from "../../../assets/student2.jpeg"


export default function HighlightCarousel() {
    return (
        <Carousel stopOnHover infiniteLoop width="100%" autoPlay>
            <Box>
                <Image objectFit="cover" h="600px" src={Image1} />
                {/* <p className="legend">Memories from year one</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Image2} />
                {/* <p className="legend">Memories from year one</p> */}
            </Box>
            <Box  >
                <Image objectFit="cover" h="600px" src={Image3} />
                {/* <p className="legend">Highlights from year two</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Image4} />
                {/* <p className="legend">Highlights from year three</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Image5} />
                {/* <p className="legend">Highlights from year four</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Image6} />
                {/* <p className="legend">Highlights from year five</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Image7} />
                {/* <p className="legend">Highlights from year five</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Image8} />
                {/* <p className="legend">Highlights from year five</p> */}
            </Box>
            <Box>
                <Image objectFit="cover" h="600px" src={Image9} />
                {/* <p className="legend">Highlights from year five</p> */}
            </Box>
        </Carousel>
    );
}
