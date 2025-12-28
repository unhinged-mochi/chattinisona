import { Plus } from "lucide-react";

export default function JoinCTABubble() {
	return (
		<div className="bubble-card float-delay-4 group flex h-56 w-56 cursor-pointer flex-col items-center justify-center border-4 border-white border-dashed bg-white/40 p-4 text-center hover:border-pink-300 hover:bg-white/60">
			<div className="relative mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-white/50 transition-transform group-hover:scale-110">
				<Plus className="h-10 w-10 text-pink-400 transition-transform duration-300 group-hover:rotate-90" />
			</div>

			<h3 className="mb-1 font-pixel text-slate-600 text-xs">Join Us!</h3>

			<p className="font-mono-pixel text-slate-500 text-sm">Become a Fan</p>
		</div>
	);
}
