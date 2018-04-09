import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public base64Image: string;
  //constructor(public navCtrl: NavController) {

  //}

  constructor(private camera: Camera) {

  }


  takePicture() {
    console.log("Camera Clicked");


    /*
    Camera.getPicture({
    	destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
          // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
    });
    */

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    console.log("camera option");

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
      presentAlert() {
        let alert = this.alertCtrl.create({
          title: 'Camera',
          buttons: ['Dismiss']
        });
        alert.present();
      }
    }, (err) => {
      // Handle error
    });


  }



}
