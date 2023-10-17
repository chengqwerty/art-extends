import { Component } from '@angular/core';
import { ArtDialogService } from '@think-make/art-extends/art-dialog';

@Component({
  selector: 'app-art-confirm-container',
  templateUrl: './art-confirm-container.component.html',
  styleUrls: ['./art-confirm-container.component.scss']
})
export class ArtConfirmContainerComponent {

    constructor(private dialogService: ArtDialogService) {
    }

    openDialog() {
        this.dialogService.confirm("删除区域", "确认删除这个区域吗？", {type: 'warn'});
    }

}
