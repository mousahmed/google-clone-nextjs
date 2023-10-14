import HomeHeader from "@/components/home-header";
import HomeSearch from "@/components/home-search";
import Image from "next/image";

function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />
      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image width={300} height={100} src="/google.png" alt="Google" />
        <HomeSearch />
      </div>
    </>
  );
}

export default Home;
