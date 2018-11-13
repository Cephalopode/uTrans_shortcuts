//Thomas 2018

let nextValidSeg = () => {
  $('tr.success').next().click()
  if( $('tr.success .wavesurfer-tier-Comments span[value=Valid]').length===0 ) {
    $('tr.success').next().click()
  }
}



//save and next
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

