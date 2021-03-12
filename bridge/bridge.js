/* stateパターンとやっていることが同じな気がする */
/* stateは状態に注目し、bridgeは昨日に注目? */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* ベースとなる機能(通話) */
var callImplementation = /** @class */ (function () {
    function callImplementation() {
    }
    callImplementation.prototype.call = function () { };
    return callImplementation;
}());
/* ベース機能を発展させた機能 */
var callWithVideoImplementation = /** @class */ (function (_super) {
    __extends(callWithVideoImplementation, _super);
    function callWithVideoImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    callWithVideoImplementation.prototype.call = function () {
        console.log("ビデオを利用して通話を行う");
    };
    return callWithVideoImplementation;
}(callImplementation));
var callWithRecordingImplementation = /** @class */ (function (_super) {
    __extends(callWithRecordingImplementation, _super);
    function callWithRecordingImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    callWithRecordingImplementation.prototype.call = function () {
        console.log("通話を録音しながら行う");
    };
    return callWithRecordingImplementation;
}(callImplementation));
var Phone = /** @class */ (function () {
    function Phone(callImplementation) {
        this.callImplementation = callImplementation;
    }
    Phone.prototype.call = function () {
        this.callImplementation.call();
    };
    return Phone;
}());
var phone1 = new Phone(new callWithVideoImplementation());
phone1.call();
var phone2 = new Phone(new callWithRecordingImplementation());
phone2.call();
