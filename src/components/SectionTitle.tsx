type Props = {
  title: string;
  subtitle?: string;
};

function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl uppercase text-white md:text-4xl">{title}</h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded bg-silver"></div>
      {subtitle ? <p className="mt-4 text-silver">{subtitle}</p> : null}
    </div>
  );
}

export default SectionTitle;