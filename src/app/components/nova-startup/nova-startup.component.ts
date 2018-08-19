import {Component, ElementRef, ViewChild} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {CustomerService} from '../../provider/service/customer.service';
import {CustomerBase} from '../customer.base';

@Component({
    selector: 'app-nova-startup',
    templateUrl: './nova-startup.component.html',
    styleUrls: ['./nova-startup.component.scss']
})
export class NovaStartupComponent extends CustomerBase {

    @ViewChild('findInvest') findInvest: ElementRef;
    @ViewChild('varMentoring') varMentoring: ElementRef;

    constructor(private eventsService: EventsService,
                private customerService: CustomerService) {
        super();
    }

    save() {
        this.saving = true;

        this.customerService.saveStartup(this.customer)
            .subscribe(customer => {
                this.eventsService.messagesEvent
                    .emit('Startup salva com sucesso id= '.concat(customer.id));

                if (this.findInvest) this.findInvest.nativeElement.checked = false;
                if (this.varMentoring) this.varMentoring.nativeElement.value = '';

            });
    }

}
