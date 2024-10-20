import { sortLines } from "../src/index";
import { SortOptions, SortOrder } from "../src/sortLines";

describe("sortLines", () => {
  it("should sort lines alphabetically in ascending order", () => {
    const text = "banana\napple\ncherry";
    const options: SortOptions = { order: "alphabetical", direction: "asc" };
    const result = sortLines(text, options);
    expect(result).toBe("apple\nbanana\ncherry");
  });

  it("should sort lines alphabetically in descending order", () => {
    const text = "banana\napple\ncherry";
    const options: SortOptions = { order: "alphabetical", direction: "desc" };
    const result = sortLines(text, options);
    expect(result).toBe("cherry\nbanana\napple");
  });

  it("should sort lines alphanumerically in ascending order", () => {
    const text = "item10\nitem2\nitem1";
    const options: SortOptions = { order: "alphanumerical", direction: "asc" };
    const result = sortLines(text, options);
    expect(result).toBe("item1\nitem2\nitem10");
  });

  it("should sort lines by length in ascending order", () => {
    const text = "apple\nbanana\ncherry";
    const options: SortOptions = { order: "length", direction: "asc" };
    const result = sortLines(text, options);
    expect(result).toBe("apple\nbanana\ncherry");
  });

  it("should sort lines by length in descending order", () => {
    const text = "apple\nbanana\ncherry";
    const options: SortOptions = { order: "length", direction: "desc" };
    const result = sortLines(text, options);
    expect(result).toBe("cherry\nbanana\napple");
  });

  it("should handle lower caseFirst option correctly", () => {
    const text = "Banana\nbanana\naPple\napple\nCherry";
    const options: SortOptions = {
      order: "alphabetical",
      direction: "asc",
      caseFirst: "lower",
    };
    const result = sortLines(text, options);
    expect(result).toBe("apple\naPple\nbanana\nBanana\nCherry");
  });

  it("should handle upper caseFirst option correctly", () => {
    const text = "Banana\nbanana\naPple\napple\nCherry";
    const options: SortOptions = {
      order: "alphabetical",
      direction: "asc",
      caseFirst: "upper",
    };
    const result = sortLines(text, options);
    expect(result).toBe("aPple\napple\nBanana\nbanana\nCherry");
  });

  it("should handle lower caseFirst option correctly when sorting in descending order", () => {
    const text = "Banana\nbanana\naPple\napple\nCherry";
    const options: SortOptions = {
      order: "alphabetical",
      direction: "desc",
      caseFirst: "lower",
    };
    const result = sortLines(text, options);
    expect(result).toBe("Cherry\nbanana\nBanana\napple\naPple");
  });

  it("should handle upper caseFirst option correctly when sorting in descending order", () => {
    const text = "Banana\nbanana\naPple\napple\nCherry";
    const options: SortOptions = {
      order: "alphabetical",
      direction: "desc",
      caseFirst: "upper",
    };
    const result = sortLines(text, options);
    expect(result).toBe("Cherry\nBanana\nbanana\naPple\napple");
  });

  it("should trim whitespace before sorting", () => {
    const text = "  banana  \n  apple  \n  cherry  ";
    const options: SortOptions = {
      order: "alphabetical",
      direction: "asc",
      trimWhitespace: true,
    };
    const result = sortLines(text, options);
    expect(result).toBe("apple\nbanana\ncherry");
  });

  it("should remove empty lines before sorting", () => {
    const text = "banana\n\napple\n\ncherry";
    const options: SortOptions = {
      order: "alphabetical",
      direction: "asc",
      removeEmptyLines: true,
    };
    const result = sortLines(text, options);
    expect(result).toBe("apple\nbanana\ncherry");
  });

  it("should remove duplicate lines before sorting", () => {
    const text = "banana\napple\nbanana\ncherry";
    const options: SortOptions = {
      order: "alphabetical",
      direction: "asc",
      removeDuplicateLines: true,
    };
    const result = sortLines(text, options);
    expect(result).toBe("apple\nbanana\ncherry");
  });

  it("should handle mixed options correctly", () => {
    const text = "  banana  \n  apple  \n  banana  \n  cherry  \n";
    const options: SortOptions = {
      order: "alphabetical",
      direction: "asc",
      trimWhitespace: true,
      removeEmptyLines: true,
      removeDuplicateLines: true,
    };
    const result = sortLines(text, options);
    expect(result).toBe("apple\nbanana\ncherry");
  });

  it("should throw an error for unknown sort order", () => {
    const text = "banana\napple\ncherry";
    expect(() =>
      sortLines(text, { order: "unknown" as SortOrder, direction: "asc" }),
    ).toThrow("Unknown sort order: unknown");
  });

  it("should handle empty input text", () => {
    const text = "";
    const options: SortOptions = { order: "alphabetical", direction: "asc" };
    const result = sortLines(text, options);
    expect(result).toBe("");
  });

  it("should handle single line input text", () => {
    const text = "singleline";
    const options: SortOptions = { order: "alphabetical", direction: "asc" };
    const result = sortLines(text, options);
    expect(result).toBe("singleline");
  });

  it("should handle input text with only whitespace", () => {
    const text = "   \n   \n   ";
    const options: SortOptions = {
      order: "alphabetical",
      direction: "asc",
      trimWhitespace: true,
      removeEmptyLines: true,
    };
    const result = sortLines(text, options);
    expect(result).toBe("");
  });
});
