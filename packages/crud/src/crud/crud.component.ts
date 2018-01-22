import {Component} from '@angular/core';
import {Field} from "@ngx-rapid/core";

/**
 * This is sample rapid-crud component :)
 *
 * Example of usage:
 * <example-url>http://localhost/demo/mysample.component.html</example-url>
 * <example-url>/demo/mysample.component.html</example-url>
 */
@Component({
    selector: 'rapid-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
    field = new Field('test')
}
