# Tutorial


## 🛠️ 🛠️ 🛠️  Custom Pipe in Angular  

### Command line to create `pipe` file  
```bash
ng g p pipe/thai-date
```  

> thai-format-date.pipe.ts

```ts
// thai-format-date.pipe.ts (standalone version)
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thaiFormatDate',
  standalone: true // Mark as standalone
})
export class ThaiFormatDatePipe implements PipeTransform {
  private thaiMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
    'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
    'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  private shortThaiMonths = [
    'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.',
    'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.',
    'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
  ];

  transform(value: Date | string | number, format: string = 'short'): string {
    if (!value) return '';
    
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear() + 543; // BE year
    
    switch(format) {
      case 'long':
        return `${day} ${this.thaiMonths[month]} ${year}`;
      case 'short':
        return `${day} ${this.shortThaiMonths[month]} ${year}`;
      case 'full':
        const thaiDay = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'][date.getDay()];
        return `วัน${thaiDay}ที่ ${day} ${this.thaiMonths[month]} พ.ศ. ${year}`;
      default:
        return `${day}/${month + 1}/${year}`;
    }
  }
}
```  

> thai-fomat-date-time.pipe.ts  

```ts
// thai-format-date-time.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thaiFormatDateTime',
  standalone: true
})
export class ThaiFormatDateTimePipe implements PipeTransform {
  private thaiMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
    'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
    'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  private shortThaiMonths = [
    'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.',
    'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.',
    'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
  ];

  private thaiDays = [
    'อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 
    'พฤหัสบดี', 'ศุกร์', 'เสาร์'
  ];

  transform(
    value: Date | string | number, 
    format: string = 'short',
    showTime: boolean = false,
    timeFormat: string = 'HH:mm'
  ): string {
    if (!value) return '';
    
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear() + 543; // BE year
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Format time portion
    const formattedTime = this.formatTime(hours, minutes, timeFormat);
    
    // Format date portion
    let formattedDate = '';
    switch(format) {
      case 'long':
        formattedDate = `${day} ${this.thaiMonths[month]} ${year}`;
        break;
      case 'short':
        formattedDate = `${day} ${this.shortThaiMonths[month]} ${year}`;
        break;
      case 'full':
        const thaiDay = this.thaiDays[date.getDay()];
        formattedDate = `วัน${thaiDay}ที่ ${day} ${this.thaiMonths[month]} พ.ศ. ${year}`;
        break;
      default:
        formattedDate = `${day}/${month + 1}/${year}`;
    }
    
    // Combine date and time if requested
    return showTime 
      ? `${formattedDate} ${formattedTime} น.` // "น." stands for "นาฬิกา" (o'clock)
      : formattedDate;
  }

  private formatTime(hours: number, minutes: number, format: string): string {
    const pad = (num: number) => num.toString().padStart(2, '0');
    
    switch(format) {
      case 'HH:mm':
        return `${pad(hours)}:${pad(minutes)}`;
      case 'H:mm':
        return `${hours}:${pad(minutes)}`;
      case 'h:mm a':
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const twelveHour = hours % 12 || 12;
        return `${twelveHour}:${pad(minutes)} ${ampm}`;
      default:
        return `${pad(hours)}:${pad(minutes)}`;
    }
  }
}
```  

## Features : ThaiFormatDateTime  

1. **Multiple Date Formats**:
   - `short`: 24 ก.พ. 2567
   - `long`: 24 กุมภาพันธ์ 2567
   - `full`: วันเสาร์ที่ 24 กุมภาพันธ์ พ.ศ. 2567

2. **Time Formatting Options**:
   - 24-hour format (default): 14:30 น.
   - 12-hour format: 2:30 PM น.
   - Customizable time formats

3. **Flexible Usage**:
   - Show/hide time with boolean parameter
   - Customize time format separately

This pipe provides comprehensive Thai date and time formatting while maintaining clean usage in your templates. The "น." suffix is commonly used in Thai to indicate time.

> app.component.ts

```ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThaiDatePipe } from './pipe/thai-date.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ThaiDatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  today = new Date();

}
```  

---  

> app.component.html

```html
<div class="p-4">

    <!-- Custom Pipe -->
    <h1>{{ today | thaiFormatDate }}</h1>
    <!-- Output: "24 ก.พ. 2567" -->

    <p>{{ today | thaiFormatDate: 'short' }}</p>
    <!-- Output: "24 ก.พ. 2567" -->

    <h1>{{ today | thaiFormatDate: 'fullDate' }}</h1>
    <!-- 19/5/2568 -->

    <p>{{ today | thaiFormatDate: 'long' }}</p>
    <!-- Output: "24 กุมภาพันธ์ 2567" -->

    <p>{{ today | thaiFormatDate: 'full' }}</p>
    <!-- Output: "วันเสาร์ที่ 24 กุมภาพันธ์ พ.ศ. 2567" -->

    <p>{{ today | date: 'H:mm:s a' }}</p>

    <hr>

    <!-- ThaiFormatDateTime -->
    <p>Short : {{ today | thaiFormatDateTime }}</p>
    <!-- Output: "24 ก.พ. 2567" -->

    <p>Long & Time: {{ today | thaiFormatDateTime:'long':true }}</p>
    <!-- Output: "24 กุมภาพันธ์ 2567 14:30 น." -->

    <p>Full date with 12-hour time: {{ today | thaiFormatDateTime:'full':true:'h:mm a' }}</p>
    <!-- Output: "วันเสาร์ที่ 24 กุมภาพันธ์ พ.ศ. 2567 2:30 PM น." -->

    <p>Custom format: {{ today | thaiFormatDateTime:'short':true:'H:mm' }}</p>
    <!-- Output: "24 ก.พ. 2567 14:30 น." -->

</div>
```  

