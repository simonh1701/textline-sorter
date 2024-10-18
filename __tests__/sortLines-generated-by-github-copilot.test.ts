import { sortLines } from "../src/index";
import { SortOptions } from "../src/sortLines";

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
});
