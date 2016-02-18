System.register(["angular2/core", 'angular2/platform/browser', '../../Models/post/post', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, post_1, router_1;
    var PostRenderer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PostRenderer = (function () {
                function PostRenderer(_dom, _Router, _routerParam) {
                    this._dom = _dom;
                    this._Router = _Router;
                    this._routerParam = _routerParam;
                    this.post = new post_1.Post('# Marked in browser\n\nRendered by **marked**.');
                    this.post.id = this._routerParam.get('id');
                }
                PostRenderer.prototype.ngOnInit = function () {
                    this.content = marked(this.post.content);
                    this._dom.query("#content").innerHTML = this.content;
                };
                PostRenderer = __decorate([
                    core_1.Component({
                        selector: "post-renderer",
                        templateUrl: "./app/Components/postRenderer/post.renderer.html",
                        providers: [browser_1.BrowserDomAdapter],
                    }), 
                    __metadata('design:paramtypes', [browser_1.BrowserDomAdapter, router_1.Router, router_1.RouteParams])
                ], PostRenderer);
                return PostRenderer;
            })();
            exports_1("PostRenderer", PostRenderer);
        }
    }
});
//# sourceMappingURL=post.renderer.js.map