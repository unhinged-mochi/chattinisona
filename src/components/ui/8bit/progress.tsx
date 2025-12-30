import {
	Indicator as ProgressIndicator,
	Root as ProgressRoot,
} from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const progressVariants = cva("", {
	variants: {
		variant: {
			default: "",
			retro: "retro",
		},
		font: {
			normal: "",
			retro: "retro",
		},
	},
	defaultVariants: {
		font: "retro",
	},
});

// Move regex to top level to avoid creating it in function scope
const HEIGHT_REGEX = /h-(\d+|\[.*?\])/;

// Pre-generate square keys to avoid using array index as key
const PROGRESS_SQUARES = Array.from({ length: 20 }, (_, i) => `square-${i}`);

export interface BitProgressProps
	extends React.ComponentProps<typeof ProgressRoot>,
		VariantProps<typeof progressVariants> {
	className?: string;
	font?: VariantProps<typeof progressVariants>["font"];
	progressBg?: string;
}

function Progress({
	className,
	font,
	variant,
	value,
	progressBg,
	...props
}: BitProgressProps) {
	// Extract height from className if present
	const heightMatch = className?.match(HEIGHT_REGEX);
	const heightClass = heightMatch ? heightMatch[0] : "h-2";

	return (
		<div className={cn("relative w-full", className)}>
			<ProgressRoot
				className={cn(
					"relative w-full overflow-hidden bg-primary/20",
					heightClass,
					font !== "normal" && "retro"
				)}
				data-slot="progress"
				{...props}
			>
				<ProgressIndicator
					className={cn(
						"h-full transition-all",
						variant === "retro" ? "flex" : "w-full flex-1",
						progressBg && variant !== "retro" ? progressBg : "bg-primary"
					)}
					data-slot="progress-indicator"
					style={
						variant === "retro"
							? undefined
							: { transform: `translateX(-${100 - (value || 0)}%)` }
					}
				>
					{variant === "retro" && (
						<div className="flex w-full">
							{PROGRESS_SQUARES.map((squareKey, index) => {
								const filledSquares = Math.round(((value || 0) / 100) * 20);
								return (
									<div
										className={cn(
											"mx-[1px] size-full",
											index < filledSquares ? progressBg : "bg-transparent"
										)}
										key={squareKey}
									/>
								);
							})}
						</div>
					)}
				</ProgressIndicator>
			</ProgressRoot>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -my-1 border-foreground border-y-4 dark:border-ring"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -mx-1 border-foreground border-x-4 dark:border-ring"
			/>
		</div>
	);
}

export { Progress };
