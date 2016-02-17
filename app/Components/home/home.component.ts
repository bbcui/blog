import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from '../about/about.component'
import {PostsComponent} from '../posts/posts.component'

@Component({
    selector: 'home',
    templateUrl: 'app/Components/home/home.Component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/', name:'Posts', component: PostsComponent, useAsDefault: true},
    {path:'/about', name:'About', component: AboutComponent}
])

export class HomeComponent { 
    
}