import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name: string = 'FEDLearning';
  topic: string = 'Data Binding';
  image: string = 'https://raw.githubusercontent.com/seaboie/images/main/images/logo/logoTransparent.png';

  onSave(): void {
    alert("Data Saved Successfully.");
  }

  onChangeDropdown(): void {
    alert('Country has changed ......');
  }
}
