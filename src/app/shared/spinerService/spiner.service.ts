import { Injectable } from '@angular/core';
import { ViewChild, AfterViewInit, ElementRef } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SpinerService {

 

   startLoading() { 
    const a = document.getElementById('spinner');
    a.className = "start-spinner";
   }
 
   stopLoading() {
    const a = document.getElementById('spinner');
    a.className = "stop-spinner";
   }

  }