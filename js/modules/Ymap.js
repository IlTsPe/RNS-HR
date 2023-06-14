/* Map */

function mapYandex() {
  const addressStit = document.createElement('p');
  addressStit.setAttribute('style', 'margin-bottom: 30px; color:black')
  const addressRNS = addressStit.innerHTML = `Октябрьская набережная, <span style="color: #9EA5A9;"> 10</span>`;


  const numberRNS = document.createElement('p');
  const numbe = numberRNS.innerHTML = `+7 921 364-51-55`;

  const mailRNS = document.createElement('p');
  const mail = mailRNS.innerHTML = `hr@runetsoft.ru`;

  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [59.912026, 30.422444],
      zoom: 12.1,
      // Элементы управления
      controls: []
    });

    var myGeoObjects = [];

    myGeoObjects = new ymaps.Placemark([59.912026, 30.422444], {
      hintContent: 'RNS Family',
      balloonContent: `${addressRNS} <br> ${numbe} <br> ${mail}`,
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map.png',
      iconImageSize: [520, 188],
      iconImageOffset: [-45, -175]
    });

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Возможность изменения масштаба
    // myMap.behaviors.disable('scrollZoom');
  };
};

export default mapYandex;
