import { Button as BaseButton } from "@base-ui-components/react";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "~/utils";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center gap-2 whitespace-nowrap rounded-[40px] font-semibold uppercase transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none cursor-pointer hover:scale-105 active:scale-95 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-linear-to-b from-primary-fade to-primary text-white",
        secondary: "bg-linear-to-b from-secondary-fade to-secondary text-white",
        ghost: "text-primary",
        outline:
          "border bg-white shadow-xs hover:bg-slate-100 hover:text-slate-900 dark:bg-slate-200/30 dark:border-slate-200 dark:hover:bg-slate-200/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:dark:bg-slate-800/30 dark:dark:border-slate-800 dark:dark:hover:bg-slate-800/50",
      },
      size: {
        default: "h-12 px-6 py-4",
        sm: "h-8 rounded-md gap-1.5 px-3",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants>) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
