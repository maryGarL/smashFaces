

$(document).ready(function(){
  var selectPeru= $('.peru').val();
  var selectMex= $('.mex').val();
   var aleatorioPeru, aleatorioMexico;
  $('select').change(function() {
    if ($('select').val()==selectPeru) {
      $('#juego').css("display","block")
      aleatorioPeru = random(peru);
      $('.image').html("<img class= 'photos' src='assets/img/peru/"+aleatorioPeru.image+"'/>")}
      else if ($('select').val()==selectMex) {
      $('#juego').css("display","block");
      aleatorioMexico = random(mexico);
      $('.image').html("<img class= 'photos' src='assets/img/mexico/"+aleatorioMexico.image+"'/>")
    }
  });
  var contador=0;
  var resultado=0;
 $('.comprobar').click(function(){
   if($('.nombre').val()==aleatorioPeru.name){
      $('#mensaje').text("Acertaste");
      resultado=resultado+5;
      $('.puntos').html(resultado);
      limpiar();
      aleatorioPeru = random(peru);
      $('.image').html("<img class= 'photos' src='assets/img/peru/"+aleatorioPeru.image+"'/>");
      contador=0;
  }
  else if ($('.nombre').val()==aleatorioMexico.name) {
      resultado=resultado+5;
      $('.puntos').html(resultado);
      limpiar();
      aleatorioMexico = random(mexico);
      $('.image').html("<img class= 'photos' src='assets/img/mexico/"+aleatorioMexico.image+"'/>");
      contador=0;
  }  else {
        contador++;
        $('#mensaje').text("intenta nuevamente");
        resultado--;
        $('.puntos').html(resultado);
        limpiar();}
 })
  })
  function random(arreglo){
    var longitud=arreglo.length;
    var azar=Math.round(Math.random() * (longitud)) + 1;
   var foto=arreglo[azar];
    return foto;
  }
  function limpiar(){
    $('.nombre').val("");
  }
