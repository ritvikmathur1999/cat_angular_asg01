import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Todo from 'src/app/todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title:string
  desc:string

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo={
      title:this.title,
      desc:this.desc,
      active:true

    }
    this.todoAdd.emit(todo);
  }

}
