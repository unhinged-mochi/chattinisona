import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ProgressProps {
	value: number;
	max?: number;
	label?: string;
	variant?: "default" | "primary" | "accent" | "secondary";
	showValue?: boolean;
	className?: string;
}

export function Progress({
	value,
	max = 100,
	label,
	variant = "default",
	showValue = true,
	className,
}: ProgressProps) {
	const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

	const colorMap = {
		default: "bg-primary",
		primary: "bg-primary",
		accent: "bg-accent",
		secondary: "bg-secondary",
	};

	return (
		<div className={cn("space-y-1", className)}>
			{label && (
				<div className="retro flex justify-between text-xs">
					<span>{label}</span>
					{showValue && (
						<span>
							{value}/{max}
						</span>
					)}
				</div>
			)}
			<div className="relative h-4 border-2 border-foreground bg-background dark:border-ring">
				<div
					className={cn("stat-bar relative h-full", colorMap[variant])}
					style={{ "--bar-width": `${percentage}%` } as CSSProperties}
				>
					{/* Pixel pattern overlay */}
					<div
						className="absolute inset-0 opacity-20"
						style={{
							backgroundImage: `repeating-linear-gradient(
								90deg,
								transparent,
								transparent 2px,
								rgba(255,255,255,0.2) 2px,
								rgba(255,255,255,0.2) 4px
							)`,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
