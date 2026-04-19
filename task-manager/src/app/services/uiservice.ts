import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UIService {
  hiddenClass = signal<string>('hidden')
}
