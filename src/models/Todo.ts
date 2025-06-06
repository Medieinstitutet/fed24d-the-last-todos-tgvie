class Todo {
    id: number;
    text: string;
    done: boolean;

    constructor(id: number, text: string, done = false) {
        this.id = id;
        this.text = text;
        this.done = done;
    }

    toggle() {
        this.done = !this.done;
    }
}

export default Todo;
