import { Avatar as AvatarBase } from "@base-ui/react/avatar";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "~/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "size-6 text-xs",
        sm: "size-8 text-sm",
        md: "size-10",
        lg: "size-12 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

function Avatar({
  className,
  size,
  ...props
}: React.ComponentProps<typeof AvatarBase.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarBase.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  avatar,
  address,
  ...props
}: React.ComponentProps<typeof AvatarBase.Image> & {
  avatar: string | null | undefined;
  address: string;
}) {
  return (
    <>
      <AvatarBase.Image
        data-slot="avatar-image"
        src={avatar || `https://avatar.vercel.sh/${address.toLowerCase()}`}
        className={cn("size-full object-cover", className)}
        {...props}
      />
      <AvatarBase.Fallback
        data-slot="avatar-fallback"
        className={cn(
          "bg-muted flex size-full items-center justify-center rounded-full select-none",
          className,
        )}
      >
        {address.slice(2, 4).toUpperCase()}
      </AvatarBase.Fallback>
    </>
  );
}

function AvatarGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="*:data-[slot=avatar]:ring-white flex -space-x-4 *:data-[slot=avatar]:ring-2">
      {children}
    </div>
  );
}

export { Avatar, AvatarImage, AvatarGroup };
