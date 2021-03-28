<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="yandex-verification" content="e418fc61ad150c54">
	<meta name="google-site-verification" content="GsK2n_8xNrktBNTU10mpgG_A7_j0pTc3WKnS7yVYSfg">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<link rel="icon" type="image/png" sizes="16x16" href="favicon.ico">
	<link rel="icon" type="image/png" sizes="32x32" href="ico32.png">

	<!-- CSS -->
	<!-- OwlCarousel -->
	<link rel="stylesheet" href="modules/OwlCarousel/owl.carousel.min.css">
	<link rel="stylesheet" href="modules/OwlCarousel/owl.theme.default.min.css">
	<!-- fancybox -->
	<link rel="stylesheet" href="modules/fancybox/jquery.fancybox.min.css">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
		integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
	<link rel="stylesheet" href="modules/font-awesome/font-awesome.min.css">
	<!-- Swiper -->
	<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
	<!-- animate -->
	<link rel="stylesheet" href="modules/animate/animate.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">


	<!-- jquery -->
	<script type="text/javascript" src="modules/jquery/jquery-3.5.1.min.js"></script>


	<link rel="stylesheet" href="css/main.css">
	<title>Топиари</title>
	<meta name="description"
		content="Садовые скульптуры">
	<meta name="keywords" content="топиари">

</head>

<body>
	<header>
		<section class="screen screen--first">
			<script>
				function HideMenu() {
					var open_menu = document.querySelector('.topContainerMenu');
					open_menu.classList.remove("topContainerMenu__openMobMenu");
				}

				setTimeout(function () {
					document.getElementById("preloader_malc").style.display = "none";
				}, 3000);

				$(function () {
					// Owl Carousel
					var owl = $(".owl-carousel--Main");
					owl.owlCarousel({
						items: 1,
						loop: true,
						nav: true,
						smartSpeed: 600,
						navElement: 'div',
						navText: ['<img src="img/prev.png" alt="">', '<img src="img/next.png" alt="">'],
						dots: false,
						autoplay: true,
						autoplayTimeout: 4000,
						responsive: {
							0: {
								items: 1,
								nav: false,
							},
							1024: {
								items: 1
							}
						}

					});
				});
			</script>

			<div id="preloader_malc">
				<div>
					<img lazyload="" class=" lazyloaded" src="img/preloader_bacho.gif" data-src="img/preloader.gif" alt="лого">
				</div>
			</div>

			<div class="fly_mobi_button">
				<a class="main_phone_fly" href="tel:88002500471">
					<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M28.8678 20.8191C28.3965 20.626 27.8921 20.5267 27.3828 20.5266C26.9069 20.4995 26.4313 20.5861 25.9954 20.7791C25.6182 20.9611 25.2585 21.1769 24.9204 21.4241C24.5914 21.6628 24.2904 21.9379 24.023 22.244C23.763 22.544 23.5105 22.819 23.263 23.0665C23.0383 23.2937 22.7959 23.5027 22.538 23.6915C22.2777 23.878 21.959 23.9647 21.64 23.9358C21.3211 23.9069 21.0232 23.7643 20.8006 23.534C20.5255 23.2759 20.2521 23.0159 19.9806 22.754C19.6307 22.414 19.2007 22.0041 18.6932 21.5216C18.1621 21.0179 17.6346 20.5104 17.1108 19.9991L15.4108 18.3392C14.3671 17.3187 13.3582 16.2632 12.386 15.1744C12.0368 14.7905 11.7104 14.3865 11.4085 13.9644C11.1735 13.6269 11.056 13.3794 11.056 13.2219C11.0415 12.9398 11.1314 12.6621 11.3085 12.442C11.491 12.207 11.7085 11.967 11.9535 11.717C12.2035 11.472 12.476 11.2095 12.7734 10.937C13.0734 10.662 13.3484 10.3696 13.5959 10.0571C13.8409 9.74458 14.0509 9.3871 14.2209 8.98211C14.3884 8.58213 14.4734 8.12465 14.4734 7.61717C14.4733 6.58559 14.0664 5.59566 13.3409 4.86229C12.8739 4.40382 12.4308 3.92153 12.0135 3.41735C11.5365 2.8494 11.0212 2.31483 10.471 1.81742C9.93701 1.32871 9.35395 0.896432 8.73112 0.527477C8.16547 0.185063 7.51742 0.00274563 6.8562 0C5.82549 0.000684555 4.83657 0.407568 4.10382 1.13245C3.42635 1.80992 2.83387 2.4149 2.3264 2.94987C1.83937 3.4564 1.40701 4.01277 1.03645 4.6098C0.677334 5.2022 0.414097 5.84764 0.256484 6.52222C0.0729791 7.35605 -0.012596 8.20845 0.00149471 9.06211C0.00149471 10.4421 0.223985 11.8745 0.666466 13.3594C1.10895 14.8419 1.70642 16.3218 2.46139 17.7917C3.21636 19.2642 4.13632 20.7091 5.21627 22.1291C6.29623 23.5465 7.46868 24.8939 8.73112 26.1714C9.99357 27.4463 11.336 28.6263 12.756 29.7062C14.1734 30.7862 15.6258 31.7186 17.1108 32.4986C18.5932 33.2811 20.0856 33.891 21.5831 34.3335C23.0017 34.7647 24.4752 34.9887 25.9579 34.9985C26.8053 34.9981 27.6502 34.9059 28.4778 34.7235C29.1598 34.5696 29.8124 34.3062 30.4102 33.9435C30.9852 33.5936 31.5351 33.1636 32.0701 32.6561C32.6051 32.1461 33.2026 31.5611 33.8675 30.8962C34.5928 30.1627 34.9997 29.1728 35 28.1413C34.9717 27.7028 34.886 27.27 34.745 26.8538C34.5988 26.418 34.3817 26.0092 34.1025 25.6439C33.8108 25.261 33.5039 24.8899 33.1826 24.5314C32.8515 24.1606 32.5002 23.8084 32.1301 23.4765C31.7728 23.1562 31.4145 22.8371 31.0552 22.519C30.7407 22.2417 30.4347 21.955 30.1377 21.6591C29.7756 21.2961 29.3435 21.0103 28.8678 20.8191ZM27.9503 32.2836C27.2981 32.4404 26.6285 32.5126 25.9579 32.4986C24.6726 32.4743 23.397 32.2706 22.168 31.8936C20.7929 31.478 19.4643 30.9218 18.2032 30.2337C15.3995 28.6985 12.8337 26.7642 10.586 24.4915C9.44358 23.3361 8.36772 22.1166 7.36368 20.8391C6.38891 19.604 5.52714 18.2837 4.78879 16.8943C4.10062 15.6095 3.53724 14.2617 3.10636 12.8694C2.71487 11.6181 2.511 10.3157 2.50139 9.00461C2.50076 8.3393 2.57965 7.67629 2.73638 7.0297C2.87887 6.48472 3.09386 5.99474 3.38135 5.56726C3.66634 5.13728 4.01882 4.7198 4.43381 4.31732C4.85129 3.91233 5.32627 3.44235 5.85874 2.90988C5.98837 2.77659 6.14405 2.6714 6.31608 2.60087C6.48811 2.53034 6.67281 2.49597 6.8587 2.49989C7.0137 2.48739 7.25369 2.58989 7.57867 2.81238C7.90366 3.03487 8.25614 3.29986 8.63363 3.61235C9.44884 4.29235 10.201 5.04453 10.881 5.85975C11.1935 6.23473 11.4535 6.58222 11.661 6.8947C11.8685 7.20719 11.9735 7.44718 11.9735 7.61717C11.9959 7.90034 11.9051 8.18085 11.721 8.39714C11.5385 8.60713 11.321 8.84712 11.076 9.12211C10.826 9.3946 10.5535 9.65459 10.2561 9.90208C9.95607 10.1496 9.68108 10.4421 9.43359 10.7795C9.18517 11.1201 8.97555 11.4874 8.80862 11.8745C8.63247 12.3023 8.54652 12.7619 8.55613 13.2244C8.56863 13.7569 8.67362 14.2569 8.86862 14.7244C9.06361 15.1943 9.3436 15.6118 9.70858 15.9743L19.0232 25.2914C19.3816 25.6583 19.8102 25.9493 20.2836 26.1469C20.7569 26.3444 21.2652 26.4446 21.7781 26.4414C22.2472 26.4663 22.7156 26.3806 23.1455 26.1914C23.8965 25.8435 24.5679 25.3448 25.1179 24.7264C25.3929 24.4265 25.6429 24.1515 25.8804 23.904C26.1129 23.659 26.3554 23.449 26.6029 23.279C26.8308 23.1168 27.1031 23.0286 27.3828 23.0265C27.5653 23.0265 27.8128 23.1315 28.1253 23.339C28.4378 23.5465 28.7828 23.814 29.1602 24.139C29.5377 24.464 29.9277 24.8239 30.3327 25.2139C30.7352 25.6039 31.0952 25.9939 31.4077 26.3864C31.7176 26.7764 31.9801 27.1288 32.1876 27.4413C32.3951 27.7538 32.5001 27.9913 32.5001 28.1638C32.5019 28.3457 32.4665 28.526 32.396 28.6937C32.3255 28.8614 32.2214 29.0128 32.0901 29.1388C31.5301 29.6862 31.0552 30.1637 30.6652 30.5637C30.2862 30.9577 29.8673 31.3112 29.4152 31.6186C28.9676 31.9207 28.4724 32.1455 27.9503 32.2836ZM35 1.75992L23.4005 13.3794H31.6201V15.8793H19.1207V3.37986H21.6206V11.5995L33.2426 0L35 1.75742V1.75992Z"
							fill="white"></path>
					</svg>
				</a>
			</div>
			<div class="topContainerMenu ">
				<a href="" class="logo"></a>
				<ul class="menu" id="menu">
					<li class="link"><a href="#figure" onclick="HideMenu()">Фигуры</a></li>
					<li class="link"><a href="#partners" onclick="HideMenu()">Партнеры</a></li>
					<li class="link"><a href="#advantages" onclick="HideMenu()">Преимущества</a></li>
					<li class="link"><a href="#otziv" onclick="HideMenu()">Отзывы</a></li>
					<li class="link"><a href="#contakt" onclick="HideMenu()">Контакты</a></li>
				</ul>
				<div class="contacts">
					<a class="telephone" href="tel:88001001010">8 (800) 100 1010</a>
					<span class="comment"> Бесплатный звонок</span>
				</div>
				<img class="burger" src="img/burger.png">

			</div>

			<div class="block_content" style="
			  height: 100vh;
			  background-image: url(img/header-min.jpg);
			  background-size: cover;
			  background-position: left;
			  background-repeat: no-repeat;
			">

				<div class="owl-carousel owl-carousel--Main">

					<div class="slider" style="background-image: url('img/header-min.jpg');">
						<div class="fon_backdround">
							<div class="title">
								<h1>Топиари Grass — <br>покупайте у производителя!</h1>
								<div class="flex__btn">
									<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
										class="link">Скачать каталог</a>
								</div>
							</div>
						</div>

					</div>
					<div class="slider" style="background-image: url('img/slide2-min.jpg');">
						<div class="fon_backdround">
							<div class="title">
								<h2>Скачайте наиболее полный каталог фигур от Grass с размерами и ценами</h2>
								<div class="flex__btn">
									<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
										class="link">Скачать каталог</a>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div id="back-top">
				<a href="#" onclick="return up()">ВВЕРХ</a>
			</div>
		</section>
	</header>

	<main>
		<section class="screen screen--two">
			<div class="container">
				<div class="block_patent">
					<div class="patent animate__backInLeft wow" data-wow-delay="0.3s" data-wow-offset="100">
						<picture>
							<source srcset="img/patent.webp" type="image/webp">
							<img src="img/patent.jpg" alt="топиари" />
						</picture>

					</div>
					<div class="content ">
						<h2>Уникальность — наше кредо.</h2>
						<p class="comment">Патент подтверждает уникальное право фабрики Grass на свое изобретение – каркасные топиари
							из стеклопластика, покрытые искусственной травой.</p>
						<picture class="picture">
							<source srcset="img/hobit-house.webp" type="image/webp">
							<img src="img/hobit-house.png" alt="топиари" />
						</picture>

					</div>
				</div>
				<div class="block_catalog">
					<a id="figure"></a>
					<h2>Топиарные фигуры</h2>
					<div class="catalog " data-wow-offset="120">
						<div class="item wow animate__backInUp " data-wow-delay="0.3s" data-wow-offset="120">
							<picture>
								<source srcset="img/dsc-1.webp" type="image/webp">
								<img src="img/dsc-1.png" alt="топиари" />
							</picture>

							<div class="flex__btn">
								<a class="link" data-type="ajax" data-fancybox="" data-src="callBack-form.html"	href="javascript:;">Оформить заказ</a>
							</div>
							<div class="prise">
								<span class="name"> Медведь</span>
								<span class="textarea"> 156 000 <img class="rubl" src="img/rub.png"></span>
							</div>
							<div class="size">
								<span class="name">Размеры (В х Д х Ш)</span>
								<span class="textarea"> 1,5 х 2,5 х 1,1м</span>
							</div>

						</div>
						<div class="item   wow animate__backInUp " data-wow-delay="0.3s" data-wow-offset="120">
							<picture>
								<source srcset="img/dsc-2.webp" type="image/webp">
								<img src="img/dsc-2.png" alt="топиари" />
							</picture>
							<div class="flex__btn">
								<a class="link" data-type="ajax" data-fancybox="" data-src="callBack-form.html"
									href="javascript:;">Оформить заказ</a>
							</div>
							<div class="prise">
								<span class="name"> Слон</span>
								<span class="textarea"> 425 000 <img class="rubl" src="img/rub.png"></span>
							</div>
							<div class="size">
								<span class="name">Размеры (В х Д х Ш)</span>
								<span class="textarea">2,5 х 4 х 1,9м </span>
							</div>
						</div>
						<div class="item wow animate__backInUp " data-wow-delay="0.3s" data-wow-offset="120">
							<picture>
								<source srcset="img/dsc-3.webp" type="image/webp">
								<img src="img/dsc-3.png" alt="топиари" />
							</picture>
							<div class="flex__btn">
								<a class="link" data-type="ajax" data-fancybox="" data-src="callBack-form.html"
									href="javascript:;">Оформить заказ</a>
							</div>
							<div class="prise">
								<span class="name"> Сова</span>
								<span class="textarea"> 180 000 <img class="rubl" src="img/rub.png"></span>
							</div>
							<div class="size">
								<span class="name">Размеры (В х Д х Ш)</span>
								<span class="textarea">2 x 1.4 x 1.4м </span>
							</div>
						</div>
						<div class="item wow animate__backInUp " data-wow-offset="120">
							<picture>
								<source srcset="img/dsc-4.webp" type="image/webp">
								<img src="img/dsc-4.png" alt="топиари" />
							</picture>
							<div class="flex__btn">
								<a class="link" data-type="ajax" data-fancybox="" data-src="callBack-form.html"
									href="javascript:;">Оформить заказ</a>
							</div>
							<div class="prise">
								<span class="name"> Лев</span>
								<span class="textarea"> 104 000 <img class="rubl" src="img/rub.png"></span>
							</div>
							<div class="size">
								<span class="name">Размеры (В х Д х Ш)</span>
								<span class="textarea">1,53 х 1,15 х 0,73м </span>
							</div>
						</div>
						<div class="item wow animate__backInUp " data-wow-offset="120">
							<picture>
								<source srcset="img/dsc-5.webp" type="image/webp">
								<img src="img/dsc-5.png" alt="топиари" />
							</picture>
							<div class="flex__btn">
								<a class="link" data-type="ajax" data-fancybox="" data-src="callBack-form.html"
									href="javascript:;">Оформить заказ</a>
							</div>
							<div class="prise">
								<span class="name"> Дом хоббита</span>
								<span class="textarea"> 265 000 <img class="rubl" src="img/rub.png"></span>
							</div>
							<div class="size">
								<span class="name">Размеры (В х Д х Ш)</span>
								<span class="textarea">1,5 х 2,6 х 2,3м </span>
							</div>
						</div>
						<div class="item wow animate__backInUp " data-wow-offset="120">
							<picture>
								<source srcset="img/dsc-6.webp" type="image/webp">
								<img src="img/dsc-6.png" alt="топиари" />
							</picture>
							<div class="flex__btn">
								<a class="link" data-type="ajax" data-fancybox="" data-src="callBack-form.html"
									href="javascript:;">Оформить заказ</a>
							</div>
							<div class="prise">
								<span class="name"> Лавочка Sherwood</span>
								<span class="textarea"> 69 000 <img class="rubl" src="img/rub.png"></span>
							</div>
							<div class="size">
								<span class="name">Размеры (В х Д х Ш)</span>
								<span class="textarea">0.49 х 1.75 х 0.5м </span>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
		<section class="screen screen--three">
			<div class="container">
				<div class="left_block">
					<div class="textArea">
						Заполните форму, и мы вышлем Вам <br> подробный каталог в котором 150+ фигур и композиций
					</div>

					<form class="screen_contact_form" name="order" method="post" onSubmit="ym('66529771','reachGoal', 'katalog');"
						action="send.php">
						<div>
							<input type="text" name="name" placeholder="Имя" required>
						</div>

						<div>
							<input class="phone" type="tel" name="tel" placeholder="Телефон" required>
						</div>
						<input type="hidden" name="download" value="catalogDW">
						<div class="flex__btn">
							<button class="link">Отправить заявку</button>
						</div>
					</form>

				</div>
				<div class="right_block">
					<h2>Скачать полный каталог топиари с ценами</h2>
					<div class="header_logo">
						<img src="img/logo.png">
					</div>
				</div>
			</div>
		</section>
		<section class="screen screen--four">
			<div class="container">
				<a id="advantages"></a>
				<div class="wraper">

					<h2>Преимущества наших топиари</h2>
					<div class="grid">
						<div class="grid-item">
							<div class="grid-img animate__backInRight wow" style="background-image: url('img/dsc-21.png');"></div>
							<div class="flex__btn btnMobi">
								<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
									class="link"> Оформить заказ</a>
							</div>
							<div class="grid-cont">
								<h3 class="grid-tiile">Товар всегда в наличии на складе</h3>
								<p> Мы являемся крупнейшим производителем элементов ландшафтного дизайна и можем обеспечить поставку в
									кратчайшие сроки.</p>
								<div class="form_detal">
									<div class="textArea">
										<p class="title"> Лошадь</p>
										<p class="comment">Габариты: <br> 1,95 х 2,5 х 0,75м</p>
										<p class="comment">Цена: 145 000 <i class="fa  fa-rub" aria-hidden="true"></i></p>
									</div>
									<div class="flex__btn">
										<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
											class="link"> Оформить заказ</a>
									</div>
								</div>
							</div>
						</div>
						<div class="grid-item">
							<div class="grid-img animate__backInLeft wow" style="background-image: url('img/dsc-22.png');"></div>
								<div class="flex__btn btnMobi">
									<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;" class="link"> Оформить заказ</a>
								</div>
								<div class="grid-cont">
									<h3 class="grid-tiile">Поставки в любую точку мира</h3>
									<p> Уникальная логистическая схема позволяет нам поставлять любой товар со складов на наилучших	условиях.</p>
									<div class="form_detal">
										<div class="textArea">
											<p class="title"> Козел горный</p>
											<p class="comment">Габариты: <br> 2,1 х 1,4 х 0,75м</p>
											<p class="comment">Цена: 97 000 <i class="fa  fa-rub" aria-hidden="true"></i></p>
										</div>
										<div class="flex__btn">
											<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"	class="link"> Оформить заказ</a>
										</div>
									</div>
								</div>
							</div>
						
						<div class="grid-item">
							<div class="grid-img animate__backInRight wow" style="background-image: url('img/dsc-23.png');">
							</div>
							<div class="flex__btn btnMobi">
								<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
									class="link"> Оформить заказ</a>
							</div>
							<div class="grid-cont">
								<h3 class="grid-tiile">Все фигуры уникальны и не имеют аналогов</h3>
								<p> Команда профессионалов, которая разрабатывает макеты каждой фигуры, вкладывает в свою работу
									любовь и умножает ценности благополучной и беззаботной жизни.</p>
								<div class="form_detal">
									<div class="textArea">
										<p class="title"> Тираннозавр</p>
										<p class="comment">Габариты: <br> 1,5 х 3,4 х 0,9м</p>
										<p class="comment">Цена: 132 000 <i class="fa  fa-rub" aria-hidden="true"></i></p>
									</div>

									<div class="flex__btn">
										<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
											class="link"> Оформить заказ</a>
									</div>
								</div>
							</div>
						</div>
						<div class="grid-item">
							<div class="grid-img animate__backInLeft wow" style="background-image: url('img/dsc-24.png');">
							</div>
							<div class="flex__btn btnMobi">
								<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
									class="link"> Оформить заказ</a>
							</div>
							<div class="grid-cont">
								<h3 class="grid-tiile">Разработка фигур по собственной технологии</h3>
								<p>Компания Grass имеет собственные уникальные технологии и производит долговечные и не требующие ухода
									фигуры.</p>
								<div class="form_detal">
									<div class="textArea">
										<p class="title"> Истукан</p>
										<p class="comment">Габариты: <br> 2,08 х 1,05 х 1,05м</p>
										<p class="comment">Цена: 100 000 <i class="fa  fa-rub" aria-hidden="true"></i></p>
									</div>

									<div class="flex__btn">
										<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
											class="link"> Оформить заказ</a>
									</div>
								</div>
							</div>
						</div>
						<div class="grid-item">
							<div class="grid-img animate__backInRight wow" style="background-image: url('img/dsc-25.png');">
							</div>
							<div class="flex__btn btnMobi">
								<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
									class="link"> Оформить заказ</a>
							</div>
							<div class="grid-cont">
								<h3 class="grid-tiile">Топиари Grass - это соединение ремесла древней культуры и инновационных
									технологий</h3>
								<p>Многообразие направлений топиарного искусства открывает большие возможности преобра зования
									пространств, придания им индивидуального образа и ощущения эмоциональной теплоты.</p>
								<div class="form_detal">
									<div class="textArea">
										<p class="title"> Домик</p>
										<p class="comment">Габариты: <br> 1,76 х 1,4 х 1,92м</p>
										<p class="comment">Цена: 250 000 <i class="fa  fa-rub" aria-hidden="true"></i></p>
									</div>
									<div class="flex__btn">
										<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
											class="link"> Оформить заказ</a>
									</div>
								</div>
							</div>
						</div>
						<div class="grid-item">
							<div class="grid-img animate__backInLeft wow" style="background-image: url('img/dsc-26.png');">
							</div>
							<div class="flex__btn btnMobi">
								<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
									class="link"> Оформить заказ</a>
							</div>
							<div class="grid-cont">
								<h3 class="grid-tiile">Оригинальные решения на основе минимальных затрат</h3>
								<p> Топиари могут выполнять роль рекламы, повторяя форму логотипов, символов и других атрибутов
									компании, активно распространяются как новая дизайн-форма, как явление современного искусств.</p>
								<div class="form_detal">
									<div class="textArea">
										<p class="title"> Грибы опята (большие)</p>
										<p class="comment">Габариты: <br> 2,7 х 1,9 х 1,9м</p>
										<p class="comment">Цена: 104 000 <i class="fa  fa-rub" aria-hidden="true"></i></p>
									</div>
									<div class="flex__btn">
										<a data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;"
											class="link"> Оформить заказ</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex__btn flex__btn-svg">
						<a class="link" data-type="ajax" data-fancybox="" data-src="callBack-form.html" href="javascript:;">
							Скачать каталог
							<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16 9H18.5C19.163 9 19.7989 9.26339 20.2678 9.73223C20.7366 10.2011 21 10.837 21 11.5V24.5C21 25.163 20.7366 25.7989 20.2678 26.2678C19.7989 26.7366 19.163 27 18.5 27H3.5C2.83696 27 2.20107 26.7366 1.73223 26.2678C1.26339 25.7989 1 25.163 1 24.5V11.5C1 10.837 1.26339 10.2011 1.73223 9.73223C2.20107 9.26339 2.83696 9 3.5 9H6"
									stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M6 15L11 20L16 15" stroke="white" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round" />
								<path d="M11 1V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
		<section class="screen partners">
			<div class="container">
				<a id="partners"></a>
				<h2>Наши партнеры</h2>
				<div class="partner_wraper">
					<div class="owl-carousel owl-carousel-partners">
						<div class="item item_partner" style="background-image: url('img/min01.png');"></div>
						<div class="item item_partner" style="background-image: url('img/min02.png');"></div>
						<div class="item item_partner" style="background-image: url('img/min03.png');"></div>
						<div class="item item_partner" style="background-image: url('img/min04.png');"></div>
						<div class="item item_partner" style="background-image: url('img/min05.png');"></div>
						<div class="item item_partner" style="background-image: url('img/min06.png');"></div>
						<div class="item item_partner" style="background-image: url('img/min07.png');"></div>
						<div class="item item_partner" style="background-image: url('img/min08.png');"></div>
					</div>
				</div>
				<a id="otziv"></a>
				<h2> Награды и благодарности </h2>
				<div class="otziv_wraper">
					<div class="owl-carousel  owl-carousel-otziv">
						<div class="item item_otziv" data-fancybox data-src="img/otziv1.jpg"
							style="background-image: url('img/otziv1.jpg');"></div>
						<div class="item item_otziv" data-fancybox data-src="img/otziv2.jpg"
							style="background-image: url('img/otziv2.jpg');"></div>
							<div class="item item_otziv" data-fancybox data-src="img/otziv1.jpg"
							style="background-image: url('img/otziv1.jpg');"></div>
						<div class="item item_otziv" data-fancybox data-src="img/otziv2.jpg"
							style="background-image: url('img/otziv2.jpg');"></div>
							<div class="item item_otziv" data-fancybox data-src="img/otziv1.jpg"
							style="background-image: url('img/otziv1.jpg');"></div>
						<div class="item item_otziv" data-fancybox data-src="img/otziv2.jpg"
							style="background-image: url('img/otziv2.jpg');"></div>
							<div class="item item_otziv" data-fancybox data-src="img/otziv1.jpg"
							style="background-image: url('img/otziv1.jpg');"></div>
						<div class="item item_otziv" data-fancybox data-src="img/otziv2.jpg"
							style="background-image: url('img/otziv2.jpg');"></div>
							<div class="item item_otziv" data-fancybox data-src="img/otziv1.jpg"
							style="background-image: url('img/otziv1.jpg');"></div>
						<div class="item item_otziv" data-fancybox data-src="img/otziv2.jpg"
							style="background-image: url('img/otziv2.jpg');"></div>
				</div>
				
			</div>
		</section>
		<section class="screen gallery">
			<div class="container">
				<div class="gallery_wraper">
					<h2> Шедевры ландшафтного дизайна </h2>
					<div class="case">
						<a class="img img--30" data-fancybox="gallery" data-src="img/Big_gallery01.jpg"
							style="background-image: url(img/gallery01.png);"></a>
						<a class="img img--70" data-fancybox="gallery" data-src="img/Big_gallery02.jpg"
							style="background-image: url(img/gallery02.png);"></a>
					</div>
					<div class="case">
						<a class="img img--33" data-fancybox="gallery" data-src="img/Big_gallery03.jpg"
							style="background-image: url(img/gallery03.png);"></a>
						<a class="img img--33" data-fancybox="gallery" data-src="img/Big_gallery04.jpg"
							style="background-image: url(img/gallery04.png);"></a>
						<a class="img img--33" data-fancybox="gallery" data-src="img/Big_gallery05.jpg"
							style="background-image: url(img/gallery05.png);"></a>
					</div>
					<div class="case">
						<a class="img img--70" data-fancybox="gallery" data-src="img/Big_gallery06.jpg"
							style="background-image: url(img/gallery06.png);"></a>
						<a class="img img--30" data-fancybox="gallery" data-src="img/Big_gallery07.jpg"
							style="background-image: url(img/gallery07.png);"></a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="footer">
		<section class="container">
			<div class="wraper">
				<div class="left_block">
					<h2> Заказать звонок от менеджера</h2>
					<p class="text">Профессиональный менеджер расскажет о топиари все и поможет вам по любому вопросу</p>
				</div>
				<div class="right_block">
					<form class="contact_form_footer" action="send.php">
						<div>
							<input type="text" name="name" placeholder="Имя" required>
						</div>
						<div>
							<input class="phone" type="tel" name="tel" placeholder="Телефон" required>
						</div>
						<input type="hidden" name="download" value="nocatalog">
						<div class="flex__btn">
							<button class="link">Отправить заявку</button>
						</div>
					</form>
				</div>
				<a id="contakt"></a>
				<div class="block_contakt">
					<div class="case_logo">
						<div class="header_logo">
							<img src="img/logo.png">
						</div>
						<div class="adress">
							<p>Россия, г. Липецк,</p>
							<p> ул. Победы д. 10</p>
						</div>
					</div>
					<div class="case">
						<div class="otdel">
							<p class="left"> Бесплатно по России</p>
							<a class="right" href="tel:88001001010">8 (800) 100 1010</a>
						</div>
						<div class="adress">
							<p class="left">Отдел продаж</p>
							<a class="right" href="tel:88001001010">8 (800) 100 1010</a>
						</div>
					</div>
					<div class="case">
						<div class="otdel">
							<p class="left"> Общие вопросы</p>
							<a class="right" href="mailto:Info@mail.ru" target="_blank"> Info@mail.ru </a>
						</div>
						<div class="adress">
							<p class="left">Отдел продаж</p>
							<a class="right" href="mailto:Info@mail.ru" target="_blank">Info@mail.ru</a>
						</div>
					</div>
				</div>
				<div class="block_coppyrate">
					<a> Grass 2020</a>
					<a href="#" download> Политика конфиденциальности </a>
				</div>
			</div>
		</section>
	</footer>
	<!-- JS -->
	
	<!-- OwlCarousel -->
	<script type="text/javascript" src="modules/OwlCarousel/owl.carousel.min.js"></script>
	<!-- jscarousel -->
	<script type="text/javascript" src="modules/jscarousel/jsCarousel-2.0.0.js"></script>
	<!-- fancybox -->
	<script type="text/javascript" src="modules/fancybox/jquery.fancybox.min.js"></script>
	<!-- Swiper -->
	<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
	<script type="text/javascript" src="modules/maskedinput/jquery.maskedinput.min.js"></script>
	<!-- jQuery.Validation -->
	<script type="text/javascript"
		src=" https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
	<!-- animate -->
	<script src="modules/animate/wow.min.js"></script>
	<script src="js/main.js"></script>
</body>

</html>
