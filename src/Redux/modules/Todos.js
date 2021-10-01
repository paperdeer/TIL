const ADD_TODO = 'todos/ADD_TODO';
const TOGLE_TODO = 'todos/TOGLE_TODO';

let nextId = 1;
export const addTodo = text => ({
    type : ADD_TODO,
    todo: {
        id : nextId++,
        text
    }
});

export const toggleTodo = id => ({
    tpye : TOGLE_TODO,
    id
});

const initialstate = [

]

export default function todos(state = initialstate,action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGLE_TODO:
            return state.map(
                todo => todo.id === action.id ? {...todo,done: !todo.done} : todo
            );
        default:
            return state;
    }
}