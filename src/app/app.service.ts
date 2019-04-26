import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import firebaseApp from "./firebase.config";
//import admin from "./firebase.config";
import { MessageService } from "./message.service";

@Injectable()
export class AppService {
  constructor(private MessageService: MessageService) {}

  getLogin(username: string, password: string): Observable<any> {
    console.log(username, password);
    return Observable.of(
      firebaseApp.auth().signInWithEmailAndPassword(username, password)
    );
  }

  logout() {
    return Observable.of(firebaseApp.auth().signOut());
  }

  userState: boolean;
  name: string;
  checkLogin() {
    var user = firebaseApp.auth().currentUser;
    if (user) {
      this.userState = true;
      this.name = user.email;
    } else {
      this.userState = false;
    }

    //return Observable.of(this.userState);
    return Observable.of({ state: this.userState, username: this.name });
  }

  createUser(email, password){
    return Observable.of(
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    );
  }
}
