interface ISectionSubTitle {
  text: string;
}

export const SectionSubTitle: React.FC<ISectionSubTitle> = ({ text }) => {
  return (
    <p className="text-xs md:text-sm font-bold text-yellow-600 mb-2 uppercase tracking-wider">
      {text}
    </p>
  );
};
