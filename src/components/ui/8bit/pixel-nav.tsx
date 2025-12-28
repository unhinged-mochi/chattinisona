import { Gamepad2, Home, Users } from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/8bit/navigation-menu";
import { cn } from "@/lib/utils";

interface PixelNavProps {
	current?: "home" | "profiles";
}

export default function PixelNav({ current }: PixelNavProps) {
	return (
		<>
			<nav className="fixed top-0 right-0 left-0 z-50 border-foreground border-b-4 bg-background/95 shadow-[0_4px_0px_0px_hsl(var(--foreground))] backdrop-blur-sm">
				<div className="mx-auto max-w-7xl px-4 py-3">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<a className="group flex items-center gap-3" href="/">
							<div className="border-3 border-foreground bg-primary p-2 shadow-[2px_2px_0px_0px_hsl(var(--foreground))] transition-all group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_0px_hsl(var(--accent))]">
								<Gamepad2 className="h-5 w-5 text-primary-foreground" />
							</div>
							<h1 className="retro hidden text-primary text-sm uppercase sm:block md:text-base">
								Chattini<span className="text-accent">sona</span>
							</h1>
						</a>

						{/* Navigation Links */}
						<NavigationMenu font="retro" viewport={false}>
							<NavigationMenuList className="flex items-center gap-2 md:gap-4">
								<NavigationMenuItem>
									<NavigationMenuLink
										className={cn(
											"flex items-center gap-2 border-3 border-foreground px-3 py-2 transition-all md:px-4",
											current === "home"
												? "bg-primary text-primary-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))]"
												: "bg-background shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[3px_3px_0px_0px_hsl(var(--foreground))]"
										)}
										href="/"
									>
										<Home className="h-4 w-4" />
										<span className="retro hidden text-xs md:inline">HOME</span>
									</NavigationMenuLink>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuLink
										className={cn(
											"flex items-center gap-2 border-3 border-foreground px-3 py-2 transition-all md:px-4",
											current === "profiles"
												? "bg-primary text-primary-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))]"
												: "bg-background shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[3px_3px_0px_0px_hsl(var(--foreground))]"
										)}
										href="/profiles"
									>
										<Users className="h-4 w-4" />
										<span className="retro hidden text-xs md:inline">
											PROFILES
										</span>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
			</nav>

			{/* Spacer to prevent content from going under fixed nav */}
			<div className="h-[60px]" />
		</>
	);
}
