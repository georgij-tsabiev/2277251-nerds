/* Карта */

/* let ymaps;
const mapWrapper = document.querySelector('.page__map');
const mapImage = document.querySelector('.map__image');
const center = [59.91337456420126,30.331390999999872];
const pinSize = [15, 23];
const pinOffset = [-10, -25];
const zoom = 14;

mapWrapper.classList.remove('map--no-js');
mapImage.classList.remove('map__image--no-js');

function init() {
  const map = new ymaps.Map('map', {
    center: center,
    zoom: zoom
  });

  const placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/icons/stack.svg#map-pin',
    iconImageSize: pinSize,
    iconImageOffset: pinOffset
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
  map.geoObjects.add(placemark);
}

ymaps.ready(init); */

const screenWidth = window.screen.width;
const mapWrapper = document.querySelector('.map__wrapper');
const mapImage = document.querySelector('.map__image');
const center = [59.96832206412432,30.31735949999995];
let pinSize = [];
let pinOffset = [];
const zoom = 15;
let ymaps;

mapWrapper.classList.remove('map__wrapper--no-js');
mapImage.classList.remove('map__image--no-js');

if (screenWidth < 768) {
  pinSize = [115, 90];
  pinOffset = [-20, -95];
} else {
  pinSize = [231, 190];
  pinOffset = [-45, -190];
}

function init() {
  const map = new ymaps.Map('map', {
    center: center,
    zoom: zoom
  });

  const placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/icons/stack.svg#map-pin',
    iconImageSize: pinSize,
    iconImageOffset: pinOffset
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
  map.geoObjects.add(placemark);
}

ymaps.ready(init);
