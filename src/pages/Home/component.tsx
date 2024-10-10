import { useLoaderData } from "react-router-dom";
import { Defer } from "@/components/Defer";
import { Icon } from "@/components/Icon";
import {
    LinkedProductList,
    ProductListSkeleton,
} from "@/components/ProductList";
import { Banner, BannerSkeleton } from "./components/Banner";
import { Collections, CollectionsSkeleton } from "./components/Collections";
import { type HomePageLoaderData } from "./loaders";

export const HomePage = () => {
    const { banner, collections, saleList, trendingList } =
        useLoaderData() as HomePageLoaderData;

    return (
        <>
            <Defer data={banner} fallback={<BannerSkeleton />}>
                {(resolvedBanner) => <Banner banner={resolvedBanner} />}
            </Defer>
            <main className="flex grow flex-col gap-y-10 py-10">
                <Defer data={saleList} fallback={<ProductListSkeleton />}>
                    {(resolvedList) => (
                        <LinkedProductList list={resolvedList} />
                    )}
                </Defer>
                <Defer data={collections} fallback={<CollectionsSkeleton />}>
                    {(resolvedCollections) => (
                        <Collections collections={resolvedCollections} />
                    )}
                </Defer>
                <Defer data={trendingList} fallback={<ProductListSkeleton />}>
                    {(resolvedList) => (
                        <LinkedProductList list={resolvedList} />
                    )}
                </Defer>
            </main>
            <div className="w-full bg-gray-4">
                <div className="container grid gap-y-8 py-10 md:grid-cols-3 md:gap-x-5 lg:gap-x-10 xl:gap-x-16">
                    <div>
                        <Icon icon="airplane" className="mx-auto h-12" />
                        <div className="mt-3 text-center text-lg font-bold">
                            Worldwide Shipping
                        </div>
                        <div className="text-center text-sm font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod.
                        </div>
                    </div>
                    <div>
                        <Icon icon="time" className="mx-auto h-12" />
                        <div className="mt-3 text-center text-lg font-bold">
                            Fast Delivery
                        </div>
                        <div className="text-center text-sm font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod.
                        </div>
                    </div>
                    <div>
                        <Icon icon="wallet" className="mx-auto h-12" />
                        <div className="mt-3 text-center text-lg font-bold">
                            Free Refunds
                        </div>
                        <div className="text-center text-sm font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
