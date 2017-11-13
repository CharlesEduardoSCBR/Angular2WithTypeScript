import { Component, Inject } from "@angular/core";
import { Http } from '@angular/http';

@Component({

    selector: 'app',
    templateUrl: './app/app.component.html'
})

export class AppComponent { 
    fotos : Object[] = [];

    constructor(http : Http){
        let stream = http.get('v1/fotos');
    }   
}