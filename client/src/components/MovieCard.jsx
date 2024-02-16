import { Box, Button, Image, Text, Flex } from "@chakra-ui/react";

import { Link } from 'react-router-dom';

export default function MovieCard({ movies, handleDelete }) {
    
    return (
        <>
            {
                movies.map((movie) => (
                    <Box
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="md"
                        w={'30%'}
                        key={movie._id}
                        _hover={{ boxShadow: "2xl" }}

                    >
                        <Image w={"100%"} h={"400px"} src={movie.image} alt="Card Image" />

                        <Box p="6">
                            <Text fontWeight="bold" mb="2" fontSize="xl"  >
                                Title: {movie.title}
                            </Text>
                            <Text color="gray.600" fontWeight="medium">Year: {movie.year}</Text>
                            <Text color="gray.600" fontWeight="medium">Director: {movie.createdBy}</Text>
                        </Box>
                        <Box>


                            <Flex justifyContent={"space-between"} p="4">
                                <Button onClick={() => handleDelete(movie._id)} colorScheme="red" variant="outline">
                                    DELETE
                                </Button>
                                <Button as={Link} to={`/movie/update/${movie._id}`} colorScheme="red" variant="outline">
                                    EDIT
                                </Button>
                            </Flex>
                        </Box>
                    </Box>
                ))
            }

        </>

    );
}