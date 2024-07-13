import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgObjectComponent } from './ng-object.component';

describe('NgObjectComponent', () => {
  let component: NgObjectComponent;
  let fixture: ComponentFixture<NgObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
