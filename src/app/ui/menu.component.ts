import { Component, trigger, state, transition, style, animate,Input,  HostListener, ElementRef} from '@angular/core';
import { ItemenuComponent } from './itemenu.component';




@Component({
    selector: 'Menu',
    template:  `
    <li>{{menuniv1.intitule}}  </li>

    `,
    styleUrls: ['./menu.component.css']
})

export class MenuComponent 
 {
  @Input() menuniv1 ;
  @Input() sousmenu: ItemenuComponent;
  i: number = 0;

  @HostListener('mouseenter',['$event'])
  mouseenter(event: MouseEvent) {
    event.stopPropagation();
 if (this.i == 0)
 {
   this.i= +1;
   this.sousmenu.toggle();
   
 }
 else
 {
  
    if (!(event.fromElement.nodeName.toUpperCase().localeCompare('APP-ITEM-MENU')==0)) {
    this.sousmenu.toggle();}
  

 }
  }

  @HostListener('mouseleave',['$event'])
  mouseleave(event: MouseEvent) {
 
if (!(event.toElement.nodeName.toUpperCase().localeCompare('APP-ITEM-MENU')==0)) {
  this.sousmenu.toggle();}
}

}
