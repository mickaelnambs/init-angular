import { Component } from "@angular/core";

@Component({
    selector: 'my-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent {


    todos = [
        {
            todoName: "Projet 1",
            todoStatus: true,
            image: "http://placehold.it/150",
            isModif: false
        },
        {
            todoName: "Projet 2",
            todoStatus: false,
            image: "http://placehold.it/150",
            isModif: false
        },
        {
            todoName: "Projet 3",
            todoStatus: true,
            image: "http://placehold.it/150",
            isModif: false
        },
        {
            todoName: "Projet 4",
            todoStatus: false,
            image: "http://placehold.it/150",
            isModif: false
        },
        {
            todoName: "Projet 5",
            todoStatus: true,
            image: "http://placehold.it/150",
            isModif: false
        }
    ];

    onChangeStatus(i: number) {
        this.todos[i].todoStatus = !this.todos[i].todoStatus;
    }
}