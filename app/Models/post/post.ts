export class Post{
    public url:string;
    public title:string;
    public date:Date;
    public id:string;
    
    constructor(public content){
        this.content = content;
    }
}