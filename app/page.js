import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] grid grid-cols-2 min-h-[100vh]">

        <div className=" flex items-center gap-3 justify-center flex-col ml-[8vw]">

          <p className="text-yellow-300 pt-52 font-extrabold text-8xl">
            Everything you are. In one, simple link in bio.
          </p>

          <p className="text-white pb-6 text-xl">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          {/* <div className="inputs flex gap-5 pb-50 ">
            <input className="px-2 py-2 bg-white focus:outline-green-800 rounded-md " type="text" placeholder="linktr.ee/your-url" />
            <button className="bg-pink-300 rounded-full py-4 px-4 font-bold">Claim your Linktree</button>
          </div> */}

          <div className="w-full flex justify-start gap-5 pb-50">
            <input
              className="px-3 py-2 bg-white focus:outline-green-800 rounded-md w-90 h-18"
              type="text"
              placeholder="linktr.ee/your-url"
            />
            <button className="cursor-pointer bg-pink-200 rounded-full py-4 px-6 font-bold">
              <Link href={"/generate"}>Claim your Link.</Link>
            </button>
          </div>



        </div>

        <div className=" flex items-center justify-center flex-col mr-[10vw]">
          <img src="/home.png" alt="home photo" />
        </div>
      </section>

      <section className="bg-[#000000] min-h-[100vh]">
        thisthesecondbestmusic
      </section>
    </main>
  );
}
