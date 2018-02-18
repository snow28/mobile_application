import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatroomPage {


  username : string='';
  message : string='';
  subscription;
  messages : any;

  constructor( public db: AngularFireDatabase , public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');

    //creating async function which will return data from our database
    this.subscription = this.db.list('/chat').valueChanges().subscribe( data => {
      this.messages = data;
      // data.map( elem =>{
      //   this.messages.push(elem);
      //   console.log(elem);
      // });
    });
  }



  sendMessage(){
    this.db.list('/chat').push({
      username : this.username,
      message : this.message
    }).then( () => {
      //message is sent

    });
    this.message='';
  }

  ionViewWillLeave(){
    this.subscription.unsubscribe();
    this.db.list('/chat').push({
      specialMessage : true,
      message : this.username + ' has left the room!'
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.db.list('/chat').push({
      specialMessage : true,
      message : this.username + ' has joined the room!'
    });
  }

}
