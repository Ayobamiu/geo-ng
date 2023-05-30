"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLgaSubAreas = exports.getLGAs = exports.getNigeriaStates = void 0;
var nigeria_states_1 = require("./functions/nigeria-states");
var getNigeriaStates = function () {
    return nigeria_states_1.areas.map(function (_a) {
        var subs = _a.subs, state = __rest(_a, ["subs"]);
        return state;
    });
};
exports.getNigeriaStates = getNigeriaStates;
var getLGAs = function (stateCode) {
    var state = nigeria_states_1.areas.filter(function (state) { return state.code === stateCode; });
    return state.length > 0 ? state[0].lgas : [];
};
exports.getLGAs = getLGAs;
var getLgaSubAreas = function (stateCode, lga) {
    var _a;
    var state = nigeria_states_1.areas.filter(function (state) { return state.code === stateCode; });
    var subAreas = state.length > 0 ? (_a = state[0]) === null || _a === void 0 ? void 0 : _a.subs[lga] : [];
    return subAreas;
};
exports.getLgaSubAreas = getLgaSubAreas;
