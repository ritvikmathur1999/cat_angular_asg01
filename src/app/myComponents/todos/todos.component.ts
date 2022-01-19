import { Component, Input, OnInit } from '@angular/core';
import { json } from 'node_modules/@angular-devkit/core/src';
import Todo from "../../todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  localItem:string
  todos:Todo[];
  @Input() todo:Todo; 

  constructor() {
    this.localItem = localStorage.getItem("todos");

    if(this.localItem==null)
    {
      this.todos=[]
    }
    else
    {
      this.todos=JSON.parse(this.localItem)
    }
 
   }
 
   deleteTodo(todo:Todo)
   {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index,1)
      localStorage.setItem("todos",JSON.stringify(this.todos));
   }

   addTodo(todo:Todo)
   {
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos));
   }

  ngOnInit(): void {
  }

  onClick(todo:Todo)
  {
    this.todos=[];
  }

}
