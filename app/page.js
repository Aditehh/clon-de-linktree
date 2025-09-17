import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] grid grid-cols-2 min-h-[100vh]">
        
        <div className=" flex items-center gap-3 justify-center flex-col ml-[8vw]">

          <p className="text-yellow-300 pt-52 font-extrabold text-8xl">
            Everything you are. In one, simple link in bio.
          </p>

          <p className="text-white pb-52 text-xl">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
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
