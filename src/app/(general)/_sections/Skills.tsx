import Image from "next/image";
import { FaCode, FaTools } from "react-icons/fa";
import { stackList, toolsList } from "@/constans/skills";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Skills() {
    return (
        <div
            className="container  mx-auto min-h-screen 2xl:py-20 2xl:px-40 flex flex-col justify-start items-center gap-3"
            id="skills"
        >
            <h2 className="text-5xl font-bold">Skills</h2>
            <div className="w-full flex flex-col items-center xl:flex-row xl:items-start xl:justify-between gap-10">
                <div
                    id="stack"
                    className="w-full py-6 md:w-4/5 lg:w-3/5 xl:w-6/12 border shadow-xl border-slate-300 dark:border-zinc-800 rounded-lg flex flex-col items-center "
                >
                    <span className="text-2xl font-semibold flex items-center">
                        <FaCode />
                        Tech Stack
                    </span>
                    <div className="mt-5 grid sm:grid-cols-4 grid-cols-3 gap-4">
                        {stackList.map(({ name, icon, alt }, index) => (
                            <SkillItem
                                key={name}
                                name={name}
                                icon={icon}
                                alt={alt}
                            />
                        ))}
                    </div>
                </div>
                <div
                    id="tools"
                    className="w-full py-6 md:w-4/5 lg:w-3/5 xl:w-6/12 border shadow-xl border-slate-300 dark:border-zinc-800 rounded-lg flex flex-col items-center "
                >
                    <span className="text-2xl font-semibold flex items-center">
                        <FaTools />
                        Tools
                    </span>
                    <div className="mt-5 grid sm:grid-cols-4 grid-cols-3 gap-4">
                        {toolsList.map(({ name, icon, alt }, index) => (
                            <SkillItem
                                key={name}
                                name={name}
                                icon={icon}
                                alt={alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const SkillItem = ({
    name,
    icon,
    alt,
}: {
    name: string;
    icon: StaticImport;
    alt: string;
}) => {
    return (
        <div className="w-24 h-24 select-none transition-transform hover:scale-105 flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-600 shadow-md">
                <Image src={icon} alt={alt} width={35} height={35} />
            </div>
            <span className="font-semibold text-md">{name}</span>
        </div>
    );
};
