const SkillCard = ({ name, icon: Icon, colorClass }) => {
  return (
    <div className={`p-4 border-4 border-[var(--border-color)] bg-[var(--card-bg)] flex flex-col items-center justify-center gap-2 neo-shadow hover:neo-shadow-active transition-all ${colorClass}`}>
      <Icon className="w-12 h-12" />
      <span className="font-bold text-lg uppercase text-center">{name}</span>
    </div>
  );
};

export default SkillCard;
