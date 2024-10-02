export const add = (numbers) => {
    if (!numbers) return 0;

    // Custom delimiter support
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    //Uncomment the Condition for Spaces
    // Check for spaces (disallow spaces in the input string)
    /*if (/\s/.test(numbers)) {
        throw new Error("Spaces are not allowed in the input.");
    }*/

    // Split by delimiter and convert to numbers
    const numArray = numbers.split(delimiter).map(Number);

    // Handle negative numbers
    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    // Handle non-numeric values
    if (numArray.some(isNaN)) {
        throw new Error("Input contains invalid numbers.");
    }

    // Check if any number has more than three digits (limit is 999)
    const largeNumbers = numArray.filter((num) => num > 999);
    if (largeNumbers.length) {
        throw new Error(`Number length exceeded: ${largeNumbers.join(", ")}`);
    }

    // Sum the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
};
