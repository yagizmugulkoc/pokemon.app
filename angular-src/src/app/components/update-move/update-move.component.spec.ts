import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMoveComponent } from './update-move.component';

describe('UpdateMoveComponent', () => {
  let component: UpdateMoveComponent;
  let fixture: ComponentFixture<UpdateMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
