import { Flex, Input, Stack, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function FileUploader() {
    const [uploadedImages, setUploadedImages] = useState<string[]>([])

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files) {
            // Convert FileList to an array
            const newImages = Array.from(files).map((file) => URL.createObjectURL(file));

            // Update the state with the new images
            setUploadedImages((prevImages) => [...prevImages, ...newImages]);
        }
    };

    return (
        <Stack>
            return (
            <Stack gap={10}>
                <Input p='2px' width={250} type="file" accept="image/*" onChange={handleImageUpload} multiple />
                <Flex wrap="wrap" gap={3}>
                    {uploadedImages.map((image, index) => (
                        <Image objectFit="cover" key={index} src={image} alt={`uploaded-${index}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    ))}
                </Flex>
            </Stack>
            );

        </Stack>

    )
}