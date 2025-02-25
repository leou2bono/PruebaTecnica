import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatusColor } from './status-color';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
})
export class StatusComponent {
  @Input() statusText!: string;
  @Input() statusColor: StatusColor = StatusColor.info;

  getStatusColor(): string {
    var precio = Number(this.statusText);
    if (precio > 0 && precio < 100) {
      return 'status-color-success';
    } else if (precio >= 101 && precio < 500) {
      return 'status-color-warning';
    } else if (precio >= 501) {
      return 'status-color-error';
    } else {
      return 'status-color-info'; // Default color for invalid prices
    }
  }
}
