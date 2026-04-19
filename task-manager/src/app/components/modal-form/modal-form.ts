import { Component, inject, Input, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskModel } from '../../model/task.model';
import { UIService } from '../../services/uiservice';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-modal-form',
  imports: [FormsModule, NgClass],
  templateUrl: './modal-form.html',
  styleUrl: './modal-form.css',
})
export class ModalFormComponent {
  protected taskService = inject(TaskService);
  protected uIService = inject(UIService);
  @Input() public taskToEdit: TaskModel | undefined;
  @ViewChild('modal') form!: NgForm;


  onSubmit(modal: NgForm) {
    let task: TaskModel = modal.value;
    if (this.taskToEdit === undefined) {
      task.status = "todo";
      this.taskService.addTask(task);
      this.closeModal()
    } else {
      task.id = this.taskToEdit.id;
      task.status = this.taskToEdit.status;
      this.taskService.updateTask(task);
      this.closeModal()
    }

  }

  closeModal() {
    this.uIService.hiddenClass.set("hidden");
  }

  openModal() {
    this.form?.resetForm()
    this.uIService.hiddenClass.set("");
  }

}
