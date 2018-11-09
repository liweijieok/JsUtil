//类型数组
const TYPES = ["Number", "Undefined", "Null", "Boolean", "String", "Object", "Array", "Date", "Error", "Map", "Set", "Function", "RegExp"];

class type {
    getType(obj) {
        return Object.prototype.toString.call(obj);
    }

    _name(str) {
        return `[object ${str}]`;
    }

    _compare(obj, position) {
        return this.getType(obj) == this._name(TYPES[position]);
    }

    isNumber(obj) {
        return this._compare(obj, 0);
    }

    isUndefined(obj) {
        return this._compare(obj, 1);
    }

    isNull(obj) {
        return this._compare(obj, 2);
    }

    isBoolean(obj) {
        return this._compare(obj, 3);
    }

    isString(obj) {
        return this._compare(obj, 4);
    }

    isObject(obj) {
        return this._compare(obj, 5);
    }

    isArray(obj) {
        return this._compare(obj, 6);
    }

    isDate(obj) {
        return this._compare(obj, 7);
    }

    isError(obj) {
        return this._compare(obj, 8);
    }

    isMap(obj) {
        return this._compare(obj, 9);
    }

    isSet(obj) {
        return this._compare(obj, 10);
    }

    isFunction(obj) {
        return this._compare(obj, 11);
    }

    isRegExp(obj) {
        return this._compare(obj, 12);
    }
}

export default new type();
