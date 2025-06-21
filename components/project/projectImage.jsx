export default function ProjectImage({ src, alt }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-md border border-border"
      />
    </div>
  );
}
