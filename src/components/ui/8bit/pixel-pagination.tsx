import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/8bit/pagination";

interface PixelPaginationProps {
	currentPage: number;
	totalPages: number;
	baseUrl: string;
}

export default function PixelPagination({
	currentPage,
	totalPages,
	baseUrl,
}: PixelPaginationProps) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<Pagination font="retro">
			<PaginationContent>
				{currentPage > 1 && (
					<PaginationItem>
						<PaginationPrevious
							font="retro"
							href={`${baseUrl}${currentPage - 1}/`}
						/>
					</PaginationItem>
				)}

				{pages.map((pageNum) => (
					<PaginationItem key={pageNum}>
						<PaginationLink
							font="retro"
							href={`${baseUrl}${pageNum}/`}
							isActive={pageNum === currentPage}
						>
							{pageNum}
						</PaginationLink>
					</PaginationItem>
				))}

				{currentPage < totalPages && (
					<PaginationItem>
						<PaginationNext
							font="retro"
							href={`${baseUrl}${currentPage + 1}/`}
						/>
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	);
}
