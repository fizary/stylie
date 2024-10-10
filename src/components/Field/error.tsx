import { Icon } from "@/components/Icon";

type ErrorProps = {
    errors?: string[];
};

export const Error = ({ errors }: ErrorProps) => {
    const hasErrors = errors !== undefined && errors.length > 0;

    return (
        hasErrors && (
            <ul className="text-sm font-semibold text-danger-1">
                {errors.map((error, index) => (
                    <li key={index} className="flex items-center gap-x-1.5">
                        <Icon icon="alert-circle" className="h-4" /> {error}
                    </li>
                ))}
            </ul>
        )
    );
};
