"use strict";
exports.__esModule = true;
exports.Calculo = void 0;
var Calculo = /** @class */ (function () {
    function Calculo(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    Calculo.prototype.suma = function () {
        return this.n1 + this.n2;
    };
    Calculo.prototype.resta = function () {
        if (this.n1 > this.n2) {
            return this.n1 - this.n2;
        }
        else {
            return this.n2 - this.n1;
        }
    };
    Calculo.prototype.multiplica = function () {
        return this.n1 * this.n2;
    };
    Calculo.prototype.divide = function () {
        if (this.n1 > this.n2) {
            return this.n1 / this.n2;
        }
        else {
            return this.n2 / this.n1;
        }
    };
    return Calculo;
}());
exports.Calculo = Calculo;
