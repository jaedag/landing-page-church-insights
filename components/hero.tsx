import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import { BackgroundBeams } from "./ui/background-beams";
import { Input } from "./ui/input";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Header() {
  const words = `Bringing members to the forefront of the shepherding experience`;

  return (
    <div className="flex flex-col gap-16 items-center">
      <BackgroundBeams />
      <div className="container text-center">
        <TextGenerateEffect duration={2} words={words} />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to <span className="text-purple-400">Church Insights</span>,
          the best pastoral care service on the web. We provide an easy way for
          member centered shepherding.
        </p>
        <Input
          type="email"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-purple-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
    </div>
  );
}
