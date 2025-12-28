import { motion } from "motion/react";

interface BubbleCardProps {
	profile: {
		name: string;
		image: string;
		level: number;
		class: string;
		favoriteCount?: number;
		slug: string;
	};
	size: "sm" | "md" | "lg" | "xl";
	floatDelay: 1 | 2 | 3 | 4;
	colorScheme: "blue" | "pink" | "purple" | "yellow" | "green" | "red";
}

export default function BubbleCard({
	profile,
	size,
	floatDelay,
	colorScheme,
}: BubbleCardProps) {
	// Use default Chattino image if no image provided
	const imageUrl = profile.image
		? `/images/profiles/${profile.image}`
		: "/images/profiles/chattino.jpeg";

	const sizeClasses = {
		sm: "w-48 h-48",
		md: "w-64 h-64",
		lg: "w-72 h-72",
		xl: "w-80 h-80",
	};

	const colorClasses = {
		blue: "text-blue-600",
		pink: "text-pink-500",
		purple: "text-purple-500",
		yellow: "text-yellow-600",
		green: "text-green-600",
		red: "text-red-500",
	};

	const avatarSizes = {
		sm: "w-20 h-20",
		md: "w-24 h-24",
		lg: "w-28 h-28",
		xl: "w-32 h-32",
	};

	const textSizes = {
		sm: "text-[9px]",
		md: "text-xs",
		lg: "text-xs",
		xl: "text-xs",
	};

	// Animation delays based on floatDelay prop
	const animationDelay = floatDelay * 0.2;

	return (
		<a href={`/profiles/${profile.slug}`}>
			<motion.div
				animate={{
					opacity: 1,
					scale: 1,
					y: [0, -10, 0],
				}}
				className={`bubble-card aspect-square border-2 border-white bg-gradient-to-br from-white/90 to-white/40 shadow-bubble hover:shadow-bubble-hover ${sizeClasses[size]} group flex cursor-pointer flex-col items-center justify-center p-6 text-center`}
				initial={{ opacity: 0, scale: 0.8, y: 20 }}
				transition={{
					opacity: { duration: 0.5, delay: animationDelay },
					scale: { duration: 0.5, delay: animationDelay },
					y: {
						duration: 4 + floatDelay * 0.5,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
						delay: animationDelay,
					},
				}}
				whileHover={{
					scale: 1.05,
					y: -5,
					transition: { duration: 0.3 },
				}}
			>
				<div className="bubble-shine" />

				{/* Circular Avatar */}
				<motion.div
					className={`relative mb-3 overflow-hidden rounded-full border-4 border-white shadow-sm ${avatarSizes[size]}`}
					transition={{ duration: 0.3 }}
					whileHover={{ scale: 1.1, rotate: 5 }}
				>
					<img
						alt={profile.name}
						className="pixelated h-full w-full object-cover"
						src={imageUrl}
					/>
				</motion.div>

				{/* Name */}
				<h3
					className={`font-pixel ${textSizes[size]} ${colorClasses[colorScheme]} mb-1 rounded-full bg-white/80 px-2 py-1`}
				>
					{profile.name}
				</h3>

				{/* Level & Class */}
				<p className="font-mono-pixel text-lg text-slate-500">
					Lvl {profile.level} • {profile.class}
				</p>

				{/* Favorite Count (hover only) */}
				{profile.favoriteCount && (
					<motion.div
						className="mt-2 flex gap-3"
						initial={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						whileHover={{ opacity: 1 }}
					>
						<span
							className={`rounded-full bg-white/60 px-2 py-1 font-bold text-xs ${colorClasses[colorScheme]}`}
						>
							♥ {profile.favoriteCount}
						</span>
					</motion.div>
				)}
			</motion.div>
		</a>
	);
}
