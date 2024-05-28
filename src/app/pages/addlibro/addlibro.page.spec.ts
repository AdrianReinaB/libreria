import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddlibroPage } from './addlibro.page';

describe('AddlibroPage', () => {
  let component: AddlibroPage;
  let fixture: ComponentFixture<AddlibroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddlibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
