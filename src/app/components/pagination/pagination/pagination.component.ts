import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{

  @Input() first!: boolean
  @Input() last!: boolean
  @Input() pageNumber!: number
  @Input() totalPages!: number

  @Output() onNext = new EventEmitter()
  @Output() onBack = new EventEmitter()
  @Output() onPageNumberClick = new EventEmitter();

  pagesNumbers!: number[]
  ngOnInit(): void {
    setTimeout(()=>{
      console.warn("Why I am inside a setTimeout function?\nPlease fix me!")
      this.pagesNumbers = Array.from(Array(this.totalPages),(x,i)=>i)
    },100)
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
