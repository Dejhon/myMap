import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newrating',
  templateUrl: './newrating.component.html',
  styleUrls: ['./newrating.component.css']
})
export class NewratingComponent implements OnInit {

  stars:number[]=[1, 2, 3, 4, 5];
  selectedValue:number = 0;
  isMouseOver = true;
  sum:number = 0;
  avg:number = 0;

  countStar(star:number){
    this.isMouseOver = false;
    if(this.isMouseOver == false){
      this.selectedValue = star;

      this.sum += this.selectedValue;
      console.log("The sum is " + this.sum);
      this.avg = this.sum / this.stars.length;   
      console.log("The average is " + this.avg);
    }
    
  }

  removeStar(star:number){
    this.isMouseOver = false;
    this.selectedValue != star

    this.sum -= this.selectedValue
    console.log("The new sum is " + this.sum);
    
  }

  addClass(star:number){
    if(this.isMouseOver){
      this.selectedValue = star;
    }
  }

  removeClass(){
    if(this.isMouseOver){
      this.selectedValue = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
