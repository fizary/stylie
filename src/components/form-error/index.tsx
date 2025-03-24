import { Icon } from "@/components/icon";

type FormErrorProps = {
    error?: string;
};

export const FormError = ({ error }: FormErrorProps) => {
    return error !== undefined ? (
        <div className="flex items-center justify-center gap-1.5 rounded-sm bg-danger-1 p-3 text-sm font-semibold text-white">
            <Icon icon="alert-circle" className="h-5" />
            {error}
        </div>
    ) : null;
};
