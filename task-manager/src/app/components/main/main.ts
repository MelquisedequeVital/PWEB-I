import { Component, inject, Signal, WritableSignal, signal, computed, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../model/task.model';
import { TaskComponent } from "../task/task";

@Component({
  selector: 'app-main',
  imports: [TaskComponent],
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

  editTaskMain(task: TaskModel){
    this.editarTarefa.emit(task);
  }

}
