import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-list-component',
  templateUrl: './profile-list-component.component.html',
  styleUrls: ['./profile-list-component.component.scss']
})
export class ProfileListComponentComponent {
  profileList$: Observable<Profile[]> | undefined;

  constructor(protected profileService: ProfileService) {
    this.profileList$ = this.profileService._profileList;
  }

}
