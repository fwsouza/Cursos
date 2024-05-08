import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal("Fernando ");
  public lastName = signal("Souza");

  public fullName = computed( () => {
    return this.firstName() + this.lastName();
  })



  public array = signal([1]);

  constructor() {

  }

  public updateName() {
    this.firstName.set('João ');
  }

  public updateArray() {
    this.array.update( ( oldValues ) => {
        console.log(oldValues)
        return [...oldValues, oldValues.length + 1]
    })
  }
}
