import { Component } from '@angular/core';
import { AlertController, NavController, ActionSheetController } from 'ionic-angular';
/* import { Title } from '@angular/platform-browser'; */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController,
    public actionSheet: ActionSheetController,
    public navCtrl: NavController) {

  }

  showAction(){
    const acSheet = this.actionSheet.create({
      title: 'Test Action',
    
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    acSheet.present();
  }
  showAlert1(){
    const alert = this.alertCtrl.create({
      title: 'Config Answer!!',
      subTitle: 'Waerusnee Wani',
      buttons: [
      {
        text: 'Ok'
      },{
        text: 'cancel',
        handler: () => {
          console.log("Cancel");
        },
      }  
      ]
    });
    alert.present();
  }
}
