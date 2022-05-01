import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCurdListComponent } from './angular-curd-list.component';

describe('AngularCurdListComponent', () => {
  let component: AngularCurdListComponent;
  let fixture: ComponentFixture<AngularCurdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCurdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCurdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
