interface ISectionTitle {
  text: string;
}

export const SectionTitle: React.FC<ISectionTitle> = ({ text }) => {
  return (
    <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-extrabold">
      {text}
    </h1>
  );
};
