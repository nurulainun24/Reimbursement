import {defineStore} from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({ data: [] }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        addTodo(todo){
            this.data.push(todo);
        },
        deleteTodo(todo){
            const newTodo = this.data.filter(v => v.content !== todo.content);
            this.data = newTodo;
        }
    },
})