import {Component, Input} from '@angular/core';
import {EventsService} from '../provider/service/events.service';
import {Customer} from '../provider/model/customer.model';
import {CustomerService} from '../provider/service/customer.service';

@Component({
    selector: 'app-nova-startup',
    templateUrl: './nova-startup.component.html',
    styleUrls: ['./nova-startup.component.scss']
})
export class NovaStartupComponent {

    @Input()
    private ativo = false;
    private saving = false;
    private customer = new Customer();

    constructor(private eventsService: EventsService,
                private customerService: CustomerService) {

    }

    start() {
        this.saving = false;
        this.customer = new Customer();
    }

    save() {
        this.saving = true;

        this.customerService.saveStartup(this.customer)
            .subscribe(customer => {
                this.eventsService.messagesEvent
                    .emit('Startup salva com sucesso id= '.concat(customer.id));
            });
    }

    saveEnabled(): boolean {
        return !(Customer.isValid(this.customer) && (this.saving == false));
    }

}
