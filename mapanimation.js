/*This array contains the coordinates for all bus stops 
between Univesity Ground and home*/
const busStops = [
    [77.93402470519393,10.280384132461693],
    [77.93045640320979,10.280961577763259],
    [77.92781269096157,10.282666803737113],
    [77.9325119211558,10.28940179225716],
    [77.9378356823805,10.295436089143662],
    [77.9418314704528,10.302367710280508]
  ];
   
  
  mapboxgl.accessToken = 'pk.eyJ1IjoiYXJhdmluZGFyYXYiLCJhIjoiY2t6ZHRocGZiMGEzNzJ1bnk4am13MXRyZiJ9.fUzu-p3u3KS-nApBR8zScg';
   
  
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.93402470519393,10.280384132461693],
    zoom: 14,
  });
   
  
  let counter = 0;
 const marker= new mapboxgl.Marker()
 .setLngLat(busStops[counter])
 .addTo(map);

  
  function move() {
   
    marker.setLngLat(busStops[counter])
    marker.addTo(map)
    counter ++
    setTimeout(move,1000)
}

 