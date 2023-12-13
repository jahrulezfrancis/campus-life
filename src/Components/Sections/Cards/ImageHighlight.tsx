import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Student1 from "../../../assets/student1.jpg"
import Student2 from "../../../assets/student1.jpg"
import Student3 from "../../../assets/thirrdStudent.jpg"
import { Link } from "react-router-dom";
import PreviewCardLayout from "./CardLayout";

export default function PhotoHighlightCard() {
    // const [imageArray, setImageArray] = useState([])
    const [bgImage, setBgImage] = useState("")
    const defImages = [Student1, Student2, Student3]

    useEffect(() => {
        setBgImage(defImages[1])
    }, [])

    // useEffect(() => {
    //     const apiKey = "30256236-c46924012bafa491fbefb7733"
    //     axios.get("https://pixabay.com/api/?key=" + apiKey).then((response) => {
    //         console.log(response.data)
    //         const apiImages = response.data.map((item) => item.url)
    //         console.log(apiImages)
    //         setImageArray(apiImages)
    //         setBgImage(apiImages[2])
    //     }).catch(function (e) {
    //         console.log("An error occured", e)
    //     })
    // }, [])
    return (
        <PreviewCardLayout bgImage={bgImage} cardLabel="Your campus highlights" children={
            <>
                <Link to="/my-uploads">
                    <Button>Explore</Button>
                </Link>
            </>
        }>

        </PreviewCardLayout>
    )
}