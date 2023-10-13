function t(e) {
    return module.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, t(e);
}

module.exports = t;