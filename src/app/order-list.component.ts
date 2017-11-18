import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import Gun from 'gun/gun';

import { GunDb } from './gun.service';
import { on$ } from './gun.helper';

import { Component } from '@angular/core';

@Component({
    templateUrl: './app.order.html'
})

export class OrderListComponent implements OnInit {
  newTodo = '';

  todos = this.db.gun.get('todos');
  todos$: Observable<string[]> = on$(this.todos);

  todosSub: Subscription;

  constructor(private db: GunDb) { }

  ngOnInit() { }

  add() {
    if (this.newTodo) {
      this.todos.get(Gun.text.random()).put(this.newTodo);
      this.newTodo = '';
    }
  }

  delete(key: string) {
    this.todos.get(key).put(null);
  }

  sub() {
    this.todosSub = this.todos$.subscribe(v => console.log(v));
  }

  unsub() {
    this.todosSub.unsubscribe();
  }
