import { AsyncPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, NgSwitchCase, NgSwitch, NgSwitchDefault],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
public isTrue = true;
public condition = 'A';

public loadingData$: Observable<string[]> = of([
  'item 1',
  'item 2',
  'item 3'
]).pipe(delay(3000));

public trackByFn(index: number){
  return index;
}
}
