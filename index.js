

window.onload = () => {

  animateWelcome()
  
  scrollFunction()
  
}

window.onresize = ()=>{


}

window.onscroll = ()=>{
  scrollFunction()
  paralax()
}

var welcome = document.getElementById('welcome')
var welc = document.getElementById('welc')
var welcomeCards = document.getElementById('welcome-cards')
var navbar = document.getElementById('navbar1')
var navBarLogo = document.getElementById('navBarLogo')
var navText = document.getElementById('navbarNav')

var navbutton = document.getElementById('navbutton')
var navbuttonstatus = false

navbutton.addEventListener('click', ()=>{
  navbuttonstatus == false ? navbuttonstatus = true : navbuttonstatus = false;
  
  if(navbuttonstatus){
    navbar.style.backgroundColor = 'rgba(173, 42, 47, 01)'
    navbar.style.backgroundImage = 'linear-gradient(30deg, rgba(143, 46, 49, 1) 50%,  rgba(173, 42, 47, 01) 50%)'
    navBarLogo.style.visibility='visible'
  }
  else {
    navbar.style.backgroundColor = 'rgba(247, 247, 214,0)'
    navbar.style.backgroundImage = ''
    navBarLogo.style.visibility='hidden'
  }

 
})

function scrollFunction(){
  var pageTop = window.pageYOffset;
  // var divTop = welc.offsetTop

  
    if (pageTop>100){
      
      // welcome.style.height='0px'
      // welcome.style.width ='0px'
      welcome.style.opacity = '0'
      
      navbar.style.backgroundColor = 'rgba(173, 42, 47, 01)'
      navbar.style.backgroundImage = 'linear-gradient(145deg, rgba(143, 46, 49, 1) 50%,  rgba(173, 42, 47, 01) 50%)'
      navText.style.color = 'rgba(173, 42, 47, 01)'
      navbar.classList.add('shadow-lg')
      navBarLogo.style.visibility='visible'

    } else {
      
      welcome.style.opacity = '1'
      
      navbar.classList.remove('shadow-lg')

      if(navbuttonstatus){
        navbar.style.backgroundColor = 'rgba(173, 42, 47, 01)'
      }
      else {
        navbar.style.backgroundColor = 'rgba(247, 247, 214,0)'
        navbar.style.backgroundImage = ''
        navBarLogo.style.visibility='hidden'
      }
      
      
      
      
    }
}


function animateWelcome(){
     
  welcome.style.marginTop= '0px'
  welcome.style.opacity = 1
  


  welcomeCards.style.marginTop= '0px'
  welcomeCards.style.opacity = 1
  
  }


  

  var myvid = document.getElementById('videoPlaylist');
  var myvids = ['/videos/video_library.mp4',
    "/videos/video_class_2.mp4",
    "/videos/video_class.mp4",
    "/videos/video_writing.mp4",
    
    
    ];
  var activeVideo = 0;
  myvid.src=myvids[activeVideo]
  
  myvid.addEventListener('ended', function(e) {
    // update the new active video index
    activeVideo++
    console.log(activeVideo)
    if (activeVideo == 4) activeVideo = 0;
    console.log(activeVideo)
    // activeVideo = (++activeVideo) % myvids.length;
    // update the video source and play
    myvid.src = myvids[activeVideo];
    myvid.play();
  });


var videoDiv = document.querySelector('.videoContainer')
var paralaxElement = document.querySelector('.paralaxElement')

function paralax(){
  adjustedmargin = `${window.pageYOffset/-2}px`
  videoDiv.style.marginTop = adjustedmargin

  
  paralaxElement.style.marginTop = adjustedmargin

}
