import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {CustomerService} from '../../provider/service/customer.service';
import {CustomerBase} from '../customer.base';

@Component({
    selector: 'app-nova-empresa',
    templateUrl: './nova-empresa.component.html',
    styleUrls: ['./nova-empresa.component.scss']
})
export class NovaEmpresaComponent extends CustomerBase {

    constructor(private eventsService: EventsService,
                private customerService: CustomerService) {
        super();
    }


    save() {
        this.saving = true;

        this.customerService.saveEmpresa(this.customer)
            .subscribe(customer => {
                this.eventsService.messagesEvent
                    .emit('Empresa salva com sucesso id= '.concat(customer.id));
            });
    }

}
