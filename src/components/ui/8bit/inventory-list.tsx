import {
	Droplet,
	Flame,
	Heart,
	HelpCircle,
	Shield,
	Sparkles,
	Star,
	Sword,
	Target,
	Zap,
} from "lucide-react";
import type React from "react";

interface InventoryItem {
	name: string;
	icon: string;
}

interface InventoryListProps {
	items: InventoryItem[];
}

// Icon registry - add more icons as needed
const iconRegistry: Record<
	string,
	React.ComponentType<{ className?: string }>
> = {
	Sword,
	Shield,
	Heart,
	Star,
	Zap,
	Target,
	Flame,
	Droplet,
	Sparkles,
	HelpCircle,
};

// Create a type-safe icon lookup
const getIconComponent = (
	iconName: string
): React.ComponentType<{ className?: string }> => {
	return iconRegistry[iconName] || HelpCircle;
};

export function InventoryList({ items }: InventoryListProps) {
	if (!items || items.length === 0) {
		return null;
	}

	return (
		<ul className="space-y-2 text-lg">
			{items.map((item) => {
				const Icon = getIconComponent(item.icon);

				return (
					<li
						className="flex items-center gap-3 border border-border bg-background p-1"
						key={item.name}
					>
						<Icon className="h-4 w-4 flex-shrink-0" />
						<span>{item.name}</span>
					</li>
				);
			})}
		</ul>
	);
}
