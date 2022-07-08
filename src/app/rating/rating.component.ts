import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  //public form: FormGroup;
  rating!: number;
  testnum!: number;
  ratingArr:number[] = []
  sum: number = 0;
  avg: number = 0;
  length!: number;

  //constructor(private fb: FormBuilder){ 
  constructor(){ 

    // this.form = this.fb.group({
    //   rating: ['', Validators.required],
      
    // })
    // this.rating = this.form.value.rating
    // this.ratingArr.push(this.form.value.rating)

}
  rate(){

    this.testnum = this.rating
    console.log("this is the num to be pushed" + this.testnum)
  
  //console.log("1st " + this.ratingArr);
    // this.rating = parseInt(this.form.value.rating)
    //console.log('this is the rating ' + this.rating)
    this.ratingArr.push(this.testnum)
    this.length = this.ratingArr.length 
  console.log("length is " + this.length);
  console.log("array is " + this.ratingArr);
  

    for(let i = 0; i < this.ratingArr.length; i++){
      console.log("index value is " + this.ratingArr[i]);

      this.sum += this.ratingArr[i]
      
    console.log("the sum is " + this.sum)
    }
    this.avg = this.sum/this.length
    console.log("the avg is " + this.avg);
    

   }
}

