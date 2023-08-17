import Image from 'next/image';

type SkillIconProps = {
  name: string;
  src: string;
};

const SkillIcon = ({ name, src }: SkillIconProps) => {
  return (
    <div key={name} className="group relative m-1 flex justify-center cursor-pointer z-20">
      <Image
        src={src}
        alt={name}
        width={50}
        height={50}
        className="aspect-square sm:w-[50px] w-[40px]"
      />
      <span className="absolute top-10 scale-0 transition-all rounded-xl p-2 text-xs text-text bg-foreground group-hover:scale-100">
        {name}
      </span>
    </div>
  );
};

export default SkillIcon;
