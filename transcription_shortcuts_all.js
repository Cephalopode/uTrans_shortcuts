// $(window).keypress(function(e) {
//       e.preventDefault(); 
//        var key = e.which;
//        console.log(key)
//    });


let nextValidSeg = () => {
  $('tr.success').next().click()
  if( $('tr.success .wavesurfer-tier-Comments span[value=Valid]').length===0 ) {
    $('tr.success').next().click()
  }
}

let cursorToEnd = () => {
  textarea = $('iframe').contents().find('body')
  val = textarea.text();
  textarea.focus().text("").text(val).focus();
}


//save and next : return 
$('iframe').contents().find('body').keypress(function (e) {
    if(e.which == 13 && !e.shiftKey) {    
    	e.preventDefault();  
    	$('#save-temp').click()
      nextValidSeg()
      //erase the F letter in new partition
      var textarea = $('iframe').contents().find('body')
      if (textarea.text() === "F") {
        textarea.text("")
      }
    }
});

//replay : /
$('iframe').contents().find('body').keypress(function (e) {
    if(e.which == 47 ) {    
    	e.preventDefault();  
      $('#save-temp').click()
    	$('tr.success').click()
      cursorToEnd()
    }
});

//next : * 
$('iframe').contents().find('body').keypress(function (e) {
    if(e.which == 42) {    
      e.preventDefault();  
      nextValidSeg()
    }
});

//pause/play $
$('iframe').contents().find('body').keypress(function (e) {
    if(e.which == 36) {    
      e.preventDefault();  
      $('button').click()
    }
}); 



// curr = parseInt($('tr.success .wavesurfer-id').text())

// $('tr#wavesurfer-time-EDU' + curr)

// $('tr .wavesurfer-tier-Comments span[value=Valid]').parent().parent()




