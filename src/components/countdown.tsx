import {
    Countdown as CountdownPrimitives,
    type CountdownOptions,
} from "@/components/composables/countdown";

export const Countdown = ({
    destinationTime,
    highlightAt,
}: CountdownOptions) => {
    return (
        <CountdownPrimitives.Root
            destinationTime={destinationTime}
            highlightAt={highlightAt}
        >
            <CountdownPrimitives.Container className="data-[highlighted]:text-danger-1 data-[highlighted]:transition-colors data-[highlighted]:duration-500">
                <CountdownPrimitives.Text>
                    Offer ends in
                </CountdownPrimitives.Text>
                <CountdownPrimitives.Counter />
            </CountdownPrimitives.Container>
        </CountdownPrimitives.Root>
    );
};
