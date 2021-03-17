Array.prototype.myFilter = (callback, thisArg) => {
    for (let i = 0; i < Array.length; i++) {
        callback(Array[i], i, Array);
    }
}
