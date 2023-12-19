import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="">
        <a
          className="pointer-events-none inline-flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/splash.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <div className="inline-block text-2xl font-extrabold">Splash</div>
        </a>
      </div>

      <div className="h-[300px] mb-10 overflow-hidden w-full">
        <img
          src="/head.jpg"
          alt="header"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" max-w-[790px] -mt-24 shadow transform mb-24 p-10 mx-auto bg-white z-10">
        <h1 className=" text-4xl mb-[0.625rem] font-extrabold">
          📚 Unlock Hidden Literary Treasures! 🌟
        </h1>

        <div className="text-center">
          <p className="max-w-[40rem] x-cursive inline-block">
            Greetings, fellow seekers of the written word! Welcome to our
            discreet gathering place for those in the know – the clandestine
            realm where book lovers unite to unearth literary gems before the
            rest of the world even catches a whiff. Prepare to embark on a
            covert mission into the world of upcoming literary delights!
          </p>
        </div>
      </div>
    </header>
  );
}
