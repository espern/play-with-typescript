import {returnValue} from './part five/generics'

let res = document.getElementById('result')
if (res){
  res.innerHTML = returnValue as string;
} 