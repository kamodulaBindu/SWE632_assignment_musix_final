

import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">FAQ</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
    <h5>Which offers are available?</h5>
      <p>If you haven’t already tried Premium, you can get 3 months of the Premium Individual plan for free.

      If you’ve ended your Premium subscription on or before March 15th, 2022, you can purchase 1 month of the Premium Individual plan and get the next 2 months on us.
      
      The Premium Family and Duo plans aren’t included in this offer.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({selector: 'app-footer', templateUrl: './footer.component.html', styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}

