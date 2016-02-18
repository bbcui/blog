import {Component} from "angular2/core"
import {Post} from "../../Models/post/post"
import {Router} from "angular2/router"

@Component({
    selector:"posts",
    templateUrl : `./app/Components/posts/posts.component.html`,
})

export class PostsComponent {
    posts = Array<Post>();
    
    constructor(private _router: Router){
        this.posts.push(new Post("ssadfasfsad"));
    }
    
    viewPost(){
        this._router.navigate(['Post',{id:1}])
    }
}