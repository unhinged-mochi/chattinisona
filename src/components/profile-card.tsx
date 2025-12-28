import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/8bit/badge";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/8bit/card";

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
		<a className="block" href={`/profiles/${slug}`}>
			<Card className="relative h-full overflow-hidden transition-transform duration-200 hover:scale-105">
				{featured && (
					<div className="absolute top-2 right-2 z-10">
						<Sparkles className="h-6 w-6 animate-pulse text-accent" />
					</div>
				)}

				<CardHeader>
					<div className="flex items-center gap-4">
						<div className="h-24 w-24 flex-shrink-0">{imageElement}</div>
						<div className="min-w-0 flex-1">
							<CardTitle className="retro mb-2 truncate text-sm">
								{name}
							</CardTitle>
							{category && (
								<Badge className="text-xs" variant="secondary">
									{category}
								</Badge>
							)}
						</div>
					</div>
				</CardHeader>

				<CardContent>
					<p className="mb-4 line-clamp-3 text-muted-foreground text-sm">
						{lore}
					</p>

					{tags && tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{tags.slice(0, 3).map((tag) => (
								<Badge className="text-xs" key={tag} variant="outline">
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
