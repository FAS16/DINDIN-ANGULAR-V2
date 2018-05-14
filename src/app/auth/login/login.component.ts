import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    username: string;
    password: string;

    constructor(private authService: AuthService,
                private toast: ToastrService) {
    }

    ngOnInit() {

    }

    ngOnDestroy() {
    }

    onLogin(form: NgForm) {
        this.toast.info('', 'Validerer login-oplysninger');
        this.username = form.value.username;
        this.password = form.value.password;
        this.authService.signInUser(this.username, this.password);

    }
}
