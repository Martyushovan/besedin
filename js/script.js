$(document).ready(function(){ 

  $(window).on('scroll', function(){
    showScrollHeader();
  });

  showScrollTopBtn();
  
  function showScrollHeader() {
    if( $(document).scrollTop() > 2060 ) {                
      $('#logo').fadeIn(100);                      
    }
    else {                                               
      $('#logo').fadeOut(100);
    }
  }
  
});

        
function show_video1()
{
 
    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
             
                $('#modal_form-grom') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;    
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                 
                document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                
                     
    });
     
     
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('.modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
             
            $('#modal_form-grom')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $("iframe").remove(); 
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            ); 
             
            document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            
         
    });
} 


function show_video2()
{
 
    $('#overlay').fadeIn(400, 
            function(){ 
             
                $('#modal_form-chum') 
                    .css('display', 'block')    
                    .animate({opacity: 1, top: '50%'}, 200); 
                 
                document.getElementById('v2').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                
                     
    });
     
     
    
    $('.modal_close, #overlay').click( function(){ 
             
            $('#modal_form-chum')
            .animate({opacity: 0, top: '45%'}, 200,  
                function(){ 
                    $(this).css('display', 'none'); 
                    $("iframe").remove(); 
                    $('#overlay').fadeOut(400); 
                }
            ); 
             
            document.getElementById('v2').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            
         
    });
} 

function show_video3()
{
 
    $('#overlay').fadeIn(400, 
            function(){ 
             
                $('#modal_form-iowa') 
                    .css('display', 'block')    
                    .animate({opacity: 1, top: '50%'}, 200); 
                 
                document.getElementById('v3').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                
                     
    });
     
     
    
    $('.modal_close, #overlay').click( function(){ 
             
            $('#modal_form-iowa')
            .animate({opacity: 0, top: '45%'}, 200,  
                function(){ 
                    $(this).css('display', 'none'); 
                    $("iframe").remove(); 
                    $('#overlay').fadeOut(400); 
                }
            ); 
             
            document.getElementById('v3').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            
         
    });
} 


function show_video4()
{
 
    $('#overlay').fadeIn(400, 
            function(){ 
             
                $('#modal_form-iowa-m') 
                    .css('display', 'block')    
                    .animate({opacity: 1, top: '50%'}, 200); 
                 
                document.getElementById('v4').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                
                     
    });
     
     
    
    $('.modal_close, #overlay').click( function(){ 
             
            $('#modal_form-iowa-m')
            .animate({opacity: 0, top: '45%'}, 200,  
                function(){ 
                    $(this).css('display', 'none'); 
                    $("iframe").remove(); 
                    $('#overlay').fadeOut(400); 
                }
            ); 
             
            document.getElementById('v4').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            
         
    });
}


function show_video5()
{
 
    $('#overlay').fadeIn(400, 
            function(){ 
             
                $('#modal_form-nyusha') 
                    .css('display', 'block')    
                    .animate({opacity: 1, top: '50%'}, 200); 
                 
                document.getElementById('v5').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                
                     
    });
     
     
    
    $('.modal_close, #overlay').click( function(){ 
             
            $('#modal_form-nyusha')
            .animate({opacity: 0, top: '45%'}, 200,  
                function(){ 
                    $(this).css('display', 'none'); 
                    $("iframe").remove(); 
                    $('#overlay').fadeOut(400); 
                }
            ); 
             
            document.getElementById('v5').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            
         
    });
}

function show_video6()
{
 
    $('#overlay').fadeIn(400, 
            function(){ 
             
                $('#modal_form-leningrad') 
                    .css('display', 'block')    
                    .animate({opacity: 1, top: '50%'}, 200); 
                 
                document.getElementById('v6').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                
                     
    });
     
     
    
    $('.modal_close, #overlay').click( function(){ 
             
            $('#modal_form-leningrad')
            .animate({opacity: 0, top: '45%'}, 200,  
                function(){ 
                    $(this).css('display', 'none'); 
                    $("iframe").remove(); 
                    $('#overlay').fadeOut(400); 
                }
            ); 
             
            document.getElementById('v6').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            
         
    });
}