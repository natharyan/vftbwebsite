

  function changeImage(counter) {
    var images = [
      '<i class="fas fa-blind"></i>',
      '<i class="fas fa-blind"></i>',
      '<i class="fas fa-blind"></i>',
      '<i class="fas fa-blind"></i>',
      '<i class="fas fa-blind"></i>',
      '<i class="fas fa-blind"></i>',
      '<i class="fas fa-blind"></i>',
      '<i class="fas fa-blind"></i>',
      '<i class="fas fa-blind"></i>',
    ];

    $(".loader .image1").html("" + images[counter] + "");
  }

  function loading() {
    var num = 0;

    for (i = 0; i <= 100; i++) {
      setTimeout(function () {
        $('.loader span').html(num + '%');

        if (num == 100) {
          loading();
        }
        num++;
      }, i * 120);
    };

  }