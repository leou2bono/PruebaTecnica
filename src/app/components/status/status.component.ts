import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StatusColor } from './status-color';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
})
export class StatusComponent {
  @Input() statusTag!: string;
  @Input() statusColor: StatusColor = StatusColor.info;
}
