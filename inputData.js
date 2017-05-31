(function(){
  var dom = $('#data');
  $.getJSON('data.json', function(d){
    if(d){
      $.each(d, function(){
        var t = this;
        dom.append(
          '<div' +
          ' data-starttime="' + t.startTime + '"' +
          ' data-endtime="' + t.endTime + '"' +
          ' data-mon="' + t.monday + '"' +
          ' data-tues="' + t.tuesday + '"' +
          ' data-wed="' + t.wednesday + '"' +
          ' data-thur="' + t.thursday + '"' +
          ' data-fri="' + t.friday + '"' +
          ' data-sat="' + t.saturday + '"' +
          ' data-sun="' + t.sunday + '"' +
          ' data-temp="' + t.temporary + '"' +
          '></div>'
        )
      })
    }
  })
})();
