import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


interface Word {
  example1: string;
  example2: string;
  word: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userCol: AngularFirestoreCollection<Word>;
  word: Observable<Word[]>;
  constructor(public navCtrl: NavController, private fireStore: AngularFirestore) {

  }
  ngOnInit() {
    this.userCol = this.fireStore.collection('word');
    this.word = this.userCol.valueChanges();
  }

}
