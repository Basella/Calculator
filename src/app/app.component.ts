import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  digit = "";
  prev = "";
  digits = "";
  answer = "";
  answers = "";
  display(text : string){
    if(text === "."){
      
    }
    if(this.answer === ""){
      if(this.prev === ""){
        if(text === "."){
          if(this.digit === ""){
            this.digit = "0" + text;
          }
          else{
            if(this.digit.includes(".")){
              text="";
            }
            else {
              this.digit += text;
            }
          } 
        }
        else {
          this.digit += text;
        }
      }
      else {
        if(text === "."){
          if(this.digits === ""){
            this.digits = "0" + text;
          }
          else{
            if(this.digits.includes(".")){
              text="";
            }
            else {
              this.digits += text;
            }
          } 
        }
        else {
          this.digits += text;
        }
      }
    }
    else{
      this.clear("C");
      this.display(text);
    }
  }

  operators(operator : string) {
    if(this.prev === ""){
      if(this.digit === ""){
      this.digit = "0";
      this.prev = operator;
      this.answers = this.digit;
      this.digit = "";
      }
      else {
      this.prev = operator;
      this.answers = this.digit;
      this.digit = "";
      }
    }
    else{
      if(((this.prev === "/")||(this.prev === "*")) && (this.answers !== "") && (this.digits === "")){
        this.prev = operator;
      }
      else {
      this.calculate("=");
      this.answers = this.answer;
      this.answer = ""; this.digit = ""; this.digits = "";
      this.prev = operator;
      }
    }

    if(this.answer !== ""){
      this.answers = this.answer;
      this.answer = "";
      this.prev = operator;
    }
  }

  calculate(text : string){
    if((this.digits === "") && (this.prev === "")){
      this.answer = this.digit;
      this.digit = "";
    }
    if(text === "="){
      if(this.prev === '+'){
        this.answer = (Number(this.answers)+ Number(this.digits)).toString();
        this.digits = ""; this.answers = ""; this.prev = "";
      }
      else if(this.prev ==='-'){
        this.answer = (Number(this.answers) -  Number(this.digits)).toString();
        this.digits = ""; this.answers = ""; this.prev = "";
      }
      else if(this.prev ==='*'){
        this.answer = (Number(this.answers) *  Number(this.digits)).toString();
        this.digits = ""; this.answers = ""; this.prev = "";
      }
      else if(this.prev ==='/'){
        if(this.answers === "0"){
          this.answer = "0";
          this.digits = ""; this.answers = ""; this.prev = "";
        }
        else {
        this.answer = (Number(this.answers) /  Number(this.digits)).toString();
        this.digits = ""; this.answers = ""; this.prev = "";
        }
      }
    }
  }

  clear(clear : string){
  this.digit = "";
  this.prev = "";
  this.digits = "";
  this.answer = "";
  this.answers = "";
  }

  delete(removeLast : string){
    if(this.digit !== ""){
      this.digit = this.digit.slice(0, -1)
    }
    else if(this.digits !== ""){
      this.digits = this.digits.slice(0, -1)
    }
  }
}