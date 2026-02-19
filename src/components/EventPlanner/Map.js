import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const loadMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      // Create an AdvancedMarkerElement
      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: { lat: -34.397, lng: 150.644 },
        content: document.createElement('div'), // You can customize the content as needed
      });

      // Optionally set the content of the marker
      const markerContent = document.createElement('div');
      markerContent.style.width = '50px';
      markerContent.style.height = '50px';
      markerContent.style.backgroundColor = 'red'; // Customize your marker style
      markerContent.innerHTML = 'Marker';
      marker.setContent(markerContent);
    };

    // Load the Google Maps script
    if (window.google) {
      loadMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="map" style={{ height: '400px', width: '100%' }}></div>
  );
};

export default Map;
