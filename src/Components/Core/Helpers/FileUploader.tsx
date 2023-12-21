import { Flex, Stack, Image, Button, Icon, Box, useToast, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Spacer, Heading, } from "@chakra-ui/react";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RiImageAddLine } from "react-icons/ri";




export default function FileUploader() {
    const { onClose, onOpen, isOpen } = useDisclosure()

    const [isloading, setIsloading] = useState(false)
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const toast = useToast()

    function handleImageUpload() {
        const examplePromise = new Promise((resolve) => {
            setTimeout(() => {
                setIsloading(true)
                resolve(200)
            }, 5000)
            setTimeout(() => {
                onClose()
                // setUploadedImages([])
                setIsloading(false)
            }, 7000)
        })
        toast.promise(examplePromise, {
            success: { position: "top", duration: 5000, title: 'Upload completed', description: "You image upload is complete, cheers to better memories" },
            error: { title: 'Upload failed', description: 'Image upload failed, please try again' },
            loading: { title: "Upload in progress...", description: "Image upload in progress please don't close your browser" },
        })

    }
    // setTimeout(() => {
    //     toast({
    //         title: "Starting Upload",
    //         description: "Your image upload has started",
    //         status: 'success',
    //         duration: 9000,
    //         isClosable: true,
    //         show
    //     })
    // }, 5000);


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files) {
            // Convert FileList to an array
            const newImages = Array.from(files).map((file) => URL.createObjectURL(file));

            // Update the state with the new images
            setUploadedImages((prevImages) => [...prevImages, ...newImages]);
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedImages = [...uploadedImages];
        updatedImages.splice(index, 1);
        setUploadedImages(updatedImages);
    };

    function Component() {
        return (
            <Box>
                <Stack justify="center" align="center">
                    {uploadedImages.length > 0 &&
                        <Box>
                            <Heading textAlign="center" mb={10} as="h3">Recent Uploads</Heading>
                            <Flex justify="center" wrap="wrap" gap={3}>
                                {uploadedImages.map((image, index) => (
                                    <Flex position="relative" key={index} direction="column" justify="center" align="center">
                                        <Image
                                            objectFit="cover"
                                            src={image}
                                            alt={`uploaded-${index}`}
                                            style={{ maxWidth: '150px', maxHeight: '200px' }}
                                        />
                                        <Icon _hover={{ cursor: "pointer" }} fontSize={30} onClick={() => handleRemoveImage(index)} position="absolute" color="red" as={MdDeleteForever} />
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>

                    }
                    <Button width={200} textAlign="center" onClick={onOpen}>Add photos</Button>
                </Stack >
                <Modal closeOnOverlayClick={false} isCentered isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay backdropFilter="blur(4px) hue-rotate(10deg)" />
                    <ModalContent>
                        <ModalHeader>Upload your semester pictures</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box>
                                <Flex direction="column" align="center">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleImageChange}
                                        multiple
                                        id="fileInput"
                                    />
                                    <Spacer m={10} />
                                    <label htmlFor="fileInput">
                                        <Stack _hover={{ cursor: "pointer" }} borderRadius={8} padding={10} border="1px solid #E2E8F0" align="center" justify="center">
                                            <Icon fontSize={100} as={RiImageAddLine} />
                                            <Button as="span">
                                                Add images
                                            </Button>
                                        </Stack>
                                    </label>
                                </Flex>
                                <Stack mt={10} align="center" justify="center">
                                    <Flex justify="center" wrap="wrap" gap={3}>
                                        {uploadedImages.map((image, index) => (
                                            <Flex position="relative" key={index} direction="column" justify="center" align="center">
                                                <Image
                                                    objectFit="cover"
                                                    src={image}
                                                    alt={`uploaded-${index}`}
                                                    style={{ maxWidth: '150px', maxHeight: '200px' }}
                                                />
                                                <Icon _hover={{ cursor: "pointer" }} fontSize={30} onClick={() => handleRemoveImage(index)} position="absolute" color="red" as={MdDeleteForever} />
                                            </Flex>
                                        ))}
                                    </Flex>
                                    <Box>
                                        {uploadedImages.length > 0 && <Button isDisabled={isloading} onClick={() => handleImageUpload()}>Upload now</Button>}
                                    </Box>
                                </Stack>
                            </Box>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        )
    }


    return (
        <Stack spacing={4}>
            {Component()}
        </Stack>
    );
}
