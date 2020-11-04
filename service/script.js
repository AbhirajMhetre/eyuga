var ref = firebase.database().ref();
var service = "";
var adaRef = firebase.database().ref("services");
var key = adaRef.key;


ref.on("value", function(snapshot) {
   url = location.href;
  url = url.split('?')[1];


  if(url=="infrastructure"){
     service = snapshot.val().services.infrastructure;                    
   }else if(url=="projectmanagement"){
    service = snapshot.val().services.projectmanagement;  
   }else if(url=="mobiledevelopment"){
    service = snapshot.val().services.mobiledevelopment;  
   }else if(url=="mlai"){
    service = snapshot.val().services.mlai;  
   }else if(url=="datasecurity"){
    service = snapshot.val().services.datasecurity;  
   }else if(url=="webdevelopment"){
    service = snapshot.val().services.webdevelopment;  
   }else if(url=="bigdata"){
    service = snapshot.val().services.bigdata;  
   }else if(url=="arvr"){
    service = snapshot.val().services.arvr;  
   }else if(url=="apidevelopment"){
    service = snapshot.val().services.apidevelopment;  
   }
   console.log(service.heading3);

                  var content =       '<div id="main-service">'+
                                          service.name +
                                        '</div>'+
                                        '<hr class="line-break">'+
                                        '<div id="main-service-para">'+
                                          '<div class="row">'+
                                            '<div class="col-md-3">'+
                                              '<img class="service-img1" src=" '+ service.icon1 + '" alt="">'+
                                              '<div class="service-points">'+ service.heading1 +'</div>'+
                                              '<div>'+
                                                service.para1 +
                                              '</div>'+ 
                                            '</div>'+
                                          
                                            '<div class="col-md-3">'+
                                              '<img class="service-img1" src=" '+ service.icon2 + ' " alt="">'+
                                              '<div class="service-points">'+  service.heading2 + '</div>'+ 
                                              '<div>'+
                                                service.para2 +
                                              '</div> '+
                                            '</div>'+

                                            '<div class="col-md-3">'+
                                              '<img class="service-img1" src="'+ service.icon3 + ' " alt="">'+
                                              '<div class="service-points">'+ service.heading3 +'</div>'+ 
                                              '<div>'+
                                               service.para3 +
                                              '</div>'+
                                            '</div>'+

                                            '<div class="col-md-3">'+
                                              '<img class="service-img1" src="' + service.icon4 + '" alt="">'+
                                              '<div class="service-points">'+ service.heading4 + '</div> '+
                                              '<div>'+
                                               service.para4 +
                                              '</div>'+
                                           '</div>'+

                                        '</div>'+
                                        '</div>'+
                                        '<!-- Site footer -->'+
                                        '<footer class="site-footer">'+
                                            '<div class="container-fluid">'+
                                              '<div class="row">'+
                                                '<div class="col-xs-12 col-md-3">'+
                                                  '<h6>Address</h6>'+
                                                  '<div>Main Branch</div>'+
                                                  '<div>37 Wormwhole Road, Shephards Bush, London</div>'+
                                                  '<br>'+
                                                  '<div>India Branch</div>'+
                                                  '<div>5/403, Ved Vihar, besides Ved Bhavan, Paud road, Kothrud, 411038, Pune</div>'+
                                                '</div>'+
                                        
                                                '<div class="col-xs-12 col-md-2">'+
                                                  '<h6>Services</h6>'+
                                                  '<ul class="footer-links">'+
                                                    '<li><a href="#">Infrastructure Development</a></li>'+
                                                    '<li><a href="#">Software Development</a></li>'+
                                                    '<li><a href="#">Cyber Security</a></li>'+
                                                    '<li><a href="#">Augmented Reality</a></li>'+
                                                    '<li><a href="#">Machine Learning</a></li>'+
                                                    '<li><a href="#">API Development</a></li>'+
                                                  '</ul>'+
                                                '</div>'+
                                        
                                                '<div id="footer-contact" class="col-xs-12 col-md-3">'+
                                                 '<h6>Contact</h6>'+
                                                  '<ul class="footer-links">'+
                                                    '<li><i class="fa fa-map-marker" aria-hidden="true"></i><a href="#">37 Wormholt road, Shephards  bush,London</a></li>'+
                                                    '<li><i class="fa fa-envelope" aria-hidden="true"></i><a href = "mailto:contact@eyuga.com?subject=Customer enquiry&body=Hey, EYuga support, I had a query related to...">contact@eyuga.com</a></li>'+
                                                    '<li><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:+447904972542">+44 7904 972542</a></li>'+
                                                  '</ul>'+
                                                '</div>'+
                                        
                                                '<div class="col-xs-12 col-md-4">'+
                                                  '<h6 style="margin-left: 10px;">Our Partners</h6>'+
                                                  '<div class="row">'+
                                                    '<div class="col-xs-12 col-md-4">'+
                                                      '<img class="affi-img" src="../images/Inator_logos-02.png" alt="">'+
                                                      '<div style="margin-left: 12px;">Software Partner</div>'+
                                                    '</div>'+
                                                    '<div class="col-xs-12 col-md-4">'+
                                                      '<img class="affi-img" src="../images/Trixter.png" alt="">'+
                                                      '<div>Cyber Security Partner</div>'+
                                                    '</div>'+
                                                    '<div class="col-xs-12 col-md-4">'+
                                                      '<img class="affi-img" src="../images/aespaeslogo.png" alt="">'+
                                                      '<div>AR VR Partner</div>'+
                                                    '</div>'+
                                                  '</div>'+
                                                '</div>'+
                                              '</div>'+
                                              '<hr>'+
                                            '</div>'+
                                            '<div class="container-fluid">'+
                                              '<div class="row" style="margin-left:0px">'+
                                                '<div class="col-md-8 col-sm-6 col-xs-12 footer-links">'+
                                                  '<p class="copyright-text">Copyright &copy; 2020 <a  href="https://eyuga.tech/">Eyuga</a>. Designed and Developed by <a  href="https://inator.in/">Inator</a>'+
                                                  '</p>'+
                                                '</div>'+
                                        
                                                '<div class="col-md-4 col-sm-6 col-xs-12">'+
                                                  '<!-- <ul class="social-icons">'+
                                                    '<li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>'+
                                                    '<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>'+
                                                    '<li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>'+
                                                    '<li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>'+   
                                                  '</ul> -->'+
                                                '</div>'+
                                              '</div>'+
                                            '</div>'+
                                        '</footer>';
                                         
                    
  $('#firebasediv').append(content);                               

  }, function (error) {
    console.log("Error: " + error.code);
 });




// **********************************//

//horizontal navbar
$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
    });
    
    // Scrolling Effect
    
    $(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('nav').addClass('black');
      }
    
      else {
            $('nav').removeClass('black');
      }
    })
    
    //horizontal navbar end
    
    
    
    
    
    //vertical navbar
    $(document).ready(function () {
      var trigger = $('.hamburger'),
          overlay = $('.overlay'),
         isClosed = false;
    
        trigger.click(function () {
          hamburger_cross();      
        });
    
        function hamburger_cross() {
    
          if (isClosed == true) {          
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {   
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
      }
      
      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
      });  
    });
    
    //vertical navbar end