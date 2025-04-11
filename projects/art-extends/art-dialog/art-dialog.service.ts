import { Injectable }                                  from '@angular/core';
import { Dialog }                                      from '@angular/cdk/dialog';
import { GlobalPositionStrategy }                      from '@angular/cdk/overlay';
import { ArtAlertDialogConfig, ArtAlertComponent }     from './art-alert/art-alert.component';
import { ArtConfirmComponent, ArtConfirmDialogConfig } from './art-confirm/art-confirm.component';
import { MatDialog, MatDialogRef }                     from '@angular/material/dialog';
import { Theme }                                       from '@think-make/art-extends/core';

@Injectable()
export class ArtDialogService {

    constructor(public dialog: Dialog, public matDialog: MatDialog) {
    }

    public alert(type: Theme, message: string, config?: ArtAlertDialogConfig): void {
        const positionStrategy = new GlobalPositionStrategy();
        positionStrategy.right('24px');
        positionStrategy.top('32px');
        let dialogRef = this.dialog.open(ArtAlertComponent, {
            data: Object.assign({}, config, {type: type, message: message}),
            hasBackdrop: false,
            positionStrategy: positionStrategy
        });
        const duration = config?.duration || 2000;
        setTimeout(() => {
            dialogRef.close(true);
        }, duration);
    }

    public primary(message: string, config?: ArtAlertDialogConfig) {
        this.alert('primary', message, config);
    }

    public success(message: string, config?: ArtAlertDialogConfig) {
        this.alert('primary', message, config);
    }

    public warning(message: string, config?: ArtAlertDialogConfig) {
        this.alert('warning', message, config);
    }

    public error(message: string, config?: ArtAlertDialogConfig) {
        this.alert('error', message, config);
    }

    public confirm(header: string, message: string, config?: ArtConfirmDialogConfig): MatDialogRef<ArtConfirmComponent> {
        return this.matDialog.open(ArtConfirmComponent, {
            data: Object.assign({type: 'primary'}, config, {header: header, message: message}),
        });
    }

}
