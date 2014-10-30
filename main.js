$(document).ready(initialize);

function initialize(){

  $('#translate').click(function(){
    var raw = $('#raw').val();
    $('#american').val(raw);

//what about using OR operator with IF
//tried a while loop, but was infinite for some reason

    if(raw.charAt(0) === 'a'){
      pig = raw + "-way";
    }else if(raw.charAt(0) === 'e'){
      pig = raw + "-way";
    }else if(raw.charAt(0) === 'i'){
      pig = raw + "-way";
    }else if(raw.charAt(0) === 'o'){
      pig = raw + "-way";
    }else if(raw.charAt(0) === 'u'){
      pig = raw + "-way";
    }else{
      pig = raw.substring(1, raw.length) + '-' + raw.charAt(0) + 'ay';
    }
    $('#pig').val(pig);
  })

}
