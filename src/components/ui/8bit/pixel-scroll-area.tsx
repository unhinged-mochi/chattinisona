import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PixelScrollAreaProps {
	children: ReactNode;
	className?: string;
	maxHeight?: string;
}

export function PixelScrollArea({
	children,
	className,
	maxHeight = "360px",
}: PixelScrollAreaProps) {
	return (
		<div
			className={cn("pixel-scroll overflow-y-auto pr-4", className)}
			style={{ maxHeight }}
		>
			{children}
		</div>
	);
}
