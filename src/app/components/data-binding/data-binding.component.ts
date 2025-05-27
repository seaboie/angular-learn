import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name: string = 'FEDLearning';
  topic: string = 'Data Binding';
  image: string = 'https://raw.githubusercontent.com/seaboie/images/main/images/logo/logoTransparent.png';

  random: string = '';

  onSave(): void {
    alert("Data Saved Successfully.");
  }

  onChangeDropdown(): void {
    alert('Country has changed ......');
  }
}
