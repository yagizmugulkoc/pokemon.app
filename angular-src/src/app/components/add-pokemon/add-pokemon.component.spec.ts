import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPokemonComponent } from './add-pokemon.component';

describe('AddPokemonComponent', () => {
  let component: AddPokemonComponent;
  let fixture: ComponentFixture<AddPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
