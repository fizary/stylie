import { Defer } from "@/components/defer";
import { Icon } from "@/components/icon";
import {
    LinkedProductList,
    ProductListSkeleton,
} from "@/components/product-list";
import { Banner, BannerSkeleton } from "./components/banner";
import { Collections, CollectionsSkeleton } from "./components/collections";
import { useBannerById } from "@/services/banner";
import { useCollections } from "@/services/collection";
import { useListBySlug } from "@/services/list";

export const HomePage = () => {
    const bannerQuery = useBannerById(1);
    const collectionsQuery = useCollections();
    const saleListQuery = useListBySlug("sale");
    const trendingListQuery = useListBySlug("trending");

    return (
        <>
            <Defer query={bannerQuery} fallback={<BannerSkeleton />}>
                {(banner) => <Banner banner={banner} />}
            </Defer>
            <main className="flex grow flex-col gap-y-10 py-10">
                <Defer query={saleListQuery} fallback={<ProductListSkeleton />}>
                    {(list) => <LinkedProductList list={list} />}
                </Defer>
                <Defer
                    query={collectionsQuery}
                    fallback={<CollectionsSkeleton />}
                >
                    {(collections) => <Collections collections={collections} />}
                </Defer>
                <Defer
                    query={trendingListQuery}
                    fallback={<ProductListSkeleton />}
                >
                    {(list) => <LinkedProductList list={list} />}
                </Defer>
            </main>
            <div className="w-full bg-gray-4">
                <div className="container grid gap-y-8 px-10 py-5 md:grid-cols-3 md:gap-x-5 lg:gap-x-10 xl:gap-x-16">
                    <div>
                        <Icon icon="airplane" className="mx-auto h-12" />
                        <div className="mt-3 text-center text-lg font-bold">
                            Worldwide Shipping
                        </div>
                        <div className="text-center text-sm font-semibold">
                            We deliver to customers worldwide, no matter where
                            you are!
                        </div>
                    </div>
                    <div>
                        <Icon icon="time" className="mx-auto h-12" />
                        <div className="mt-3 text-center text-lg font-bold">
                            Fast Delivery
                        </div>
                        <div className="text-center text-sm font-semibold">
                            Get your order quickly with our speedy shipping
                            options.
                        </div>
                    </div>
                    <div>
                        <Icon icon="wallet" className="mx-auto h-12" />
                        <div className="mt-3 text-center text-lg font-bold">
                            Free Refunds
                        </div>
                        <div className="text-center text-sm font-semibold">
                            Shop risk-free with our hassle-free, no-cost refund
                            policy.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
