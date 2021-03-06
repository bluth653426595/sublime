// Don't edit this files, because it's autogenerated.
// See updaters/ dir for generator. Run bin/update to update.

module.exports = {
    calc: {
        props: [
            "*"
        ],
        browsers: [
            "ff 4",
            "ff 5",
            "ff 6",
            "ff 7",
            "ff 8",
            "ff 9",
            "ff 10",
            "ff 11",
            "ff 12",
            "ff 13",
            "ff 14",
            "ff 15",
            "chrome 19",
            "chrome 20",
            "chrome 21",
            "chrome 22",
            "chrome 23",
            "chrome 24",
            "chrome 25",
            "safari 6",
            "ios 6",
            "ios 6.1",
            "bb 10"
        ]
    },
    flex: {
        props: [
            "display"
        ],
        browsers: [
            "ie 10",
            "ff 2",
            "ff 3",
            "ff 4",
            "ff 5",
            "ff 6",
            "ff 7",
            "ff 8",
            "ff 9",
            "ff 10",
            "ff 11",
            "ff 12",
            "ff 13",
            "ff 14",
            "ff 15",
            "ff 16",
            "ff 17",
            "ff 18",
            "ff 19",
            "ff 20",
            "ff 21",
            "ff 3.5",
            "ff 3.6",
            "chrome 4",
            "chrome 5",
            "chrome 6",
            "chrome 7",
            "chrome 8",
            "chrome 9",
            "chrome 10",
            "chrome 11",
            "chrome 12",
            "chrome 13",
            "chrome 14",
            "chrome 15",
            "chrome 16",
            "chrome 17",
            "chrome 18",
            "chrome 19",
            "chrome 20",
            "chrome 21",
            "chrome 22",
            "chrome 23",
            "chrome 24",
            "chrome 25",
            "chrome 26",
            "chrome 27",
            "chrome 28",
            "chrome 29",
            "safari 4",
            "safari 5",
            "safari 6",
            "safari 3.1",
            "safari 3.2",
            "safari 5.1",
            "opera 15",
            "ios 3.2",
            "ios 4",
            "ios 4.1",
            "ios 4.2",
            "ios 4.3",
            "ios 5",
            "ios 5.1",
            "ios 6",
            "ios 6.1",
            "android 3",
            "android 4",
            "android 2.1",
            "android 2.2",
            "android 2.3",
            "android 4.1",
            "android 4.2",
            "bb 7",
            "bb 10"
        ],
        replace: function (string, prefix, rules) {
            if (prefix === '-webkit-') {
                rules.add('display', '-webkit-box');
                return '-webkit-' + string;
            } else if (prefix === '-moz-') {
                return prefix + 'box';
            } else if (prefix === '-ms-') {
                return prefix + 'flexbox';
            }
        }
    },
    "inline-flex": {
        props: [
            "display"
        ],
        browsers: [
            "ie 10",
            "ff 2",
            "ff 3",
            "ff 4",
            "ff 5",
            "ff 6",
            "ff 7",
            "ff 8",
            "ff 9",
            "ff 10",
            "ff 11",
            "ff 12",
            "ff 13",
            "ff 14",
            "ff 15",
            "ff 16",
            "ff 17",
            "ff 18",
            "ff 19",
            "ff 20",
            "ff 21",
            "ff 3.5",
            "ff 3.6",
            "chrome 4",
            "chrome 5",
            "chrome 6",
            "chrome 7",
            "chrome 8",
            "chrome 9",
            "chrome 10",
            "chrome 11",
            "chrome 12",
            "chrome 13",
            "chrome 14",
            "chrome 15",
            "chrome 16",
            "chrome 17",
            "chrome 18",
            "chrome 19",
            "chrome 20",
            "chrome 21",
            "chrome 22",
            "chrome 23",
            "chrome 24",
            "chrome 25",
            "chrome 26",
            "chrome 27",
            "chrome 28",
            "chrome 29",
            "safari 4",
            "safari 5",
            "safari 6",
            "safari 3.1",
            "safari 3.2",
            "safari 5.1",
            "opera 15",
            "ios 3.2",
            "ios 4",
            "ios 4.1",
            "ios 4.2",
            "ios 4.3",
            "ios 5",
            "ios 5.1",
            "ios 6",
            "ios 6.1",
            "android 3",
            "android 4",
            "android 2.1",
            "android 2.2",
            "android 2.3",
            "android 4.1",
            "android 4.2",
            "bb 7",
            "bb 10"
        ]
    },
    "linear-gradient": {
        props: [
            "background",
            "background-image"
        ],
        browsers: [
            "ff 4",
            "ff 5",
            "ff 6",
            "ff 7",
            "ff 8",
            "ff 9",
            "ff 10",
            "ff 11",
            "ff 12",
            "ff 13",
            "ff 14",
            "ff 15",
            "ff 3.6",
            "chrome 4",
            "chrome 5",
            "chrome 6",
            "chrome 7",
            "chrome 8",
            "chrome 9",
            "chrome 10",
            "chrome 11",
            "chrome 12",
            "chrome 13",
            "chrome 14",
            "chrome 15",
            "chrome 16",
            "chrome 17",
            "chrome 18",
            "chrome 19",
            "chrome 20",
            "chrome 21",
            "chrome 22",
            "chrome 23",
            "chrome 24",
            "chrome 25",
            "safari 4",
            "safari 5",
            "safari 6",
            "safari 5.1",
            "opera 12",
            "opera 11.1",
            "opera 11.5",
            "opera 11.6",
            "ios 3.2",
            "ios 4",
            "ios 4.1",
            "ios 4.2",
            "ios 4.3",
            "ios 5",
            "ios 5.1",
            "ios 6",
            "ios 6.1",
            "android 3",
            "android 4",
            "android 2.1",
            "android 2.2",
            "android 2.3",
            "android 4.1",
            "android 4.2",
            "bb 7",
            "bb 10"
        ],
        replace: function (string, prefix) {
            var regexp;
            regexp = /to\s+(top|bottom)?\s*(left|right)?/ig;
            string = string.replace(regexp, function (_, ver, hor) {
                    var direct;
                    direct = [];
                    if (ver === 'top') {
                        direct.push('bottom');
                    }
                    if (ver === 'bottom') {
                        direct.push('top');
                    }
                    if (hor === 'right') {
                        direct.push('left');
                    }
                    if (hor === 'left') {
                        direct.push('right');
                    }
                    return direct.join(' ');
                });
            regexp = /(repeating-)?(linear|radial)-gradient/gi;
            string = string.replace(regexp, prefix + '$&');
            if (prefix !== '-webkit-') {
                return string;
            }
            regexp = /((repeating-)?(linear|radial)-gradient\()\s*(-?\d+deg)?/ig;
            return string.replace(regexp, function (_0, gradient, _1, _2, deg) {
                    if (deg) {
                        deg = parseInt(deg);
                        deg += 90;
                        if (deg > 360) {
                            deg -= 360;
                        }
                        return gradient + deg + 'deg';
                    } else {
                        return gradient;
                    }
                });
        }
    },
    "radial-gradient": {
        props: [
            "background",
            "background-image"
        ],
        browsers: [
            "ff 4",
            "ff 5",
            "ff 6",
            "ff 7",
            "ff 8",
            "ff 9",
            "ff 10",
            "ff 11",
            "ff 12",
            "ff 13",
            "ff 14",
            "ff 15",
            "ff 3.6",
            "chrome 4",
            "chrome 5",
            "chrome 6",
            "chrome 7",
            "chrome 8",
            "chrome 9",
            "chrome 10",
            "chrome 11",
            "chrome 12",
            "chrome 13",
            "chrome 14",
            "chrome 15",
            "chrome 16",
            "chrome 17",
            "chrome 18",
            "chrome 19",
            "chrome 20",
            "chrome 21",
            "chrome 22",
            "chrome 23",
            "chrome 24",
            "chrome 25",
            "safari 4",
            "safari 5",
            "safari 6",
            "safari 5.1",
            "opera 12",
            "opera 11.1",
            "opera 11.5",
            "opera 11.6",
            "ios 3.2",
            "ios 4",
            "ios 4.1",
            "ios 4.2",
            "ios 4.3",
            "ios 5",
            "ios 5.1",
            "ios 6",
            "ios 6.1",
            "android 3",
            "android 4",
            "android 2.1",
            "android 2.2",
            "android 2.3",
            "android 4.1",
            "android 4.2",
            "bb 7",
            "bb 10"
        ],
        replace: function (string, prefix) {
            var regexp;
            regexp = /to\s+(top|bottom)?\s*(left|right)?/ig;
            string = string.replace(regexp, function (_, ver, hor) {
                    var direct;
                    direct = [];
                    if (ver === 'top') {
                        direct.push('bottom');
                    }
                    if (ver === 'bottom') {
                        direct.push('top');
                    }
                    if (hor === 'right') {
                        direct.push('left');
                    }
                    if (hor === 'left') {
                        direct.push('right');
                    }
                    return direct.join(' ');
                });
            regexp = /(repeating-)?(linear|radial)-gradient/gi;
            string = string.replace(regexp, prefix + '$&');
            if (prefix !== '-webkit-') {
                return string;
            }
            regexp = /((repeating-)?(linear|radial)-gradient\()\s*(-?\d+deg)?/ig;
            return string.replace(regexp, function (_0, gradient, _1, _2, deg) {
                    if (deg) {
                        deg = parseInt(deg);
                        deg += 90;
                        if (deg > 360) {
                            deg -= 360;
                        }
                        return gradient + deg + 'deg';
                    } else {
                        return gradient;
                    }
                });
        }
    },
    "repeating-linear-gradient": {
        props: [
            "background",
            "background-image"
        ],
        browsers: [
            "ff 4",
            "ff 5",
            "ff 6",
            "ff 7",
            "ff 8",
            "ff 9",
            "ff 10",
            "ff 11",
            "ff 12",
            "ff 13",
            "ff 14",
            "ff 15",
            "ff 3.6",
            "chrome 4",
            "chrome 5",
            "chrome 6",
            "chrome 7",
            "chrome 8",
            "chrome 9",
            "chrome 10",
            "chrome 11",
            "chrome 12",
            "chrome 13",
            "chrome 14",
            "chrome 15",
            "chrome 16",
            "chrome 17",
            "chrome 18",
            "chrome 19",
            "chrome 20",
            "chrome 21",
            "chrome 22",
            "chrome 23",
            "chrome 24",
            "chrome 25",
            "safari 4",
            "safari 5",
            "safari 6",
            "safari 5.1",
            "opera 12",
            "opera 11.1",
            "opera 11.5",
            "opera 11.6",
            "ios 3.2",
            "ios 4",
            "ios 4.1",
            "ios 4.2",
            "ios 4.3",
            "ios 5",
            "ios 5.1",
            "ios 6",
            "ios 6.1",
            "android 3",
            "android 4",
            "android 2.1",
            "android 2.2",
            "android 2.3",
            "android 4.1",
            "android 4.2",
            "bb 7",
            "bb 10"
        ],
        replace: function (string, prefix) {
            var regexp;
            regexp = /to\s+(top|bottom)?\s*(left|right)?/ig;
            string = string.replace(regexp, function (_, ver, hor) {
                    var direct;
                    direct = [];
                    if (ver === 'top') {
                        direct.push('bottom');
                    }
                    if (ver === 'bottom') {
                        direct.push('top');
                    }
                    if (hor === 'right') {
                        direct.push('left');
                    }
                    if (hor === 'left') {
                        direct.push('right');
                    }
                    return direct.join(' ');
                });
            regexp = /(repeating-)?(linear|radial)-gradient/gi;
            string = string.replace(regexp, prefix + '$&');
            if (prefix !== '-webkit-') {
                return string;
            }
            regexp = /((repeating-)?(linear|radial)-gradient\()\s*(-?\d+deg)?/ig;
            return string.replace(regexp, function (_0, gradient, _1, _2, deg) {
                    if (deg) {
                        deg = parseInt(deg);
                        deg += 90;
                        if (deg > 360) {
                            deg -= 360;
                        }
                        return gradient + deg + 'deg';
                    } else {
                        return gradient;
                    }
                });
        }
    },
    "repeating-radial-gradient": {
        props: [
            "background",
            "background-image"
        ],
        browsers: [
            "ff 4",
            "ff 5",
            "ff 6",
            "ff 7",
            "ff 8",
            "ff 9",
            "ff 10",
            "ff 11",
            "ff 12",
            "ff 13",
            "ff 14",
            "ff 15",
            "ff 3.6",
            "chrome 4",
            "chrome 5",
            "chrome 6",
            "chrome 7",
            "chrome 8",
            "chrome 9",
            "chrome 10",
            "chrome 11",
            "chrome 12",
            "chrome 13",
            "chrome 14",
            "chrome 15",
            "chrome 16",
            "chrome 17",
            "chrome 18",
            "chrome 19",
            "chrome 20",
            "chrome 21",
            "chrome 22",
            "chrome 23",
            "chrome 24",
            "chrome 25",
            "safari 4",
            "safari 5",
            "safari 6",
            "safari 5.1",
            "opera 12",
            "opera 11.1",
            "opera 11.5",
            "opera 11.6",
            "ios 3.2",
            "ios 4",
            "ios 4.1",
            "ios 4.2",
            "ios 4.3",
            "ios 5",
            "ios 5.1",
            "ios 6",
            "ios 6.1",
            "android 3",
            "android 4",
            "android 2.1",
            "android 2.2",
            "android 2.3",
            "android 4.1",
            "android 4.2",
            "bb 7",
            "bb 10"
        ],
        replace: function (string, prefix) {
            var regexp;
            regexp = /to\s+(top|bottom)?\s*(left|right)?/ig;
            string = string.replace(regexp, function (_, ver, hor) {
                    var direct;
                    direct = [];
                    if (ver === 'top') {
                        direct.push('bottom');
                    }
                    if (ver === 'bottom') {
                        direct.push('top');
                    }
                    if (hor === 'right') {
                        direct.push('left');
                    }
                    if (hor === 'left') {
                        direct.push('right');
                    }
                    return direct.join(' ');
                });
            regexp = /(repeating-)?(linear|radial)-gradient/gi;
            string = string.replace(regexp, prefix + '$&');
            if (prefix !== '-webkit-') {
                return string;
            }
            regexp = /((repeating-)?(linear|radial)-gradient\()\s*(-?\d+deg)?/ig;
            return string.replace(regexp, function (_0, gradient, _1, _2, deg) {
                    if (deg) {
                        deg = parseInt(deg);
                        deg += 90;
                        if (deg > 360) {
                            deg -= 360;
                        }
                        return gradient + deg + 'deg';
                    } else {
                        return gradient;
                    }
                });
        }
    }
};
