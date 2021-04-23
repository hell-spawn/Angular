import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import Swal from "sweetalert2";
import { UserModel } from "../../models/user-model";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  newUser: UserModel;
  remenberUser: false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.newUser = new UserModel();
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
    this.authService.createUser(this.newUser).subscribe(
      (authResponseSuccess) => {
        Swal.close();
        if (this.remenberUser) {
          localStorage.setItem("APP_USER", this.newUser.email);
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
