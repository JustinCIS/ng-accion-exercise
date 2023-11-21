import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileList = new BehaviorSubject<Profile[]>([]);
  public _profileList = this.profileList.asObservable();

  private selectedProfile = new BehaviorSubject<Profile | null>(null);
  public _selectedProfile = this.selectedProfile.asObservable();

  constructor(private http: HttpClient) { }

  addToProfileList(profile: Profile) {
    const currentList: Profile[] = this.profileList.getValue();
    currentList.push(profile);
    this.profileList.next([...currentList]);
  }

  setProfile(profileId: number) {
    const currentList: Profile[] = this.profileList.getValue();
    const profileSelected: Profile | null = currentList.find(profile => { profile.id === profileId}) || null;
    this.selectedProfile.next(profileSelected);
  }

}
