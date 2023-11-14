import Wrapper from "@/components/Wrapper";
import { prisma } from "@/utils/prisma";
import Books from "../components/Books";

export default async function Homepage(props) {
    const books = await prisma.book.findMany({
    orderBy: {
      title: "asc",
    },
  });

  return (
    <Wrapper>
      [{props?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}]
    </Wrapper>
  );
}

