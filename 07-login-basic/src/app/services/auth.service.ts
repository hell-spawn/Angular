import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserModel } from "../models/user-model";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private URL = "https://identitytoolkit.googleapis.com/v1/accounts";
  private API_KEY = "AIzaSyDYMSdPjJSMXNARCWsuO_QRn7awzS-8dZc";
  private userToken;

  constructor(private httpClient: HttpClient) {
    this.loadAuthToken();
  }

  //Sign up with email / password
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  public createUser(user: UserModel) {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };
    return this.httpClient
      .post(`${this.URL}:signUp?key=${this.API_KEY}`, authData)
      .pipe(
        tap((authResponseSuccess) =>
          this.saveAuthToken(
            authResponseSuccess["idToken"],
            authResponseSuccess["expiresIn"]
          )
        )
      );
  }

  //Sign in with email / password
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  public login(user: UserModel) {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };
    return this.httpClient
      .post(`${this.URL}:signInWithPassword?key=${this.API_KEY}`, authData)
      .pipe(
        tap((authResponseSuccess) => {
          this.logout();
          this.saveAuthToken(
            authResponseSuccess["idToken"],
            authResponseSuccess["expiresIn"]
          );
        })
      );
  }

  public logout() {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("AUTH_TOKEN_EXPIRES");
    this.userToken = null;
  }

  private saveAuthToken(token: string, expiresIn: string) {
    this.userToken = token;
    localStorage.setItem("AUTH_TOKEN", token);
    const time = new Date().getTime() + Number(expiresIn) * 1000;
    localStorage.setItem("AUTH_TOKEN_EXPIRES", time.toString());
  }

  private loadAuthToken() {
    if (
      localStorage.getItem("AUTH_TOKEN") &&
      localStorage.getItem("AUTH_TOKEN_EXPIRES")
    ) {
      const timeExpiresToken = Number(
        localStorage.getItem("AUTH_TOKEN_EXPIRES")
      );
      if (new Date().getTime() > timeExpiresToken) {
        return;
      }
      this.userToken = localStorage.getItem("AUTH_TOKEN");
      return;
    }
    this.userToken = "";
  }

  public getUserToken(): string {
    return this.userToken;
  }

  public isAuthenticated() {
    if (!this.userToken) {
      return false;
    }
    if (!localStorage.getItem("AUTH_TOKEN_EXPIRES")) {
      return false;
    }
    const timeExpiresToken = Number(localStorage.getItem("AUTH_TOKEN_EXPIRES"));
    if (new Date().getTime() > timeExpiresToken) {
      return false;
    }

    return true;
  }
}
