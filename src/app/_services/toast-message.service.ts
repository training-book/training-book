import { Injectable } from '@angular/core';
import { ToastButton, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom' | '', message:string, color:string, cssClass?:string, duration: number  = 1500, btn:(string | ToastButton)[] | undefined = undefined) {
    const toastParams:any = {
      message: message,
      duration: duration,
      color: color,
      position: position, 
      cssClass : cssClass,
      buttons : btn
    }

    const toast = await this.toastController.create(toastParams);

    if(duration === -1)delete toastParams['duration']
    await toast.present();
    
  }
}
