function main() {
  $('.projects').on('click', function(){
  $('.projects').hide();
  });
  $('.projects-button').on('click', function(){
      //hanya menampilkan
      //$('.projects').show();
      //bisa menampilkan dan menghilangkan (switch)
      //$('.projects').toggle();
      //mengganti warna
      //  $('.projects-button').toggleClass('active');
      //menampilkan text
      //$(this).text('tampil');
      //slideToggle;
      $(this).next().slideToggle(400);
      //menggati warna this
      $(this).toggleClass('active');
  });
}

$(document).ready(main);
