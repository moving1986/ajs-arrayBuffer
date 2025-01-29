import getBuffer from "../getBuffer";
import ArrayBufferConverter from "../ArrayBufferConverter";

describe('ArrayBufferConverter', () => {
    let converter;

    beforeEach(() => {
        converter = new ArrayBufferConverter();
    });

    test('should convert ArrayBuffer to string correctly', () => {
        const buffer = getBuffer();
        converter.load(buffer);
        const result = converter.toString();
        
        expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
    });

    test('should return an empty string if no buffer is loaded', () => {
        const result = converter.toString();
        expect(result).toBe('');
    });
});