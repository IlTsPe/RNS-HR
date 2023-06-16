/* Map */

// ymaps.ready(init);

// function init() {
//   var myMap = new ymaps.Map("map", {
//     center: [59.912026, 30.422444],
//     zoom: 12.1,
//     // Элементы управления
//     controls: []
//   });

//   let myGeoObjects = new ymaps.Placemark([59.912026, 30.422444], {
//     hintContent: 'RNS Family',
//     balloonContent: `
//     <div class="balloon">
//       <div class="balloon__address>Тестовая</div>
//     </div>
//     `
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'img/map.png',
//     iconImageSize: [520, 188],
//     iconImageOffset: [-45, -175]
//   });
//   myMap.geoObjects.add(myGeoObjects);
//   // Возможность изменения масштаба
//   // myMap.behaviors.disable('scrollZoom');
// };

let center = [59.912026, 30.422444];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 17
  });

  let placemark1 = new ymaps.Placemark(center, {
    balloonContent: `

			<div class="balloon">
				<div class="balloon__address" style="padding:41px 61px 32px 35px;">Октябрьская набережная <span class="text--grey">10</span></div>
				<div class="balloon__contacts" style="display:block; padding: 0 0 41px 35px">
					<a href="tel:+79213645155" style="display:block; padding-bottom:21px">+7 <span class="text--grey">921</span> 364-51-55</a><br />
          <a href="mailto:hr@runetsoft.ru"><span class="text--grey">hr</span>@runetsoft.ru</a>
				</div>
        <div class="balloon__social" style="padding: 0 0 41px 35px">
          <a href="#!" target="_blank"><img src="img/svg/telegramNegative.svg"></a>
         <a href="#!" target="_blank"><img src="img/svg/VK.svg"></a>
        </div>
			</div>

		`
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map.png',
    iconImageSize: [520, 188],
    iconImageOffset: [-45, -175]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark1);

  // placemark1.balloon.open();
}

ymaps.ready(init);
