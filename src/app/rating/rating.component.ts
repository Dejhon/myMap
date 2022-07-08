import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  public form: FormGroup;
  rating: number;
  ratingArr:number[] = []
  sum!: number;
  avg!: number

  constructor(private fb: FormBuilder){
    this.rating = 0;

    this.form = this.fb.group({
      rating: ['', Validators.required],
      
    })
    //this.rating = this.form.value
    this.ratingArr.push(this.rating)

}
  rate(){
    this.rating = this.form.value.rating
    this.ratingArr.push(this.rating)
    this.sum = 0
    this.avg = 0
    //console.log(this.ratingArr)

    for(let i = 0; i < this.ratingArr.length; i++ ){
      this.sum += this.ratingArr[i]
      this.avg = this.sum/this.ratingArr.length
    console.log(this.avg)

    }

  }
}

