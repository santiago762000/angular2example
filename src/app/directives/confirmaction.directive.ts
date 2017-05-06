import { Directive,HostListener,Input } from '@angular/core';

@Directive({
  selector: `[appConfirmaction]`
})
export class ConfirmactionDirective {
  @Input() appConfirmaction = () => {};
  @Input() confirmMessage = 'Are you sure you want to do this?';

  @HostListener('click', ['$event'])
  confirmFirst() {
    const confirmed = window.confirm(this.confirmMessage);

    if(confirmed) {
      this.appConfirmaction();
    }
  }
}
