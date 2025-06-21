export default function TwoColumn({ children }) {
  return (
    <section className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {children}
    </section>
  );
}
