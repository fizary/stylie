import { Link } from "react-router-dom";
import type { TextLinkSection as TextLinkSectionType } from "./types";

type TextLinkSectionProps = {
    section: TextLinkSectionType;
};

export const TextLinkSection = ({ section }: TextLinkSectionProps) => {
    return (
        <div>
            <h4 className="text-sm font-bold md:text-lg">{section.title}</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
                {section.items.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.link}
                            className="rounded-sm outline-none ring-primary-3 ring-offset-2 ring-offset-black-2 hover:text-primary-3 focus-visible:ring-2"
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
