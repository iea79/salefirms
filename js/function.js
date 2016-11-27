$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	$('a.next_section').click( function(){ 
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
		}
		return false;
	});

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    // $(document).ready(function(){
    //     var HeaderTop = $('#header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });
    // });

    setTimeout(function() {
	    $('.next_section').addClass('animated bounce');
    }, 4000);

    $('.slick').slick({
    	arrows: false,
		dots: true,
		infinite: true,
		speed: 0,
		fade: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 761,
				settings: {
					speed: 500,
					fade: false,
				}
			}
		]
		// cssEase: 'linear'
	});

	$(".phone").mask("+7 (999) 999-9999");

	$('#price .grid__wrapper,.partners_grid .grid__wrapper').viewportChecker({
		classToAdd: 'animated fadeInUp',
	});

	$('.package_list').viewportChecker({
		classToAdd: 'animated flipInX',
	});

	$('.how_work_item:first-child,.how_work_item:nth-child(3)').viewportChecker({
		classToAdd: 'animated fadeInLeft',
	});

	$('.how_work_item:last-child,.how_work_item:nth-child(2)').viewportChecker({
		classToAdd: 'animated fadeInRight',
	});

});