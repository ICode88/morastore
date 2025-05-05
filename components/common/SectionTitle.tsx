interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-bold gold-text mb-2">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;