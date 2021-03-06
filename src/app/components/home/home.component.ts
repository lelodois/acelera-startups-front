import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {CustomerBase} from '../customer.base';

declare var $: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

    modal = null;
    message = undefined;

    empresaEnabled = false;
    startupEnabled = false;

    @ViewChild('appStartup')
    appStartup: CustomerBase;

    @ViewChild('appEmpresa')
    appEmpresa: CustomerBase;

    constructor(private rootNode: ElementRef,
                private eventsService: EventsService) {
    }

    ngOnInit(): void {
        this.eventsService.messagesEvent
            .subscribe(message => {
                this.message = message;
                this.modal.modal('hide');
            });
    }


    ngAfterViewInit() {
        this.modal = $(this.rootNode.nativeElement).find('#modal');
    }

    showEmpresa() {
        this.empresaEnabled = true;
        this.startupEnabled = false;
        this.appEmpresa.start();
        this.modal.modal('show');
    }

    showStartup() {
        this.empresaEnabled = false;
        this.startupEnabled = true;
        this.appStartup.start();
        this.modal.modal('show');
    }

    closeMessage() {
        this.message = undefined;
    }

}
