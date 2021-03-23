function onOff(){
  let p1 = document.getElementById('p1');
  if (p1.src.match(p1Off)){
    p1.src = "poolT/poolOn.jpg"
  }else {
    p1.src = "poolT/poolOff.jpg"
  }
}
