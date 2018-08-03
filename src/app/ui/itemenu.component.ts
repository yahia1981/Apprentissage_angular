import {Component, Input,trigger, state, style, transition, animate,HostBinding, HostListener } from '@angular/core';

/*import { ItemMenus } from './itemmenu';*/
import {ItemMenus} from './itemmenu';

@Component({
selector: 'app-item-menu',
template:`
<div class="trian"></div>
<ul id="menu-item-nav">

<li *ngFor="let itemenu of itemenus">
<a href="#">{{itemenu.intitule}}</a>
</li>
</ul>
`,
styles: [
`:host {box-sizing: border-box;display: none;  position: fixed;left:13%;top: 40px;width: 200px;
    height:80%;
    padding: 20px 10px;
    background: #ccc;
    z-index: 9999;
  
    }`,
 
   ` :host.is-open {
    display: inline-block;
    
  }`,`li{list-style:none;}`
]
})
export  class ItemenuComponent {
    itemenus = ItemMenus;
   

@HostBinding('class.is-open')  isOpen = false; 
public toggle() {
    this.isOpen = !this.isOpen;
           }
           @HostListener('mouseleave',['$event'])
           mouseleave(event: MouseEvent) {
        
             
             try{
             if(!(event.toElement.parentElement.nodeName.toUpperCase() == 'MENU'))
             {
                this.toggle();}
             }catch (e) {this.toggle();}

                /*  if(!(event.toElement.nodeName.toUpperCase().localeCompare("MENU")==0))
   {
       this.toggle();}*/
   }
}
