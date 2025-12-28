import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn utility function", () => {
	it("should merge class names correctly", () => {
		const result = cn("px-2 py-1", "px-4");
		expect(result).toBe("py-1 px-4");
	});

	it("should handle conditional classes", () => {
		const result = cn("base-class", false, "visible");
		expect(result).toBe("base-class visible");
	});

	it("should merge tailwind classes without conflicts", () => {
		const result = cn("text-sm", "text-lg");
		expect(result).toBe("text-lg");
	});

	it("should handle empty inputs", () => {
		const result = cn();
		expect(result).toBe("");
	});

	it("should handle undefined and null values", () => {
		const result = cn("base", undefined, null, "other");
		expect(result).toBe("base other");
	});

	it("should merge multiple class strings", () => {
		const result = cn("flex items-center", "justify-between gap-2");
		expect(result).toBe("flex items-center justify-between gap-2");
	});

	it("should handle arrays of classes", () => {
		const result = cn(["flex", "items-center"], "gap-2");
		expect(result).toBe("flex items-center gap-2");
	});

	it("should handle objects with boolean values", () => {
		const result = cn({
			flex: true,
			hidden: false,
			"items-center": true,
		});
		expect(result).toBe("flex items-center");
	});
});
