import {ElementRef, Input, ViewChild} from '@angular/core';
import {Customer} from '../provider/model/customer.model';

export class CustomerBase {

    @Input()
    ativo = false;

    saving = false;
    customer = new Customer();

    @ViewChild('varName')       varName: ElementRef;
    @ViewChild('varDescricao')  varDescricao: ElementRef;
    @ViewChild('varEmail')      varEmail: ElementRef;
    @ViewChild('varAddress')    varAddress: ElementRef;
    @ViewChild('varPhone')      varPhone: ElementRef;

    start() {
        if (this.varName)       this.varName.nativeElement.value = '';
        if (this.varDescricao)  this.varDescricao.nativeElement.value = '';
        if (this.varEmail)      this.varEmail.nativeElement.value = '';
        if (this.varAddress)    this.varAddress.nativeElement.value = '';
        if (this.varPhone)      this.varPhone.nativeElement.value = '';

        this.saving = false;
        this.customer = new Customer();
    }

    saveBlocked(): boolean {
        return !(Customer.isValid(this.customer) && (this.saving == false));
    }

}
