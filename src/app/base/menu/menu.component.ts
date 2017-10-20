import {Component} from '@angular/core'

@Component({
    selector: 'bjeaurn-menubar',
    templateUrl: './menu.html',
    styles: [
        `.heading-block { width: 150px; height: 150px; position: sticky; float: left; }`,
        `.next-event { width: 150px; height: 150px; position: sticky; float: right; text-align: center; }`
    ]

})
export class MenuComponent {}