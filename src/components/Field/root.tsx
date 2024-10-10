import { type PropsWithChildren } from "react";

type RootProps = PropsWithChildren;

export const Root = ({ children }: RootProps) => {
    return (
        <div className="group/field relative flex flex-col gap-y-1.5 pt-2.5">
            {children}
        </div>
    );
};
