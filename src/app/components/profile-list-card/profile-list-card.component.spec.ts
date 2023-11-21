import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListCardComponent } from './profile-list-card.component';

describe('ProfileListCardComponent', () => {
  let component: ProfileListCardComponent;
  let fixture: ComponentFixture<ProfileListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
