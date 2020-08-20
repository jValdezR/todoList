export class Todo{

constructor(task){
this.tarea = task;
this.id = new Date().getTime();
this.completado = false;
this.creado = new Date();
}
}