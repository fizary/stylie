import { type PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Icon, type IconType } from "@/components/icon";

type TextLinkListProps = {
    list: {
        text: string;
        link: string;
    }[];
};

type IconLinkListProps = {
    list: {
        icon: IconType;
        label: string;
        link: string;
    }[];
};

export const LinkSection = ({
    title,
    children,
}: PropsWithChildren<{ title: string }>) => {
    return (
        <div>
            <h4 className="text-sm font-bold md:text-lg">{title}</h4>
            {children}
        </div>
    );
};

export const TextLinkList = ({ list }: TextLinkListProps) => {
    return (
        <ul className="mt-5 space-y-2.5 text-sm">
            {list.map((item, index) => (
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
    );
};

export const IconLinkList = ({ list }: IconLinkListProps) => {
    return (
        <ul className="mt-5 flex flex-row gap-x-5">
            {list.map((item, index) => (
                <li key={index}>
                    <a
                        href={item.link}
                        target="_blank"
                        aria-label={item.label}
                        className="block rounded-sm outline-none ring-primary-3 ring-offset-2 ring-offset-black-2 hover:text-primary-3 focus-visible:ring-2"
                    >
                        <Icon icon={item.icon} />
                    </a>
                </li>
            ))}
        </ul>
    );
};
