import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css']
})
export class Route6Component implements OnInit {
  divCount: number =24;
  divList: number[]= [];
  ngOnInit(){
    for(let i=1; i<=this.divCount; i++)
    {
      this.divList.push(i);
    }
  }
  showAlert(element: HTMLButtonElement){
    alert("Button '"+element.getAttribute('data-count')+"' is clicked");
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY * 1.1) >= document.body.scrollHeight-100) {
      for(let i=1; i<=6; i++)
      {
        this.divCount += 1;
        this.divList.push(this.divCount);
      }
    }
  }
}
