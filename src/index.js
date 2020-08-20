import './styles.css';
import {Todo,TodoList} from './class/index';
import {crearTodoHtml} from './js/componentes'

export const todoList = new TodoList();

let tarea = new Todo('AHHHHHHHHHHH');
todoList.nuevoTodo(tarea);

// tarea.completado = true;
console.log(todoList);

crearTodoHtml(tarea);