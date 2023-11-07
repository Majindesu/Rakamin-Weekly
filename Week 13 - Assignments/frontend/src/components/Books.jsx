import { Card, HStack, Heading, Image, Text, VStack, StackDivider } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
    <Card key={id} my={4} p={4} w={800} cursor='pointer'>
      <HStack>
      <Image boxSize={300} objectFit="cover" mr={10} src={`http://localhost:8000/${image}`} />
      <VStack divider={<StackDivider borderColor='gray.200' />}
      align='stretch'>
        <Heading size={"lg"}>
          {title} ({year})
        </Heading>
        <Text>{author}</Text>
        <Text textAlign="left">
          <span>Publisher: </span>
          {publisher}
        </Text>
      </VStack>
      </HStack>
    </Card>
    </Link>
  );
}