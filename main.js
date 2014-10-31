$(document).ready(initialize);

function initialize(){

  $('#translate').click(function(){
    var raw = $('#raw').val();
    $('#american').val(raw);

//what about using OR operator with IF
//tried a while loop, but was infinite for some reason
//tried match

    var first = raw.charAt(0);

    if(first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u'){
      pig = raw + "-way";
    }else{
      pig = raw.substring(1, raw.length) + '-' + first + 'ay';
    }
    $('#pig').val(pig);
  })

}
