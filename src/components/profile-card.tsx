import { Gamepad2, Sparkles, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/8bit/badge";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/8bit/card";
import { CornerDecorations } from "@/components/ui/8bit/corner-decorations";

export interface ProfileCardProps {
	name: string;
	lore: string;
	tags?: string[];
	category?: string;
	slug: string;
	featured?: boolean;
	imageElement: ReactNode;
	level?: number;
	subtitle?: string;
}

export function ProfileCard({
	name,
	lore,
	tags,
	category,
	slug,
	featured,
	imageElement,
	level,
	subtitle,
}: ProfileCardProps) {
	return (
		<a className="group block" data-astro-prefetch href={`/profiles/${slug}`}>
			<div className="relative">
				<Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))] group-hover:border-primary/50">
					<CornerDecorations />

					{/* Featured indicator with animation */}
					{featured && (
						<div className="absolute top-0 right-0 left-0 z-10">
							<div className="flex items-center justify-center gap-2 bg-accent/90 px-4 py-1 backdrop-blur-sm">
								<Sparkles className="h-4 w-4 animate-pulse text-accent-foreground" />
								<span className="retro text-[10px] text-accent-foreground tracking-wider">
									★ FEATURED ★
								</span>
								<Sparkles className="h-4 w-4 animate-pulse text-accent-foreground" />
							</div>
						</div>
					)}

					<CardHeader className={featured ? "pt-12" : ""}>
						<div className="flex items-start gap-4">
							{/* Character portrait with retro border */}
							<div className="relative h-28 w-28 flex-shrink-0">
								<div className="absolute inset-0 border-4 border-primary/30 transition-colors group-hover:border-primary" />
								<div className="h-full w-full p-1">{imageElement}</div>
								{/* Level indicator */}
								{level && (
									<div className="retro absolute -right-2 -bottom-2 border-2 border-foreground bg-accent px-2 py-1 text-accent-foreground text-xs dark:border-ring">
										Lv.{level}
									</div>
								)}
							</div>

							{/* Name and category */}
							<div className="min-w-0 flex-1 space-y-2">
								<CardTitle className="retro text-sm leading-tight transition-colors group-hover:text-primary">
									{name}
								</CardTitle>
								{category && (
									<Badge className="text-[10px]" variant="secondary">
										<Zap className="mr-1 h-3 w-3" />
										{category}
									</Badge>
								)}
								{subtitle && (
									<div className="flex items-center gap-2 text-muted-foreground text-sm">
										<Gamepad2 className="h-4 w-4" />
										<span>{subtitle}</span>
									</div>
								)}
							</div>
						</div>
					</CardHeader>

					<CardContent className="space-y-4 bg-dots">
						{/* Lore text */}
						<p className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
							{lore}
						</p>

						{/* Tags with better spacing */}
						{tags && tags.length > 0 && (
							<div className="flex flex-wrap gap-2">
								{tags.slice(0, 3).map((tag) => (
									<Badge
										className="text-[10px] transition-colors hover:bg-primary/10"
										key={tag}
										variant="outline"
									>
										{tag}
									</Badge>
								))}
								{tags.length > 3 && (
									<Badge className="text-[10px]" variant="outline">
										+{tags.length - 3}
									</Badge>
								)}
							</div>
						)}

						{/* Call to action */}
						<div className="border-border border-t border-dashed pt-2">
							<div className="retro text-center text-[10px] text-primary transition-colors group-hover:text-accent">
								► VIEW PROFILE ◄
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</a>
	);
}
