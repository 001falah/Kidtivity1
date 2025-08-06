  //Home page
  document.getElementById('home-page').addEventListener('click',function(){
    window.location.href = 'index.html'
  });
  
  document.getElementById('cartIcon').addEventListener('click', function() {
    window.location.href = 'shop.html';
  });

    document.getElementById('shopLink').addEventListener('click', function() {
    window.location.href = 'shop.html';
  });

    document.getElementById('aboutpage').addEventListener('click', function() {
    window.location.href = 'about.html';
  });

    document.getElementById('contact').addEventListener('click', function() {
    window.location.href = 'contact.html';
  });
// Join Us
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('joinUsBtn').addEventListener('click', function() {
      const whatsappCommunityLink = 'https://chat.whatsapp.com/EF7EZfWWglvGdNbhPoROiI?mode=ac_t';
      window.open(whatsappCommunityLink, '_blank');
  });
// watch video
  document.getElementById('watchVideoBtn').addEventListener('click', function () {
      window.open('https://youtu.be/cUmUOb7j3dc?si=rCrgSTX_OReK9bbq', '_blank');
  });
});

// instagram 
document.getElementById('insta').addEventListener('click',function(){
  window.open('https://www.instagram.com/kidtivitybox?igsh=MXZ4MTZveDNvMjlmaA==');
});

