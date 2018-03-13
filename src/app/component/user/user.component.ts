import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean;

  constructor(private dataService:DataService) { 
  }

  ngOnInit() {
    this.name = "Steve Smith";
    this.age = 30;
    this.email = 'stevesmith@example.com';
    this.address = {
      street: '50 Main St',
      city:'Boston',
      state: 'MA'
    };
    this.hobbies =['write code', 'listen to music', 'make money'];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });

    this.isEdit = false;
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  addHobby(value){
    this.hobbies.unshift(value);
    console.log(value);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if (this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
  onClick(){
    this.name = "Roger Dangerfield";
    this.hobbies.push("New Hobby");
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
