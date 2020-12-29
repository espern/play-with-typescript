import {returnValue} from './part three/function-overloading'

let res = document.getElementById('result')
if (res){
  res.innerHTML = returnValue as string;
} 