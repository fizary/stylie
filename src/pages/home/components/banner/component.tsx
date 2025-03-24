import { type BannerType } from "@/services/banner";

type BannerProps = {
    banner: BannerType;
};

export const Banner = ({ banner }: BannerProps) => {
    return (
        <div className="container relative flex h-[480px] px-0">
            <img
                src={banner.image_url}
                className="absolute h-full w-full object-cover"
            />
            <div className="absolute h-full w-full bg-black-1 bg-opacity-50"></div>
            <div className="container-padding z-10 select-none self-center font-sriracha [text-shadow:2px_1px_black]">
                <div className="text-xl text-primary-3 sm:text-3xl">
                    {banner.title}
                </div>
                <h1 className="whitespace-pre-line text-4xl text-white sm:text-6xl">
                    {banner.text}
                </h1>
            </div>
        </div>
    );
};
