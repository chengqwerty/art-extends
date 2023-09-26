import { Component, OnInit } from '@angular/core';
import { ArtDialogService }  from '../../projects/art-extends/art-dialog/art-dialog.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'art-art-alert-first';

    constructor(private artDialogService: ArtDialogService) {
    }

    ngOnInit(): void {
        this.artDialogService.success('I am not running.');
    }

}
