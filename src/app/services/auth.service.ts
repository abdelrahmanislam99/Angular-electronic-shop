import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId: string = ''
  user: any;

  constructor(private afAuth: AngularFireAuth) {
  }

  signup(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.afAuth.auth.signOut()
  }

}
