function add(numbers) {
    if (!numbers) return 0;

    // Custom delimiter handling
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterSpec = numbers.match(/\/\/(.+)\n/);
        delimiter = new RegExp(delimiterSpec[1]);
        numbers = numbers.replace(/\/\/.+\n/, "");
    }

    // Split numbers by delimiters
    const nums = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    const negatives = nums.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
