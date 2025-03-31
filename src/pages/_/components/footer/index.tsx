import { LinkSection, IconLinkList, TextLinkList } from "./link-section";

export const Footer = () => {
    return (
        <footer className="bg-black-2">
            <div className="container pb-4 pt-10 text-white">
                <nav className="flex flex-row flex-wrap gap-10 lg:gap-20">
                    <LinkSection title="TERMS & POLICIES">
                        <TextLinkList
                            list={[
                                {
                                    text: "Terms Of Service",
                                    link: "terms-of-service",
                                },
                                {
                                    text: "Privacy Policy",
                                    link: "privacy-policy",
                                },
                                { text: "Cookies", link: "cookies" },
                            ]}
                        />
                    </LinkSection>
                    <LinkSection title="INFORMATION">
                        <TextLinkList
                            list={[
                                { text: "Delivery", link: "delivery" },
                                { text: "Refunds", link: "refunds" },
                                { text: "Contact", link: "contact" },
                            ]}
                        />
                    </LinkSection>
                    <LinkSection title="FOLLOW US ON">
                        <IconLinkList
                            list={[
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
                            ]}
                        />
                    </LinkSection>
                </nav>
                <div className="mt-16 text-xs">
                    © {new Date().getFullYear()}, All Rights Reserved
                </div>
            </div>
        </footer>
    );
};
