import { Directive,HostListener } from '@angular/core';


@Directive({
  selector: '[appConfirmaction]'
})
export class ConfirmactionDirective {

   @HostListener('click', ['$event'])
   confirmFirst(event: Event) {
    return window.confirm('Do you want to remove this item?');
   }


}
