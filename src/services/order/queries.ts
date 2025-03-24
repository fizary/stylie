import { queryOptions, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/services";
import { fetchOrderFees } from "./services";

const orderFeesQuery = queryOptions({
    queryKey: ["order-fees"],
    queryFn: fetchOrderFees,
});

export const useOrderFees = () => useQuery(orderFeesQuery);
export const prefetchOrderFees = () =>
    queryClient.prefetchQuery(orderFeesQuery);
