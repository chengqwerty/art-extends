import { Component }        from '@angular/core';
import { ArtDialogService } from '@think-make/art-extends/art-dialog';
import { Theme }            from '@think-make/art-extends/core';

@Component({
    selector: 'app-art-dialog-container',
    standalone: false,
    templateUrl: './art-dialog-container.component.html',
    styleUrls: ['./art-dialog-container.component.scss']
})
export class ArtDialogContainerComponent {

    constructor(private dialog: ArtDialogService) {

    }

    openDialog(type: Theme) {
        this.dialog.alert(type, type, {duration: 2000});
    }

}
