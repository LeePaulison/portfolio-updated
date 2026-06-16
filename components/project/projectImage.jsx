import Image from "next/image";

export default function ProjectImage({ src, alt }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-8"
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        sizes="(max-width: 768px) 100vw, 400px"
        className="h-auto w-full rounded-lg border border-border shadow-md transition hover:opacity-90"
      />
    </a>
  );
}
