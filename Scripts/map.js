var map;
function initMap ()
  {
  map = new ymaps.Map("yandexmap", {
    center: [56.039017, 92.894853],
    zoom: 16
    });
  }
ymaps.ready(initMap);