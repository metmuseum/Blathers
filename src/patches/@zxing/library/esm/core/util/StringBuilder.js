import StringEncoding from './StringEncoding';
export default class StringBuilder {
    constructor(value = '') {
        this.value = value;
    }
    enableDecoding(encoding) {
        this.encoding = encoding;
        return this;
    }
    append(s) {
        if (typeof s === 'string') {
            this.value += s.toString();
        }
        else if (this.encoding) {
            // use passed format (fromCharCode will return UTF8 encoding)
            this.value += StringEncoding.decode(new Uint8Array([s]), this.encoding);
        }
        else {
            // correctly converts from UTF-8, but not other encodings
            this.value += String.fromCharCode(s);
        }
        return this;
    }
    length() {
        return this.value.length;
    }
    charAt(n) {
        return this.value.charAt(n);
    }
    deleteCharAt(n) {
        this.value = this.value.substr(0, n) + this.value.substring(n + 1);
    }
    setCharAt(n, c) {
        this.value = this.value.substr(0, n) + c + this.value.substr(n + 1);
    }
    substring(start, end) {
        return this.value.substring(start, end);
    }
    /**
     * @note helper method for RSS Expanded
     */
    setLengthToZero() {
        this.value = "";
    }
    toString() {
        return this.value;
    }
    insert(n, c) {
        this.value = this.value.substr(0, n) + c + this.value.substr(n + c.length);
    }
}
//# sourceMappingURL=StringBuilder.js.map