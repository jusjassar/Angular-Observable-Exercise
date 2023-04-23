import { Component, OnInit } from '@angular/core';
import { Observable,of,from } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
  standalone: true,
})
export class ObservableComponent implements OnInit {
  constructor() {}
  // CREATING OBSERVABLE WITH oBSERVABLE CONSTRUCTOR METHOD
  myObservable = new Observable((observe) => {
    setTimeout(()=>{observe.next("Hello")},1000);
    setTimeout(()=>{observe.next("World")},2000);
    setTimeout(()=>{observe.next("How")},3000);
    // setTimeout(()=>{ observe.error(new Error('Observable Endded with ttError'))},3000);
    setTimeout(()=>{observe.next('are')},4000);
    setTimeout(()=>{observe.next('you')},5000);
    setTimeout(()=>{observe.next('doing')},6000)
    // setTimeout(()=>{observe.complete()},7000)
  });

  text:string='';
  text2:string[] | number[] | number=[];
  
  // CREATING OBSERVABLE WITH of Method
  array1 = [3,2,7,8,4]
  array2 = ['a','t','d']

  myObservable2 = of(this.array1,this.array2,20,30)
// CREATING OBSERVABLE WITH FROM METHOD

  myObservable3 = from(this.array1)

////
  ngOnInit() {
    this.myObservable.subscribe((observer) => {
      // alert(res);
      this.text += observer+"   "
    },()=>{ },
    ()=>{ alert("ObserVable Finished")});

    this.myObservable2.subscribe(observer2 =>{
      // console.log(observer2)
      this.text2 = observer2
    });

    this.myObservable3.subscribe(observer3=>{
      // console.log("myObservable3 starts")
      console.log(observer3)
    })
  }



  
}
