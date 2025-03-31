import { type IconType } from "@/components/icon";

type TextLinkItem = {
    text: string;
    link: string;
};

type IconLinkItem = {
    icon: IconType;
    label: string;
    link: string;
};

export type TextLinkSection = {
    type: "text";
    title: string;
    items: TextLinkItem[];
};

export type IconLinkSection = {
    type: "icon";
    title: string;
    items: IconLinkItem[];
};

export type LinkSection = TextLinkSection | IconLinkSection;
