import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../user.model';
import {UserService} from '../../user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss']
})
export class UserDescriptionComponent implements OnInit, OnDestroy {
  user: User;
  sub: Subscription;
  constructor(private userService: UserService ) { }

    ngOnInit() {
    console.log('ngOnInit invoked in UserDescriptionComponent')
        this.user = this.userService.currentUser;
        this.sub = this.userService.userInitialized
            .subscribe(
                (user: User) => {
                    this.user = user;
                    console.log('Recieved data [User] from subscription in UserDescriptionComponent')
                }
            );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
