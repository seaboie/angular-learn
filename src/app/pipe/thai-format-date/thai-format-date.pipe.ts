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