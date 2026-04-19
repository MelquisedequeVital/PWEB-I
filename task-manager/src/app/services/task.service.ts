import { Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TaskModel } from '../model/task.model';
import { uid, addDaysISO } from '../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasksSignal = signal<TaskModel[]>([]);
  public readonly tasks = this.tasksSignal.asReadonly();

  constructor(private storage: LocalStorageService) {
    this.tasksSignal.set(this.storage.getItem() || [
      { id: uid(), title: 'Ler capítulo 3 de Algoritmos', due: addDaysISO(2), level: 'high', desc: 'Priorizar exercícios 3.1-3.5', status: 'todo' },
      { id: uid(), title: 'Resolver lista de TS', due: addDaysISO(5), level: 'medium', desc: 'Atenção a generics', status: 'doing' },
      { id: uid(), title: 'Revisão rápida: HTML/CSS', due: addDaysISO(10), level: 'low', desc: '30 minutos', status: 'done' }]);
  }


  private saveTasks() {
    this.storage.setItem(this.tasksSignal())
  }


  addTask(task: Omit<TaskModel, "id">) {
    const newTask = { ...task, id: this.uid() };
    this.tasksSignal.update(allTasks => [...allTasks, newTask]);
    this.saveTasks();
  }

  deleteTask(id: string) {
    this.tasksSignal.update(allTasks => allTasks.filter(t => t.id !== id));
    this.saveTasks();
  }

  updateTask(newTask: TaskModel, isMoving: boolean = false) {
    this.tasksSignal.update(tasks => {
      if (isMoving) {
        return [...tasks.filter(t => t.id !== newTask.id), newTask];
      } else {
        return tasks.map(t => t.id === newTask.id ? newTask : t);
      }
    });
    this.saveTasks()
  }

  getTaskById(id: string) {
    let taskFound = this.tasksSignal().find(task => task.id == id);
    return taskFound;
  }


  private uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7) }

  private addDaysISO(n: number) {
    const d = new Date()
    d.setDate(d.getDate() + n)
    return d.toISOString().slice(0, 10)
  }
}
