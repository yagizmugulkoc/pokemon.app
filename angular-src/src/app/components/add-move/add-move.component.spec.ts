import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoveComponent } from './add-move.component';

describe('AddMoveComponent', () => {
  let component: AddMoveComponent;
  let fixture: ComponentFixture<AddMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
