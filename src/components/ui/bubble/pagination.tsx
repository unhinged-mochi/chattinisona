interface PaginationProps {
	currentPage: number;
	totalPages: number;
	baseUrl: string;
}

export default function Pagination({
	currentPage,
	totalPages,
	baseUrl,
}: PaginationProps) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="relative z-20 mb-12 flex justify-center gap-2">
			{pages.map((page) => (
				<a
					className={`flex h-10 w-10 items-center justify-center rounded-full font-pixel text-xs shadow-md transition-all ${
						page === currentPage
							? "border-2 border-blue-400 bg-blue-400 text-white"
							: "border-2 border-white bg-white text-slate-400 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400"
					}
          `}
					href={`${baseUrl}${page}/`}
					key={page}
				>
					{page}
				</a>
			))}
		</div>
	);
}
