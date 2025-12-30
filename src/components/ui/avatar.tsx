import {
	Fallback as AvatarFallback,
	Image as AvatarImage,
	Root as AvatarRoot,
} from "@radix-ui/react-avatar";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Avatar({
	className,
	...props
}: React.ComponentProps<typeof AvatarRoot>) {
	return (
		<AvatarRoot
			className={cn(
				"relative flex size-8 shrink-0 overflow-hidden rounded-full",
				className
			)}
			data-slot="avatar"
			{...props}
		/>
	);
}

function BitAvatarImage({
	className,
	...props
}: React.ComponentProps<typeof AvatarImage>) {
	return (
		<AvatarImage
			className={cn("aspect-square size-full", className)}
			data-slot="avatar-image"
			{...props}
		/>
	);
}

function BitAvatarFallback({
	className,
	...props
}: React.ComponentProps<typeof AvatarFallback>) {
	return (
		<AvatarFallback
			className={cn(
				"flex size-full items-center justify-center rounded-full bg-muted",
				className
			)}
			data-slot="avatar-fallback"
			{...props}
		/>
	);
}

export {
	Avatar,
	BitAvatarImage as AvatarImage,
	BitAvatarFallback as AvatarFallback,
};
