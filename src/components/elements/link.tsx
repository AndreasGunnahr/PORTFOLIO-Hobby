import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  // we can add more properties we need from next/link in the future
}

export const CustomLink = React.forwardRef(
  ({ to, className, ...props }: IProps, ref: any) => {
    const router = useRouter();

    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as

    if (to.includes("http")) return <a {...props} href={to} target="_blank" />;

    return (
      <Link href={to}>
        <a
          {...props}
          ref={ref}
          className={cn(
            className,
            router.pathname === to && "border-b-2 border-yellow-600"
          )}
        />
      </Link>
    );
  }
);
