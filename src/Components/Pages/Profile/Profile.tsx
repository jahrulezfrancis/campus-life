import { Box, Flex, Badge, Heading, Text, Center, Image } from "@chakra-ui/react";
import ProfilePic from "../../../assets/student.jpg"
export default function ProfilePage() {

    const studentInfo = {
        name: 'John Doe',
        studentId: '123456',
        currentSemester: 'First Semester',
        profileImage: ProfilePic,
        level: 200,
        course: 'Computer Science',
        hobbies: ['Rapping', 'Reading', 'Coding'],
        numberOfPics: 2
    };

    return (
        <Box margin={10}>
            <Center>
                <Flex wrap="wrap" w="95vw" gap={10} p={6} borderWidth="1px" borderRadius="lg">
                    <Image objectPosition="top" objectFit="cover" height="400px" width="300px" src={studentInfo.profileImage} alt={`${studentInfo.name} profile pictures`} />
                    <Box >
                        <Heading as="h2" size="xl" mb={4}>
                            {studentInfo.name}
                        </Heading>
                        <Text fontSize="lg" mb={2}>
                            Student ID: {studentInfo.studentId}
                        </Text>
                        <Text fontSize="lg" mb={2}>
                            Course: {studentInfo.course}
                        </Text>
                        <Text fontSize="lg" mb={2}>
                            Current Level: {studentInfo.level !== 500 && studentInfo.level} {studentInfo.level === 500 ? "Final Year" : "level"}
                        </Text>
                        <Text fontSize="lg" mb={2}>
                            Current Semester: {studentInfo.currentSemester}
                        </Text>
                        <Text fontSize="large" mb={4}>Total pictures uploded: {studentInfo.numberOfPics}</Text>
                        <Heading as="h3" size="md" mb={2}>
                            Hobbies
                        </Heading>
                        <Flex flexWrap="wrap">
                            {studentInfo.hobbies.map((hobby, index) => (
                                <Badge key={index} colorScheme="teal" m={1}>
                                    {hobby}
                                </Badge>
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </Center>

        </Box>
    )
}