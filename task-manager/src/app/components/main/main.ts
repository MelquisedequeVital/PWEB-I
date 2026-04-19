import { Component, inject, Signal, WritableSignal, signal, computed, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../model/task.model';
import { TaskComponent } from "../task/task";
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  imports: [TaskComponent, DragDropModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainComponent {
  private taskService = inject(TaskService);

  protected tasks = this.taskService.tasks;

  @Output() protected editarTarefa = new EventEmitter<TaskModel>();

  protected todoTasks = computed(() => this.tasks().filter(t => t.status === 'todo'));
  protected doingTasks = computed(() => this.tasks().filter(t => t.status === 'doing'));
  protected doneTasks = computed(() => this.tasks().filter(t => t.status === 'done'));

  editTaskMain(task: TaskModel) {
    this.editarTarefa.emit(task);
  }

  protected onDrop(event: CdkDragDrop<TaskModel[]>) {
    const taskMoved = event.item.data;
    const newStatus = event.container.id as 'todo' | 'doing' | 'done';
    const newTaskStatus = { ...taskMoved, status: newStatus }
    const isMoving = true;
    if (event.previousContainer !== event.container) {
      this.taskService.updateTask(newTaskStatus, isMoving);
    } 

  }
}
