import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { title } from "process";
import { UserModel } from "src/app/models/user-model";
import { AuthService } from "src/app/services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: UserModel;
  remenberUser: false;
  constructor(private authService: AuthService, private router: Router) {
    this.user = new UserModel();
  }

  ngOnInit() {
    if (localStorage.getItem("APP_USER")) {
      this.user.email = localStorage.getItem("APP_USER");
    }
  }

  onSubmmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      text: "Espere por favor.",
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
    Swal.showLoading();

    this.authService.login(this.user).subscribe(
      (authResponseSuccess) => {
        Swal.close();
        if (this.remenberUser) {
          localStorage.setItem("APP_USER", this.user.email);
        }
        this.router.navigateByUrl("/home");
      },
      (authResponseError) => {
        Swal.fire({
          icon: "error",
          title: "Error:",
          html: `Lo sentimos error: ${authResponseError.error.error.message}`,
        });
      }
    );
  }
}
