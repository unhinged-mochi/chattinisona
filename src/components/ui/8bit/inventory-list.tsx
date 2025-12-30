import * as Icons from "lucide-react";
import type React from "react";

interface InventoryItem {
	name: string;
	icon: string;
}

interface InventoryListProps {
	items: InventoryItem[];
}

export function InventoryList({ items }: InventoryListProps) {
	if (!items || items.length === 0) {
		return null;
	}

	return (
		<ul className="space-y-2 text-lg">
			{items.map((item, index) => {
				const IconComponent = Icons[
					item.icon as keyof typeof Icons
				] as React.ComponentType<{ className?: string }>;
				const FallbackIcon = Icons.HelpCircle;
				const Icon = IconComponent || FallbackIcon;

				return (
					<li
						className="flex items-center gap-3 border border-border bg-background p-1"
						key={`${item.name}-${index}`}
					>
						<Icon className="h-4 w-4 flex-shrink-0" />
						<span>{item.name}</span>
					</li>
				);
			})}
		</ul>
	);
}
