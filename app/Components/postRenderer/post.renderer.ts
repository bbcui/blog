import {Component,OnInit} from "angular2/core"
import {BrowserDomAdapter} from 'angular2/platform/browser'
import {Post} from '../../Models/post/post'
import {RouteParams,Router} from 'angular2/router'

@Component({
    selector:"post-renderer",
    templateUrl : `./app/Components/postRenderer/post.renderer.html`,
    providers:[BrowserDomAdapter],
})

export class PostRenderer implements OnInit{
    content:string;
    post:Post;
    constructor(private _dom: BrowserDomAdapter, private _Router: Router, private _routerParam : RouteParams){
        this.post = new Post('# Marked in browser\n\nRendered by **marked**.');
        this.post.id = this._routerParam.get('id');
    } 
    
    public ngOnInit(){
        this.content = marked(this.post.content);
        this._dom.query("#content").innerHTML = this.content;
    }
    
}