import { Badge } from "@/components/ui/8bit/badge";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/8bit/card";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export interface ProfileCardProps {
	name: string;
	lore: string;
	tags?: string[];
	category?: string;
	slug: string;
	featured?: boolean;
	imageElement: ReactNode;
}

export function ProfileCard({
	name,
	lore,
	tags,
	category,
	slug,
	featured,
	imageElement,
}: ProfileCardProps) {
	return (
		<a href={`/profiles/${slug}`} className="block">
			<Card className="h-full hover:scale-105 transition-transform duration-200 relative overflow-hidden">
				{featured && (
					<div className="absolute top-2 right-2 z-10">
						<Sparkles className="w-6 h-6 text-accent animate-pulse" />
					</div>
				)}

				<CardHeader>
					<div className="flex items-center gap-4">
						<div className="flex-shrink-0 w-24 h-24">{imageElement}</div>
						<div className="flex-1 min-w-0">
							<CardTitle className="retro text-sm mb-2 truncate">
								{name}
							</CardTitle>
							{category && (
								<Badge variant="secondary" className="text-xs">
									{category}
								</Badge>
							)}
						</div>
					</div>
				</CardHeader>

				<CardContent>
					<p className="text-sm text-muted-foreground mb-4 line-clamp-3">
						{lore}
					</p>

					{tags && tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{tags.slice(0, 3).map((tag) => (
								<Badge key={tag} variant="outline" className="text-xs">
									{tag}
								</Badge>
							))}
						</div>
					)}
				</CardContent>
			</Card>
		</a>
	);
}
