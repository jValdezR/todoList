import './styles.css';
import {Todo,TodoList} from './class/index';
import {crearTodoHtml} from './js/componentes'

export const todoList = new TodoList();

 //El primer argumento es el argumento que se regresa, por lo que se reduce la instruccion de callback
todoList.todos.forEach(crearTodoHtml);

console.log(todoList.todos);