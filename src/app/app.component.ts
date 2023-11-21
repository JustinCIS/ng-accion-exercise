import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { Profile } from './model/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-accion-exercise';

  constructor(private profileService: ProfileService) { }

  addProfile() {
    const id: number = Math.floor(Math.random() * 1000);
    const profile: Profile = {id, name: 'Justin Ovation', email: 'justinrocks@gmail.com', phone: '555-555-5555', activity: 'Lorem Ipsum', imgUrl: `https://source.unsplash.com/random/100x100?sig=${id}` }
    this.profileService.addToProfileList(profile);
  }
}
