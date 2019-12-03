import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() total: number;
  @Input() countPerPage: number;
  @Output() countPerPageChange: EventEmitter<number> = new EventEmitter();

  @Input() page: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  @Input() pages = [5, 10, 25];

  public startPage;
  public endPage;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(data) {
    if (data.total || data.countPerPage) {
      this.endPage = Math.ceil(this.total / this.countPerPage) || 1;
    }
  }

  prevPage() {
    if (this.page === 1) {
      return;
    }
    this.page--;
    this.changePage();
  }

  nextPage() {
    if (this.page === this.endPage) {
      return;
    }
    this.page++;
    this.changePage();
  }

  changePage() {
    this.pageChange.emit(this.page);
  }

  pageClicked(btnIndex) {
    switch (btnIndex) {
      case 1:
        if (this.page + 3 >= this.endPage) {
          this.page = this.endPage - 3;
        }
        break;
      case 2:
        this.page = this.page + 2 < this.endPage ? this.page + 1 : this.endPage - 2;
        break;
      case 3:
        if (this.page + 3 >= this.endPage) {
          this.page = this.endPage - 1;
        }
        break;
      case 4:
        this.page = this.endPage;
        break;
    }
    this.changePage();
  }

  onChangePerPage(p) {
    this.countPerPage = p;
    this.page = 1;
    this.pageChange.emit(1);
    this.countPerPageChange.emit(p);
  }

}
