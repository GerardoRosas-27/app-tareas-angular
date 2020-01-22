export class Notes {
    constructor(_id = '', title = '', content ='', author ='', date =''){
      this._id = _id;
      this.title = title;
      this.content = content;
      this.author = author;
      this.date = date;
    }

    _id: string;
    title: string;
    content: string;
    author: string;
    date:string;

}
