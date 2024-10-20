# textline-sorter

A flexible utility for sorting lines of text.

## Features

- Sort lines alphabetically, alphanumerically, or by length
- Ascending or descending sort order
- Option to trim whitespace
- Option to remove empty lines
- Option to remove duplicate lines

## Installation

```bash
npm install textline-sorter
```

## API

### `sortLines(text: string, options: SortOptions): string`

Sorts the lines of the input text based on the provided options.

#### Parameters

- `text`: The input text to sort.
- `options`: An object of type `SortOptions` specifying the sorting behavior.

#### SortOptions

- `order`: `"alphabetical" | "alphanumerical" | "length"` - The sorting method to use.
- `direction`: `"asc" | "desc"` - The sort direction (ascending or descending).
- `caseFirst`: `"upper" | "lower"` (optional, default: `"upper"`) - Whether upper case letters should be sorted before lower case letters (`"upper"`) or vice versa (`"lower"`).
- `trimWhitespace`: `boolean` (optional, default: `false`) - Whether to trim whitespace from the beginning and end of each line before sorting.
- `removeEmptyLines`: `boolean` (optional, default: `false`) - Whether to remove empty lines before sorting.
- `removeDuplicateLines`: `boolean` (optional, default: `false`) - Whether to remove duplicate lines before sorting.

## Usage

### Example 1: Sorting Superheroes

```typescript
import { sortLines, SortOptions } from "textline-sorter";

const superheros: string = `Thor
Aquaman
Captain America
Scarlet Witch
Black Panther
Aquaman

Scarlet Witch

Cyborg

Black Widow

Captain America
Deadpool
The Flash
Spider-Man

Batman
Green Arrow
Wolverine
Green Arrow
The Flash`;

const options: SortOptions = {
  order: "alphabetical",
  direction: "asc",
  removeEmptyLines: true,
  removeDuplicateLines: true,
};

const sortedSuperheros = sortLines(superheros, options);
console.log(sortedSuperheros);
```

Output:

```
Aquaman
Batman
Black Panther
Black Widow
Captain America
Cyborg
Deadpool
Green Arrow
Scarlet Witch
Spider-Man
The Flash
Thor
Wolverine
```

For more examples, please refer to [/docs/USAGE.md](https://github.com/simonh1701/textline-sorter/blob/main/docs/USAGE.md).

## License

MIT
