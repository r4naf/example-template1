/*
Zykin Yuriy, 
yurazsoft@gmail.com,
26 oct 2019
*/

function generateText(id){
	let s='';
	
	if (id==1){
		s='<h1>Здравствуйте!</h1>';
		s+='<h4>Если вам не удобен цвет фона под этим текстом - просто нажмите F5.</h4>';
		s+='Это пример разработки шаблона для одностраничного сайта с перемещением по одной странице. Навигация через меню вверху, или в мобильном варианте через меню-кнопку. Написано 27 октября 2019г. Используемые технологии: JS (+JQuery), CSS, HTML. Работает на веб сервере Apache или node.js с SSL на сервере с ОС CentOS, поднятый на виртуальном сервере в Европе. ';
		s+='<br><br>99% написано с нуля, с клавиатуры, в том числе т.н. слайдер - переключение фотографий (показываются в случайном порядке), проще реализацию показов просто не придумать! Т.к. у свойства background-image не применить никакую анимацию, сделал просто fadeOut / fadeIn. Интерфейс как для браузера на ПК так и для смартфона, портретная или альбомная ориентация. Опробован в работе на всех браузерах. Любые изменения могу с легкостью дописать, добавить, видоизменить, изменить принцип работы. Тут 15 блоков, их может быть от 1 до бесконечности, меняется всего одна цифра... В каждом блоке может быть любой контент, формы обратной связи, калькуляторы, картинки, карты...';
		s+='<br><br>Основные мои технологии: SQL (MSSQL, Oracle, MySQL и т.п.), Node.js, PHP, JS (+JQuery), CSS (+Bootstrap 4). Обработка больших объемов данных (более 100Гб) средствами SQL. Это на сегодняшний день. А ещё много другого, например 20+ лет Delphi, но на нём практически сейчас не пишу.';
		s+='<br>Интеграция всех работ с ftp, SSL, сокетами, с сайтами типа mail.ru, с CMS типа WordPress и т.п.';
		s+='<br>Для BackEnd совсем любые действия, в т.ч. асинхронные действия любой вложенности. Предпочитаю Node.js, немного Go, но на практике 99% получается PHP (заставляют на нём)';
		s+='<br>Для FrontEnd плавно перехожу на веб компоненты Vue, Angular. Но с Angular пока на уровне теории, т.к. загрузка на 100% различными проектами на PHP и JS, а с PHP на Angular не поработаешь...';
		s+='<br><br>На чистом CSS обеспечиваю корректного отображение сайтов:';
		s+='<br>-на ПК для любого разрешения (создаётся по 2-4 интерфейса в зависимости от ширины экрана)';
		s+='<br>-для мобильных устройств отображение как под портретный режим так и под альбомный';
		s+='<br>Работа с картографическими системами Google, Yandex, Leaflet, создание своих собственных карт под все масштабы, нарезка tiles из космических снимков (GeoTIFF, 500-1000мб один снимок) и т.п.';
		s+='<br>Предпочитаю в работах получать моментальное уведомление об изменении (без POST и GET!) и показывать изменение, с перерисовкой карт (движение автобусов на карте и т.п.) или добавление строк в таблицы и т.п., пользователю не приходится нажимать F5 и т.п. Приложение-страница (SPA, Single Page Application) становится как "телевизор" с показом динамики в realTime.';
		s+='<br>Устанавливаю Linux (CentOS и т.п.) на удалённый сервер, конфигурирую, запускаю службы и сервисы, обновляю ПО. Ставлю Webmin - визуальная панель управления моими доменами на этом сервере. Запуск заданий в cron, отчеты по таймеру на SQL серверах, службы в фоне, любые логи alert и event о работе. Обеспечиваю SSL ключами все свои вебсерверами, без SSL не работаю.';
		s+='<br>С мобильными ОС. Писал для себя локальные калькуляторы для Android в Android Studio. В приоритете - работа над сетевыми мобильными приложениями. А пока что "Заход" на мобильность сделал с BackEnd.';
		s+='<br><br>Зыкин Юрий Геннадьевич, г.Киров';
		s+='<br>Email для связи: <a href="mailto:yuraz@bk.ru">yuraz@bk.ru</a>';
		s+='<br>27 октября 2019г.';
	} else 
	{
	s='<h1>Блок '+id+'</h1>';
	s+='<div class="sliderMain">';
	s+="<div class=\"sliderInside\" id=\"sliderInside"+id+"\" style=\"background-image: url('pic/pic0"+randomInt(0,9)+".jpg');\">";
	s+='<span class="sliderBtn sliderLeftBtn"><a href="#" onclick="sliderBtnClick('+id+',1)">&#8592;</a></span>';
	s+='<span class="sliderBtn sliderRightBtn"><a href="#" onclick="sliderBtnClick('+id+',2)">&#8594;</a></span>';
	s+='</div>';
	s+='</div>';
	for(var i=0;i<randomInt(10,45);i++){
		s+='news '+id+', string '+(i+1)+'<br>';
	}
	}
	return s;
}

function getColor(){
	return '#'+'0123456789abcdef'.split('').map(function(v,i,a){return i>5 ? null : a[Math.floor(Math.random()*16)]}).join('');
}

function generateLink(id){
	return '<a class="animate-link" href="#infoblock'+id+'">Блок '+id+'</a>';
}

function generateLinkMenu(id){
	return '<a class="animate-link" href="#infoblock'+id+'">Блок '+id+'</a><br>';
}

function randomInt(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

function generateInfoblock(id){
	return '<div class="infoblock" id="infoblock'+id+'" style="background-color: '+getColor()+';"><div class="infoblockinto">'+generateText(id)+'</div></div>';
}

function roundTo0(num) {
	return +(Math.round(num + "e+0")  + "e-0");
}

function sliderBtnClick(id, side){
	console.log(id, side);

	$('#sliderInside'+id).fadeOut(300, function () {
		$('#sliderInside'+id).css('background-image', 'url("pic/pic0'+randomInt(0,9)+'.jpg")');
		$('#sliderInside'+id).fadeIn(100);
	});
}