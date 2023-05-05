import { Component,ElementRef,ViewChild } from '@angular/core';
import { SupportedHash } from './supported_hash';
import { current_supported_hash } from './current_hash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  @ViewChild('userInput') userInput! : ElementRef;
  title = 'hash-it';
  selected_hash :string = "";
  output : string = "";
  supported_hash: SupportedHash [] = []

  constructor(){
    this.supported_hash = current_supported_hash;
  }

  onChange(evt:any){
    this.selected_hash=evt.target.value;
    if(this.selected_hash!=""){
      this.onTextChange()
    }
}
  
  onTextChange(): void{
    let text:string = this.userInput?.nativeElement.value;
    if( text!=undefined && text.length > 0){
      const enabler = this.supported_hash.find(item => item.name === this.selected_hash);
      if(enabler !== undefined)
      {
        this.output = enabler?.enabler(text).toString();
        return;
      }          
    } 
    this.output="";    
  }
}
