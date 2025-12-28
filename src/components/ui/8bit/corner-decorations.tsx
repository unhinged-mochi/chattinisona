export function CornerDecorations() {
	return (
		<>
			<div className="absolute top-0 left-0 z-20 h-6 w-6 border-foreground border-r-4 border-b-4 bg-accent dark:border-ring" />
			<div className="absolute top-0 right-0 z-20 h-6 w-6 border-foreground border-b-4 border-l-4 bg-accent dark:border-ring" />
			<div className="absolute bottom-0 left-0 z-20 h-6 w-6 border-foreground border-t-4 border-r-4 bg-accent dark:border-ring" />
			<div className="absolute right-0 bottom-0 z-20 h-6 w-6 border-foreground border-t-4 border-l-4 bg-accent dark:border-ring" />
		</>
	);
}
