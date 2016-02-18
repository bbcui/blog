import {Component,OnInit} from "angular2/core"
import {BrowserDomAdapter} from 'angular2/platform/browser'
import {Post} from '../../Models/post/post'
import {RouteParams,Router} from 'angular2/router'
import {Http,HTTP_PROVIDERS} from "angular2/http"
import 'rxjs/Rx';

@Component({
    selector:"post-renderer",
    templateUrl : `./app/Components/postRenderer/post.renderer.html`,
    providers:[BrowserDomAdapter,Http,HTTP_PROVIDERS],
})

export class PostRenderer implements OnInit{
    content:string;
    post:Post;
    constructor(private _dom: BrowserDomAdapter, private _Router: Router, private _routerParam : RouteParams, public _http:Http){
        this.post = new Post('# Marked in browser\n\nRendered by **marked**.');
        this.post.id = this._routerParam.get('id');
    } 
    
    public ngOnInit(){
        var content = this._http.get("http://localhost:3000/_posts/1.md").map(res => {
            res.text()).subscribe(
                data => function(){
                this.content = data;
            }, err => console.log(err), () => console.log('Random Quote Complete')
        );
        console.log(this.content);
       // this.content = marked(this.content)
       // this._dom.query("#content").innerHTML = this.content;
    }
    
}