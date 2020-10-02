"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TokenInterceptor = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var TokenInterceptor = /** @class */ (function (_super) {
    __extends(TokenInterceptor, _super);
    function TokenInterceptor(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        return _this;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + token
                }
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        return next.handle(request).pipe(map(function (event) {
            if (event instanceof http_1.HttpResponse) {
                console.log('event--->>>', event);
            }
            return event;
        }), catchError(function (error) {
            console.log(error);
            if (error.status === 401) {
                _this.router.navigate(['login']);
            }
            if (error.status === 400) {
                alert(error.error);
            }
            return rxjs_1.throwError(error);
        }));
    };
    TokenInterceptor = __decorate([
        core_1.Injectable()
    ], TokenInterceptor);
    return TokenInterceptor;
}(HttpInterceptor));
exports.TokenInterceptor = TokenInterceptor;
