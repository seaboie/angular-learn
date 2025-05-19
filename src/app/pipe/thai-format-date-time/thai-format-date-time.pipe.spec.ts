// thai-format-date-time.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thaiDateTime',
  standalone: true
})
export class ThaiDateTimePipe implements PipeTransform {
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