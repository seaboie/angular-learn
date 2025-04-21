import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = signal<number>(0);
  countComputed = computed(() => this.count() * 3);
  isShowCount = signal(false);

  conditionCount = computed(() => {
    if (this.isShowCount()) {
      return `The count Computed is ${this.countComputed()}`
    }else{
      return `Nothings to see here`;
    }
  });

  handlerClicked() {
    this.count.update((value) => value + 1);
  }
  handleIsShow() {
    this.isShowCount.update((value) => value = !value);
  }
}
