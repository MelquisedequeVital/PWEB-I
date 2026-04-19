import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly STORAGE_KEY = 'app_task_manager_tasks_v1';

  // Set a value in local storage
  setItem(value: any): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
  }

  // Get a value from local storage
  getItem(): any {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY)!);
  }

  // Remove a value from local storage
  removeItem(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // Clear all items from local storage
  clear(): void {
    localStorage.clear();
  }
}
