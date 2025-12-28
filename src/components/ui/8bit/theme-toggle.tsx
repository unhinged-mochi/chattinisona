"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		const saved = localStorage.getItem("theme") as "light" | "dark" | null;
		const initialTheme =
			saved ||
			(document.documentElement.classList.contains("dark") ? "dark" : "light");
		setTheme(initialTheme);
	}, []);

	const toggle = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<button
			aria-label="Toggle theme"
			className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center border-4 border-foreground bg-accent text-accent-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all hover:translate-y-1 hover:shadow-none dark:border-ring"
			onClick={toggle}
			type="button"
		>
			{theme === "light" ? (
				<Moon className="h-6 w-6" />
			) : (
				<Sun className="h-6 w-6" />
			)}
		</button>
	);
}
