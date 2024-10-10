import { Link } from "react-router-dom";
import { Icon } from "@/components/Icon";

export const Footer = () => {
    return (
        <footer className="bg-black-2">
            <div className="container pb-4 pt-10 text-white">
                <nav className="flex flex-row flex-wrap gap-10 lg:gap-20">
                    <div>
                        <h4 className="text-sm font-bold md:text-lg">
                            TERMS & POLICIES
                        </h4>
                        <ul className="mt-5 space-y-2.5 text-sm hover:[&_a]:text-primary-3">
                            <li>
                                <Link to="#">Terms Of Service</Link>
                            </li>
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Cookies</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold md:text-lg">
                            INFORMATION
                        </h4>
                        <ul className="mt-5 space-y-2.5 text-sm hover:[&_a]:text-primary-3">
                            <li>
                                <Link to="#">Delivery</Link>
                            </li>
                            <li>
                                <Link to="#">Refunds</Link>
                            </li>
                            <li>
                                <Link to="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold md:text-lg">
                            FOLLOW US ON
                        </h4>
                        <ul className="mt-5 flex flex-row gap-x-5 hover:[&_a]:text-primary-3">
                            <li>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                >
                                    <Icon icon="logo-facebook" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                >
                                    <Icon icon="logo-instagram" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://pinterest.com/"
                                    target="_blank"
                                >
                                    <Icon icon="logo-pinterest" />
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/" target="_blank">
                                    <Icon icon="logo-twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="mt-16 text-xs">
                    © {new Date().getFullYear()}, All Rights Reserved
                </div>
            </div>
        </footer>
    );
};
