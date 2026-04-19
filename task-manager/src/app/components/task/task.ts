import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from "@angular/common";
import { proximityColor } from '../../utils/utils';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../model/task.model';
import { UIService } from '../../services/uiservice';

@Component({
  selector: 'app-task',
  imports: [NgClass],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  private taskService = inject(TaskService);
  protected uiService = inject(UIService)

  @Input() id: string = "id";
  @Input() title: string = "Título";
  @Input() due: Date = new Date(); 
  @Input() desc: string = "Descrição";
  @Input() level: "low"| "medium" | "high"= "low";
  @Input() status: "todo" | "doing" | "done" = "todo"
  @Output() private editar = new EventEmitter<TaskModel>();

  protected getProximityColor(date: any) {
  return proximityColor(date);
}

  protected deleteTask(){
    this.taskService.deleteTask(this.id);
  }

  protected editTask(){
    this.editar.emit(this.taskService.getTaskById(this.id));
    this.uiService.hiddenClass.set("")
  }
}
