import { Component } from '@angular/core';
import { ArtDialogService } from '@think-make/art-extends/art-dialog';

@Component({
  selector: 'app-art-dialog-container',
  templateUrl: './art-dialog-container.component.html',
  styleUrls: ['./art-dialog-container.component.scss']
})
export class ArtDialogContainerComponent {

    constructor(private dialog: ArtDialogService) {

    }

    openDialog() {
        this.dialog.success("success", {
            duration: 2000000
        });
    }

}
