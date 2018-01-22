import {Component} from '@angular/core';
import {Field} from "@ngx-rapid/core";

@Component({
    selector: 'rapid-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {
    field = new Field('test')
}
