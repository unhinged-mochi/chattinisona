import { cn } from "@/lib/utils";

interface SeparatorProps {
	className?: string;
	orientation?: "horizontal" | "vertical";
	decorative?: boolean;
}

export function Separator({
	className,
	orientation = "horizontal",
	decorative = true,
}: SeparatorProps) {
	return (
		<div
			{...(!decorative && { "aria-orientation": orientation })}
			className={cn(
				"relative border-foreground dark:border-ring",
				orientation === "horizontal"
					? "h-1 w-full border-t-2 border-b-2"
					: "h-full w-1 border-r-2 border-l-2",
				className
			)}
			role={decorative ? "none" : "separator"}
		>
			{/* Corner pixels for authenticity */}
			<div className="absolute -top-1 -left-1 h-2 w-2 bg-foreground dark:bg-ring" />
			<div className="absolute -top-1 -right-1 h-2 w-2 bg-foreground dark:bg-ring" />
		</div>
	);
}
