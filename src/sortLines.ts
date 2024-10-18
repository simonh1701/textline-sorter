export type SortOrder = "alphabetical" | "alphanumerical" | "length";

export interface SortOptions {
  order: SortOrder;
  direction: "asc" | "desc";
  caseFirst?: "upper" | "lower";
  trimWhitespace?: boolean;
  removeEmptyLines?: boolean;
  removeDuplicateLines?: boolean;
}

export function sortLines(text: string, options: SortOptions): string {
  const {
    order,
    direction,
    caseFirst = "upper",
    trimWhitespace = false,
    removeEmptyLines = false,
    removeDuplicateLines = false,
  } = options;

  const lines = text.split("\n");
  let sortedLines: string[] = [...lines];

  if (trimWhitespace) {
    sortedLines = sortedLines.map((line) => line.trim());
  }

  if (removeEmptyLines) {
    sortedLines = sortedLines.filter((line) => line.trim() !== "");
  }

  sortedLines = removeDuplicateLines
    ? Array.from(new Set(sortedLines))
    : sortedLines;

  sortedLines = sortedLines.sort((a, b) => {
    // Determine corrected caseFirst based on direction
    // If direction is descending, reverse caseFirst
    const caseFirstReversedIfDescending =
      direction === "desc"
        ? caseFirst === "upper"
          ? "lower"
          : "upper"
        : caseFirst;

    // Reverse comparison if direction is descending
    const compareResult = (order: SortOrder, a: string, b: string) => {
      switch (order) {
        case "alphabetical":
          return a.localeCompare(b, "en", {
            caseFirst: caseFirstReversedIfDescending,
            sensitivity: "variant",
          });
        case "alphanumerical":
          return a.localeCompare(b, "en", {
            numeric: true,
            caseFirst: caseFirstReversedIfDescending,
            sensitivity: "variant",
          });
        case "length": {
          const lengthDiff = a.length - b.length;
          if (lengthDiff !== 0) {
            return lengthDiff;
          }
          return a.localeCompare(b, "en", {
            caseFirst: caseFirstReversedIfDescending,
            sensitivity: "variant",
          });
        }
        default:
          throw new Error(`Unknown sort order: ${order}`);
      }
    };

    return direction === "desc"
      ? compareResult(order, b, a)
      : compareResult(order, a, b);
  });

  return sortedLines.join("\n");
}
