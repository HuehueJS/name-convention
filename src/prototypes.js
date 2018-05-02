String.prototype.capitalize = function() {
    return this.toLowerCase().replace(/^.|\s\S/g, function(val) { return val.toUpperCase(); });
}