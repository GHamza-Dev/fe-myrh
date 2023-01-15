import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Pagination} from "../../../models/pagination";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges{

  @Input() pagination!: Pagination;

  @Output() onNext = new EventEmitter()
  @Output() onBack = new EventEmitter()
  @Output() onPageNumberClick = new EventEmitter();

  pagesNumbers!: number[]

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['pagination'] && changes?.['pagination'].currentValue){
      this.pagesNumbers = Array.from(Array(this.pagination.totalPages),(x,i)=>i)
    }
  }

  handleBackClick(){
    this.onBack.emit()
  }

  handleNextClick(){
    this.onNext.emit()
  }

  handlePageNumberClick(pageNumber: number){
    this.onPageNumberClick.emit(pageNumber)
  }
}
