import { Icon } from "@/components/icon";
import { SmallButton } from "@/components/small-button";
import { useCarousel } from "./hooks/use-carousel";

type GalleryProps = {
    images: string[];
};

export const Gallery = ({ images }: GalleryProps) => {
    const {
        ref,
        scrollSnaps,
        selectedIndex,
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = useCarousel();

    return (
        <div className="flex h-full flex-col">
            <div className="h-full overflow-hidden" ref={ref}>
                <div className="flex h-full">
                    {images.map((image, index) => (
                        <img
                            src={image}
                            className="shrink-0 basis-full object-contain"
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-2 flex items-center justify-center gap-x-5">
                <SmallButton
                    size="xs"
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                >
                    <Icon icon="chevron-back" className="h-4" />
                </SmallButton>
                <div className="text-xs">
                    {selectedIndex + 1} out of {scrollSnaps.length}
                </div>
                <SmallButton
                    size="xs"
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                >
                    <Icon icon="chevron-forward" className="h-4" />
                </SmallButton>
            </div>
        </div>
    );
};
