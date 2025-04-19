import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../injection/calculator.service';

@Component({
  selector: 'app-receipt',
  imports: [],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css'
})
export class ReceiptComponent {
  calculator = inject(CalculatorService);
  totalCost = this.calculator.add(50, 25);
}
