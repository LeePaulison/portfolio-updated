// Font Awesome
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container grid grid-cols-12 gap-4 pb-4 pt-2 sm:pt-4 sm:pb-6">
      {/* Logo */}
      <div className="col-span-3 flex flex-row items-center justify-start gap-6">
        <Image
          id="footer-logo"
          src="/assets/images/LP_Logo.webp"
          alt="Lee Paulison's Logo"
          width={32}
          height={32}
          priority
        />
        {/* Social Icons */}
        <a
          href="https://github.com/LeePaulison"
          className="hover:text-accent transition"
          aria-label="GitHub Profile"
        >
          <FaGithubSquare
            className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
            aria-label="GitHub Icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/lee-paulison-jr/"
          className="hover:text-accent transition"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin
            className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
            aria-label="LinkedIn Icon"
          />
        </a>
      </div>

      {/* Social + Stack */}
      <div className="col-span-6 flex flex-row items-center justify-between gap-8">
        {/* Tech Stack */}
        <div className="flex items-center">
          <p className="text-xs text-muted-foreground text-center italic hidden sm:block mb-1">
            Built with:
          </p>
          <div className="hidden sm:flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground text-center max-w-xl mx-auto pe-2">
            <span>Next.js</span>
            <span>Tailwind CSS</span>
            <span>ShadCN</span>
            <span>Radix UI</span>
            <span>React Icons</span>
            <span>App Router</span>
            <span>SSR</span>
            <span>Deployed via Vercel</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="col-span-3 flex flex-col items-end justify-center text-sm text-muted-foreground">
        <p>© {currentYear} Lee Paulison Jr</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
