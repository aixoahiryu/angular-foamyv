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

  getUsers() {
    admin
      .auth()
      .listUsers(1000)
      .then(function(listUsersResult) {
        listUsersResult.users.forEach(function(userRecord) {
          console.log("user", userRecord.toJSON());
        });
      })
      .catch(function(error) {
        console.log("Error listing users:", error);
      });
  }

  addUser() {
    admin
      .auth()
      .createUser({
        email: "user@example.com",
        emailVerified: false,
        phoneNumber: "+11234567890",
        password: "secretPassword",
        displayName: "John Doe",
        photoURL: "http://www.example.com/12345678/photo.png",
        disabled: false
      })
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch(function(error) {
        console.log("Error creating new user:", error);
      });
  }

  createUser(email, password){
    return Observable.of(
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    );
  }
}
