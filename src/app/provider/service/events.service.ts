import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventsService {

    private readonly _messagesEvent: EventEmitter<String> = new EventEmitter<String>(true);

    get messagesEvent(): EventEmitter<String> {
        return this._messagesEvent;
    }
}