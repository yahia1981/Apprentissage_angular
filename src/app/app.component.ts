import { Component, trigger, state, style, transition, animate } from '@angular/core';
import {MenuNiv1} from './ui/itemmenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-101%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  menuniv1s=MenuNiv1;
  menuState: String = 'out';
 
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
