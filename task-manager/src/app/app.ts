import { Component, signal , inject, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalFormComponent } from './components/modal-form/modal-form';
import { MainComponent } from "./components/main/main";
import { UIService } from './services/uiservice';
import { TaskModel } from './model/task.model';

@Component({
  selector: 'app-root',
  imports: [ModalFormComponent, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');

  protected uIService = inject(UIService);

  protected taskEditApp:TaskModel | undefined;

  @ViewChild(ModalFormComponent) modalComponent!: ModalFormComponent;

  openModal(){
    this.taskEditApp = undefined;
    this.modalComponent.openModal()
  }

  editModal(taskEdit: TaskModel){
    this.taskEditApp = taskEdit;
  }
}
