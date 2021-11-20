import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCrudComponent } from './produtos-crud.component';

describe('ProdutosCrudComponent', () => {
  let component: ProdutosCrudComponent;
  let fixture: ComponentFixture<ProdutosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
