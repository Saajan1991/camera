import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


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
      
    }, (err) => {
      // Handle error
    });


  }



}
