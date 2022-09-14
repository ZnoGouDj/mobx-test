import {
    makeAutoObservable,
    observable
} from 'mobx';

class Todo {
    todos = [{
            id: 1,
            title: 'Shopping',
            completed: false,
        },
        {
            id: 2,
            title: 'Lifting',
            completed: false,
        },
        {
            id: 3,
            title: 'Programming',
            completed: false,
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    completeTodo(id) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ?
            {
                ...todo,
                completed: !todo.completed,
            } :
            todo,
        );
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => {
                this.todos = [...this.todos, ...json];
            });
    }

    postTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log('post (create) ', json));
    }

    putTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
                method: 'PUT',
                body: JSON.stringify({
                    id: 1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log('put (update) ', json));
    }

    patchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
                method: 'PATCH',
                body: JSON.stringify({
                    title: 'foo',
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log('patch (edit)', json));
    }

    deleteTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'DELETE',
        });
    }
}

export default new Todo();