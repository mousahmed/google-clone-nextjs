"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent, SyntheticEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
function HomeSearch() {
  const [search, setSearch] = useState<string>("");
  const [isRandomLoading, setIsRandomLoading] = useState<boolean>(false);
  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/web?searchTerm=${search}`);
  }

  async function randomSearch() {
    setIsRandomLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    if (!res.ok) return;
    const data = await res.json();
    const randomWord = data[0];
    setSearch(randomWord);
    router.push(`/search/web?searchTerm=${randomWord}`);
    setIsRandomLoading(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <BsFillMicFill className="text-xl" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:cursor-not-allowed "
          disabled={isRandomLoading}
        >
          {isRandomLoading ? (
            <Image src="/spinner.svg" alt="loading..." height={10} width={25} />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
