import { IconLinkSection } from "./icon-link-section";
import { TextLinkSection } from "./text-link-section";
import type { LinkSection } from "./types";

const sections: LinkSection[] = [
    {
        type: "text",
        title: "TERMS & POLICIES",
        items: [
            { text: "Terms Of Service", link: "#" },
            { text: "Privacy Policy", link: "#" },
            { text: "Cookies", link: "#" },
        ],
    },
    {
        type: "text",
        title: "INFORMATION",
        items: [
            { text: "Delivery", link: "#" },
            { text: "Refunds", link: "#" },
            { text: "Contact", link: "#" },
        ],
    },
    {
        type: "icon",
        title: "FOLLOW US ON",
        items: [
            {
                icon: "logo-facebook",
                label: "facebook",
                link: "https://www.facebook.com/",
            },
            {
                icon: "logo-instagram",
                label: "instagram",
                link: "https://www.instagram.com/",
            },
            {
                icon: "logo-pinterest",
                label: "pinterest",
                link: "https://pinterest.com/",
            },
            {
                icon: "logo-twitter",
                label: "x",
                link: "https://x.com/",
            },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="bg-black-2">
            <div className="container pb-4 pt-10 text-white">
                <nav className="flex flex-row flex-wrap gap-10 lg:gap-20">
                    {sections.map((section, index) =>
                        section.type === "icon" ? (
                            <IconLinkSection key={index} section={section} />
                        ) : section.type === "text" ? (
                            <TextLinkSection key={index} section={section} />
                        ) : null,
                    )}
                </nav>
                <div className="mt-16 text-xs">
                    © {new Date().getFullYear()}, All Rights Reserved
                </div>
            </div>
        </footer>
    );
};
