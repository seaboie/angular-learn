# Tutorial

## On Youtube

[Angular 18 Full Course (part 20) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=rvIEW5pW7YQ&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=9)  


## 🛠️ 🛠️ 🛠️  Custom Pipe  


# Custom Pipes in Angular

A custom pipe in Angular is a class you create to transform input values into output values for display in a template. Pipes are useful for formatting or transforming data without changing the original value.

## How to Create a Custom Pipe

1. Create a class and decorate it with `@Pipe`
2. Implement the `PipeTransform` interface
3. Define the transformation in the `transform` method
4. Register the pipe in a module (or standalone component)

## Example: Reverse String Pipe

Here's a simple example of a custom pipe that reverses a string:

```typescript
// reverse.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse' // This is the name you'll use in templates
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('');
  }
}
```

## Example: Filter Array Pipe

Here's a more complex example that filters an array based on a search term:

```typescript
// filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}
```

## Using Custom Pipes in Templates

After registering the pipe in your module (or marking it as standalone), you can use it in templates:

```html
<!-- Using the reverse pipe -->
<p>{{ 'Hello World' | reverse }}</p> 
<!-- Output: "dlroW olleH" -->

<!-- Using the filter pipe -->
<input type="text" [(ngModel)]="searchTerm" placeholder="Search...">
<ul>
  <li *ngFor="let item of items | filter: searchTerm">
    {{ item.name }}
  </li>
</ul>
```

## Registering the Pipe

For standalone components:
```typescript
@Component({
  standalone: true,
  imports: [ReversePipe, FilterPipe],
  // ...
})
```

For NgModule:
```typescript
@NgModule({
  declarations: [ReversePipe, FilterPipe],
  // ...
})
```

## Pure vs Impure Pipes

By default, pipes are "pure" meaning Angular executes the pipe only when it detects a pure change to the input value. For arrays/objects that may change without reference change, you can make it impure:

```typescript
@Pipe({
  name: 'filter',
  pure: false
})
```

Be cautious with impure pipes as they run on every change detection cycle.

Custom pipes are powerful for encapsulating data transformation logic in your Angular applications.  

---  

# Custom Pipe for Thai Date Format with Buddhist Year

Here's a custom pipe that formats dates in the Thai style, which uses the Buddhist Era (BE) calendar (Gregorian year + 543).

## Thai Date Format Pipe

```typescript
// thai-date.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'thaiDate'
})
export class ThaiDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: Date | string | number, format: string = 'mediumDate'): string {
    if (!value) return '';
    
    // First format the date using Angular's built-in DatePipe
    const formattedDate = this.datePipe.transform(value, format);
    
    // Convert to Buddhist year (BE) by adding 543 to the year
    if (formattedDate) {
      return formattedDate.replace(/\d{4}/, (year) => {
        return (parseInt(year) + 543).toString();
      });
    }
    
    return '';
  }
}
```

## Registering the Pipe

You'll need to:

1. Add it to your module's declarations (or mark as standalone)
2. Provide the DatePipe as it's a dependency

```typescript
@NgModule({
  declarations: [ThaiDatePipe],
  providers: [DatePipe]
  // ...
})
```

Or for standalone components:
```typescript
@Component({
  standalone: true,
  imports: [ThaiDatePipe, DatePipe],
  // ...
})
```

## Usage Examples

```html
<!-- Default format (mediumDate) -->
<p>{{ today | thaiDate }}</p> 
<!-- Output: "24 ก.พ. 2567" (for Feb 24, 2024) -->

<!-- Custom format -->
<p>{{ today | thaiDate:'fullDate' }}</p>
<!-- Output: "วันเสาร์ที่ 24 กุมภาพันธ์ 2567" -->

<p>{{ today | thaiDate:'yyyy-MM-dd' }}</p>
<!-- Output: "2567-02-24" -->

<p>{{ today | thaiDate:'d MMM yyyy' }}</p>
<!-- Output: "24 ก.พ. 2567" -->
```

## Alternative Version with Thai Month Names

For a more complete Thai format with Thai month names:

```typescript
// thai-date.pipe.ts (alternative version)
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thaiDate'
})
export class ThaiDatePipe implements PipeTransform {
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

## Usage of Alternative Version

```html
<p>{{ today | thaiDate:'long' }}</p>
<!-- Output: "24 กุมภาพันธ์ 2567" -->

<p>{{ today | thaiDate:'short' }}</p>
<!-- Output: "24 ก.พ. 2567" -->

<p>{{ today | thaiDate:'full' }}</p>
<!-- Output: "วันเสาร์ที่ 24 กุมภาพันธ์ พ.ศ. 2567" -->
```

This pipe gives you flexible options for displaying dates in the Thai Buddhist calendar format, which is commonly used in Thailand.
