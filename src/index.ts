import {returnValue} from './part three/generators'

let res = document.getElementById('result')
if (res){
  res.innerHTML = returnValue as string;
} 