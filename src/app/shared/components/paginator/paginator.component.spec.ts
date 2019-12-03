import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges should update endPage', () => {
    component.total = 11;
    component.countPerPage = 10;
    component.ngOnChanges({ total: 11 });
    expect(component.endPage).toBe(2);
  });

  it('prevPage should work', () => {
    component.page = 1;
    component.prevPage();
    expect(component.page).toBe(1);

    component.page = 3;
    component.prevPage();
    expect(component.page).toBe(2);
  });

  it('nextPage should work', () => {
    component.endPage = 3;
    component.page = 3;
    component.nextPage();
    expect(component.page).toBe(3);

    component.page = 1;
    component.nextPage();
    expect(component.page).toBe(2);
  });

});
