import Image from "next/image";
import Banner from "@/app/(home)/Banner";
import BookList from "./components/BookList";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/books`);
  if (!response.ok) {
    throw new Error("An error occured while fetching the books.");
  }

  const books = await response.json();
  console.log('books',books);

  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
