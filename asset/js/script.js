var chiffre = ['1','2','3','4','5','6','7','8','9']
var machine1 = $('#machine1').html()
var mise = prompt('combien veux tu miser de jeton?')
var gain = 5
var jouer = mise
var win = 0
var loss = 0
var total = 0 
$('#mise').html('t\'as mise est de ' + mise)

function rendom (){
  
  jouer = jouer - 1
  $('#resultat').empty()
  $('#mise').html('Nombre de jeton restant ' +jouer)
  $('#machine1').css('color','black')
      $('#machine2').css('color','black')
       $('#machine3').css('color','black')


  
 // on trie au hazard es chiffre dans le tableau

  var triA = Math.floor(Math.random()*(chiffre.length - 1));
  var resultat1= document.getElementById('machine1').innerHTML = chiffre[triA]
 


  var triB = Math.floor(Math.random()*(chiffre.length - 1));
 


var resultat2 = document.getElementById('machine2').innerHTML = chiffre[triB]



  var triC = Math.floor(Math.random()*(chiffre.length - 1));
  var resultat3 =document.getElementById('machine3').innerHTML = chiffre[triA]
  
  // console.log("tric", resultat3)
  

 //Si les jetons son superieur à zero le jeu continue
  if (jouer <= 0 ){
        if(confirm(" Tu n'as plus de credit ! veux tu remiser ? ")) {
          document.location.reload(true)

        }

      }
else {
      if(resultat1 == resultat2 & resultat2 == resultat3){
        $('#resultat').append("tu as gagner 5 jetons").css("color","green")

        jouer = jouer + 6
        win = win + 1
        total = total +1 
        $('#compteurTotal').html("Votre nombre de partie " + total)
        $('#compteurWin').html("Votre Nombre de Victoire " + win) 
        $('#compteurloss').html("Votre Nombre de perdu " + loss)
        $('#machine1').css('color','green')
        $('#machine2').css('color','green')
        $('#machine3').css('color','green')

      }
        
      else
      {
      total = total+ 1
      loss = loss +1 

      $('#resultat').append("tu as perdu").css('color','red')
      $('#compteurTotal').html("Votre nombre de partie " + total)
      $('#compteurWin').html("Votre Nombre de Victoire " + win) 
      $('#compteurloss').html("Votre Nombre de perdu " + loss) 
      }
    }
}
