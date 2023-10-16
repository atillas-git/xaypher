import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
}
// eslint-disable-next-line react/display-name
export const Button = React.forwardRef(
  (
    { children, className, loading, loadingText, ...other }: IProps,
    ref: React.LegacyRef<HTMLButtonElement>,
  ) => {
    const styles = twMerge(
      "bg-zinc-600 text-zinc-50 p-2 rounded-md px-4 transition",
      className,
    );
    return (
      <button ref={ref} className={styles} {...other} disabled={loading}>
        {loading ? (
          <div className="flex items-center gap-1 justify-center px-2">
            <BiLoaderAlt className={`${loading && "animate-spin"} h-5 w-5`} />
            {loadingText && loadingText}
          </div>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  },
);

export default Button;
