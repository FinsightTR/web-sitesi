type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#8a6418]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-zinc-600">{description}</p> : null}
    </div>
  );
}
