"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

// Global function to get current theme from DOM
function getCurrentTheme(): "light" | "dark" {
	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// Global function to set theme
function setGlobalTheme(newTheme: "light" | "dark") {
	localStorage.setItem("theme", newTheme);
	if (newTheme === "dark") {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
	// Dispatch custom event so all instances stay in sync
	window.dispatchEvent(new CustomEvent("themechange", { detail: newTheme }));
}

export function ThemeToggle() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		// Initialize from localStorage or DOM
		const saved = localStorage.getItem("theme") as "light" | "dark" | null;
		const initialTheme = saved || getCurrentTheme();
		setTheme(initialTheme);
		setGlobalTheme(initialTheme);

		// Listen for theme changes from other instances
		const handleThemeChange = (e: Event) => {
			const customEvent = e as CustomEvent<"light" | "dark">;
			setTheme(customEvent.detail);
		};
		window.addEventListener("themechange", handleThemeChange);
		return () => window.removeEventListener("themechange", handleThemeChange);
	}, []);

	const toggle = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		setGlobalTheme(newTheme);
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
