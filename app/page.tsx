import Image from "next/image";
import { Suspense } from "react";
import { PokemonsCards } from "@/componets/pokemons-cards";
import { PokemonCardSceleton } from "@/componets/pokemon-card-sceleton";

export const experimental_ppr = true;
export default function Home() {
  return (
    <div className=" flex items-center flex-col ">
      <header className="flex items-center justify-between my-10 py-4 h-10 px-[130px] w-full text-white">
        <div className="flex items-center">
          <p className="text-[#54BD95] text-3xl font-semibold">Bokemos</p>
        </div>
        <nav className="flex items-center gap-10">
          <a className="hover:underline text-[#000000]" href="/">
            Home
          </a>
          <a className="hover:underline text-[#A6A6A6]" href="/#">
            Products
          </a>
          <a className="hover:underline text-[#A6A6A6]" href="/#">
            FAQ
          </a>
          <a className="hover:underline text-[#A6A6A6]" href="/#">
            Blog
          </a>
          <a className="hover:underline text-[#A6A6A6]" href="/#">
            About Us
          </a>
        </nav>
        <div className="flex items-center gap-10">
          <button className="bg-transparent text-white px-4 py-2 rounded-md text-[#A6A6A6]">
            Login
          </button>
          <button className="bg-[#54BD95] text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center w-full ">
        <section className="flex flex-col justify-between w-full pb-[130px] gap-[130px]">
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-start max-w-[555px] ml-[130px] gap-[50px]">
              <div>
                <h1 className="text-[80px] font-bold">
                  We’re here to Increase your Productivity
                </h1>
                <Image
                  src={"/underline.svg"}
                  height={26}
                  width={479}
                  alt={"decoretion line"}
                />
              </div>
              <p className="font-medium">
                Let&apos;s make your work more organize and easily using the
                Taskio Dashboard with many of the latest featuresin managing
                work every day.
              </p>

              <button className="bg-[#54BD95] rounded-full w-[165px] h-[62px] text-white px-4 py-2">
                Try free trial
              </button>
            </div>
            <Image
              src={"/char.png"}
              height={648}
              width={720}
              alt={"playbutton"}
            />
          </div>
          <div className="flex flex-col items-center gap-[60px] justify-center w-full ">
            <h2 className="text-[40px] font-bold">
              More than 25,000 teams use Collabs
            </h2>
            <div className="flex gap-10 items-center justify-center w-full ">
              <div className="flex items-center justify-center gap-5">
                <Image
                  src={"/unsplash.svg"}
                  height={32}
                  width={32}
                  alt={"logo1"}
                />
                <span className="text-[#A6A6A6] text-3xl font-semibold">
                  Unsplash
                </span>
              </div>
              <div className="flex items-center justify-center gap-5">
                <Image
                  src={"/notion.svg"}
                  height={32}
                  width={32}
                  alt={"logo1"}
                />
                <span className="text-[#A6A6A6] text-3xl font-semibold">
                  Notion
                </span>
              </div>
              <div className="flex items-center justify-center gap-5">
                <Image
                  src={"/intercom.svg"}
                  height={32}
                  width={32}
                  alt={"logo1"}
                />
                <span className="text-[#A6A6A6] text-3xl font-semibold">
                  INTERCOM
                </span>
              </div>
              <div className="flex items-center justify-center gap-5">
                <Image
                  src={"/descript.svg"}
                  height={32}
                  width={32}
                  alt={"logo1"}
                />
                <span className="text-[#A6A6A6] text-3xl font-semibold">
                  descript
                </span>
              </div>
              <div className="flex items-center justify-center gap-5">
                <Image
                  src={"/grammarly.svg"}
                  height={32}
                  width={32}
                  alt={"logo1"}
                />
                <span className="text-[#A6A6A6] text-3xl font-semibold">
                  grammarly
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F9F8FE] flex py-[70px] gap-[30px] w-full justify-center  px-[130px]">
          <div className="flex flex-col max-w-[617px]">
            <h2 className="text-[40px] font-bold">
              How we support our pratner all over the world
            </h2>
            <p className="text-[#A6A6A6] font-medium">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
            <button className="bg-[#54BD95] rounded-full  h-[62px] text-white px-4 py-2">
              Try free trial
            </button>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-start gap-5">
              <div className="w-[60px] h-[60px] bg-[#FFFFFF] flex justify-center items-center rounded-md drop-shadow-sm">
                <Image
                  src={"/publishing.svg"}
                  height={30}
                  width={30}
                  alt={"img1"}
                />
              </div>
              <div className="flex flex-col justify-start align-top gap-[10px]">
                <h3 className="text-[28px] font-bold">Publishing</h3>
                <p className="text-[#A6A6A6] font-medium max-w-[428px] ">
                  Plan, collaborate, and publishing your contetn that drivees
                  meaningful engagement and growth for your barnd
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-5">
              <div className="w-[60px] h-[60px] bg-[#FFFFFF] flex justify-center items-center rounded-md drop-shadow-sm">
                <Image
                  src={"/analytics.svg"}
                  height={30}
                  width={30}
                  alt={"img1"}
                />
              </div>
              <div className="flex flex-col justify-start align-top gap-[10px]">
                <h3 className="text-[28px] font-bold">Analytics</h3>
                <p className="text-[#A6A6A6] font-medium  max-w-[428px]">
                  Analyze your performance and create goegeous report
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-5">
              <div className="w-[60px] h-[60px] bg-[#FFFFFF] flex justify-center items-center rounded-md drop-shadow-sm">
                <Image
                  src={"/engagement.svg"}
                  height={30}
                  width={30}
                  alt={"img1"}
                />
              </div>
              <div className="flex flex-col justify-start align-top gap-[10px]">
                <h3 className="text-[28px] font-bold">Engagement</h3>
                <p className="text-[#A6A6A6] font-medium  max-w-[428px]">
                  Quiuckly navigate you anda engage with your adience
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex py-[120px] flex-col justify-center align-middle items-center">
          <h2 className="text-[40px] text-center font-bold max-w-[492px]">
            Choose Plan That’s Right For You
          </h2>

          <Suspense
            fallback={
              <div className="flex lg:justify-evenly w-full mt-24 lg:flex-row  items-center gap-10 px-10">
                <PokemonCardSceleton />
                <PokemonCardSceleton />
                <PokemonCardSceleton />
              </div>
            }
          >
            <PokemonsCards />
          </Suspense>
        </section>
        <section className="w-full">
          <div className="bg-[#161C28] h-screen w-full py-40 px-20 box-border">
            <div>
              <div className="max-w-[520px] flex flex-col gap-5">
                <h1 className="text-white text-6xl font-bold">
                  People are Saying About Pokemons
                </h1>
                <h4 className="text-white text-lg font-semibold">
                  Everything you need to accept to pokemon and evolve it to
                  battle anywhere on the planet!
                </h4>
                <h1 className="italic text-7xl text-white font-black">
                  &quot;
                </h1>
                <p className="text-white">
                  I have been using Pokemons for a while now and I can say that
                  it has been a great experience. I have been able to catch a
                  lot of Pokemons and I have been able to evolve them to battle
                  anywhere on the planet. I would recommend Pokemons to anyone
                  who is looking for a great experience.
                </p>
                <p className="text-white">_ Aria Zinanrio</p>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
