import { Icon } from "@/components/icon";
import type { IconLinkSection as IconLinkSectionType } from "./types";

type IconLinkSectionProps = {
    section: IconLinkSectionType;
};

export const IconLinkSection = ({ section }: IconLinkSectionProps) => {
    return (
        <div>
            <h4 className="text-sm font-bold md:text-lg">{section.title}</h4>
            <ul className="mt-5 flex flex-row gap-x-5">
                {section.items.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.link}
                            target="_blank"
                            aria-label={item.label}
                            className="block rounded-sm outline-none ring-primary-3 ring-offset-2 ring-offset-black-2 hover:text-primary-3 focus-visible:ring-2"
                        >
                            <Icon icon={item.icon} aria-hidden />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
