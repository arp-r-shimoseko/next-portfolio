import Image from "next/image";
import LeftNavigation from "@/components/top/left_navigation";

export default function Home() {
  return (
    <div>
      <LeftNavigation />

      {/* 画像をh1の端にかすめるように配置 */}
      <main className="grid grid-cols-3 grid-rows-2 w-[100vw] h-[100vh]">
        <header className="z-2 mt-18 md:mt-38 row-span-2">
          <h1 className="text-6xl md:text-9xl ml-12 p-4 text-shadow">
            <p>Welcome</p>
            <p>To&nbsp;My</p>
            <p>Portfolio</p>
          </h1>
        </header>

        <Image
          src={"/D73970C8-E9D2-4D81-A016-4EB17238EFA4_1_201_a.jpeg"}
          alt="mainImage"
          width={800}
          height={800}
          className={"w-full h-screen col-start-2 col-span-3 max-h-[100vh] opacity-90"}
        />
      </main>
    </div>
  );
}
