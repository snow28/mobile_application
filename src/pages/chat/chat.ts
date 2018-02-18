import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { ChatroomPage } from '../chatroom/chatroom';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams , private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  alert(title : string , message : string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


  loginUser(){
    if(/^[a-zA-z0-9+$]/.test(this.username)){
      this.navCtrl.push(ChatroomPage, {username : this.username});  // we are redirecting user to another page
    }else{
      this.alert("Error",'Invalid username');
    }
  }

}
