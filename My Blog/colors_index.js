var Body = {
  SetTextColor:function(color){
    // document.body.style.color = color;
    $('body').css('color', color);
  },
  SetBackgroundColor:function(color){
    // document.body.style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.body;
  if(self.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.SetTextColor('white');
    self.value = 'day';
  }
  else {
    Body.SetBackgroundColor('white');
    Body.SetTextColor('black');
    self.value = 'night';
  }
}
