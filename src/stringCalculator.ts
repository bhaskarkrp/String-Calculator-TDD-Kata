export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter: RegExp = /,|\n/; // Default delimiter: comma or newline

  // Handle custom delimiters
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(\[.*\])\n|\/\/(.)\n/);
    if (delimiterMatch) {
      if (delimiterMatch[1]) {
        // Multiple delimiters with square brackets: "//[delim1][delim2]\n"
        const delimiters = delimiterMatch[1]
          .split(/\]\[/) // Split delimiters
          .map((d) => d.replace(/[\[\]]/g, "")); // Remove square brackets
        delimiter = new RegExp(
          delimiters.map((d) => escapeRegExp(d)).join("|")
        ); // Create a RegExp for delimiters
      } else if (delimiterMatch[2]) {
        // Single character delimiter: "//;\n"
        delimiter = new RegExp(escapeRegExp(delimiterMatch[2])); // The custom delimiter is at delimiterMatch[2]
      }
      numbers = numbers.replace(/^\/\/.*\n/, ""); // Remove the delimiter specification line
    }
  }

  const numberArray = numbers.split(delimiter).map(Number);
  const negatives = numberArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  return numberArray
    .filter((num) => num <= 1000)
    .reduce((sum, num) => sum + num, 0);
}

// Helper function to escape special RegExp characters
function escapeRegExp(text: string): string {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
