import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges{

  @Input() first!: boolean
  @Input() last!: boolean
  @Input() pageNumber!: number
  @Input() totalPages!: number

  @Output() onNext = new EventEmitter()
  @Output() onBack = new EventEmitter()
  @Output() onPageNumberClick = new EventEmitter();

  pagesNumbers!: number[]

  ngOnChanges(changes: SimpleChanges): void {
    this.pagesNumbers = Array.from(Array(this.totalPages),(x,i)=>i)
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
