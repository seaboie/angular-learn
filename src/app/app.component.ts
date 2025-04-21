import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <div class="p-8 mx-auto">
      <h1 class="text-6xl mt-6 mb-6 font-bold text-center">Todo</h1>

      <div class="flex items-center gap-2 mb-6">
        <input
          #increase
          class="input-nice"
          [(ngModel)]="todoText"
          placeholder="{{ placehoderText }}"
          [attr.placeholder]="isFocused ? '' : placehoderText"
          (focus)="isFocused = true"
          (blur)="isFocused = false"
        />
        <button class="btn-primary" (click)="onSubmit()">
          {{ editingId ? '✅ แก้ไข' : '➕ เพิ่ม' }}
        </button>
      </div>

      <div class="mt-10">
        <h2 class="text-3xl font-semibold mb-4">📋 Todo List</h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
          @for (todo of todos; track todo.id) {
          <li
            class="bg-gray-100 p-4 rounded-xl shadow flex flex-col items-center gap-3"
          >
            <span class="text-lg font-medium">{{ todo.text }}</span>
            <div class="flex gap-2">
              <button class="btn-primary" (click)="startEdit(todo)">✏️</button>
              <button class="btn-primary" (click)="deleteTodo(todo.id)">
                ❌
              </button>
            </div>
          </li>
          }
        </ul>
      </div>
    </div>
  `,
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  placehoderText = 'เพิ่มงาน...';
  isFocused = false;

  todos = [
    { id: 1, text: 'เรียน Angular' },
    { id: 2, text: 'ดื่มน้ำเยอะๆ' },
  ];

  todoText = '';
  editingId: number | null = null;

  // ✅ เพิ่ม หรือ อัปเดต todo
  onSubmit() {
    if (this.editingId) {
      this.todos = this.todos.map((todo) =>
        todo.id === this.editingId ? { ...todo, text: this.todoText } : todo
      );
    } else {
      if (this.todoText === '') return;
      const newTodo = { id: Date.now(), text: this.todoText };
      this.todos = [...this.todos, newTodo];
    }

    this.todoText = '';
    this.editingId = null;
  }

  // ✅ เริ่มแก้ไข
  startEdit(todo: { id: number; text: string }) {
    this.todoText = todo.text;
    this.editingId = todo.id;
  }

  // ✅ ลบ
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    // ถ้าลบตัวที่กำลังแก้ ก็ reset
    if (this.editingId === id) {
      this.todoText = '';
      this.editingId = null;
    }
  }

  clearPlaceholder(inputElement: HTMLInputElement) {
    inputElement.placeholder = '';
  }

  restorePlaceholder(inputElement: HTMLInputElement) {
    if (!inputElement.value) {
      inputElement.placeholder = this.placehoderText;
    }
  }
}
