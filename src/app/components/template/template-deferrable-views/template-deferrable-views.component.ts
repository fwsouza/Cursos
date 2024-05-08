import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

}
