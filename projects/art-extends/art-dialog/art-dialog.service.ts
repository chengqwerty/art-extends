import { Injectable }                              from '@angular/core';
import { Dialog }                                  from '@angular/cdk/dialog';
import { GlobalPositionStrategy }                  from '@angular/cdk/overlay';
import { ArtAlertDialogConfig, ArtAlertComponent } from './art-alert/art-alert.component';

@Injectable()
export class ArtDialogService {

    constructor(public dialog: Dialog) {
    }

    public alert(type: 'success' | 'error' | 'warning', message: string, config?: ArtAlertDialogConfig): void {
        const positionStrategy = new GlobalPositionStrategy();
        positionStrategy.right('24px');
        positionStrategy.top('32px');
        let dialogRef = this.dialog.open(ArtAlertComponent, {
            // width: '250px',
            data: Object.assign({}, config, {type: type, message: message}),
            backdropClass: 'none',
            positionStrategy: positionStrategy
        });
        const duration = config?.duration || 2000;
        setTimeout(() => {
            dialogRef.close(true);
        }, duration);
    }

    public success(message: string, config?: ArtAlertDialogConfig) {
        this.alert('success', message, config);
    }

    public warning(message: string, config?: ArtAlertDialogConfig) {
        this.alert('warning', message, config);
    }

    public error(message: string, config?: ArtAlertDialogConfig) {
        this.alert('warning', message, config);
    }

    public confirm() {

    }

}
