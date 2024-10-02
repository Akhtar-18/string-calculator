import { add } from "./stringCalculator";

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return sum for single numbers', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('should return the number itself when only one number is provided', () => {
        expect(add("1")).toBe(1);
    });

    test('should return the sum of two numbers separated by comma', () => {
        expect(add("1,2")).toBe(3);
    });

    test('should return the sum of multiple numbers separated by comma', () => {
        expect(add("1,2,3")).toBe(6);
    });

    test('should handle newlines as delimiters', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should handle custom delimiter', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('should throw an error when negative numbers are passed', () => {
        expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });

    test('should throw an error when multiple negative numbers are passed', () => {
        expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
    });

    test('should throw error for non-numeric values', () => {
        expect(() => add("1,a,3")).toThrow("Input contains invalid numbers.");
    });

    test('should throw error for numbers longer than 3 digits', () => {
        expect(() => add("1000,999")).toThrow("Number length exceeded: 1000");
        expect(() => add("999,1234,567")).toThrow("Number length exceeded: 1234");
    });

    test('should work for numbers up to 999', () => {
        expect(add("999,500")).toBe(1499);
    });

    //Uncomment the Test for Spaces
    /*test('should throw error for spaces in the input', () => {
        expect(() => add("1, 2")).toThrow("Spaces are not allowed in the input.");
    });*/

});
