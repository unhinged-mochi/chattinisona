export function PixelFooter() {
	return (
		<footer className="relative overflow-hidden border-foreground border-t-4 bg-primary p-4 text-center dark:bg-slate-900">
			<div className="diagonal-stripes absolute inset-0 opacity-10" />
			<p className="retro relative z-10 text-primary-foreground text-xs md:text-sm">
				© 2023 Chattini Archives <span className="mx-2 text-accent">•</span>
				Press Start to Continue
			</p>
		</footer>
	);
}
