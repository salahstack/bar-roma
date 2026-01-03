/**
 * Map modules
 */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
/**
 * Icons
 */
import { ArrowRight } from 'lucide-react';
/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Components
 */
import { Button } from './Button';

const SHOP_POSITION: LatLngExpression = [40.74721, 14.64332];

const customMarker: L.DivIcon = L.divIcon({
  className: '',
  html: `
    <svg width="64" height="64" viewBox="0 0 24 24" fill="#b1122b">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.4 7 13 7 13s7-7.6 7-13c0-3.9-3.1-7-7-7z"/>
      <circle cx="12" cy="9" r="3" fill="white"/>
    </svg>
  `,
  iconSize: [64, 64],
  iconAnchor: [32, 64],
});

const GOOGLE_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP_POSITION[0]},${SHOP_POSITION[1]}`;

const MapWithDirections: FC = () => {
  return (
    <div className='relative w-full max-w-xl h-105 max-h-105 overflow-hidden rounded-2xl border-4 border-yellow-500/70 mx-auto mb-5'>
      {/* Map */}
      <MapContainer
        center={SHOP_POSITION}
        zoom={13}
        zoomControl={true}
        className='max-w-xl h-105 max-h-105'
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

        <Marker
          position={SHOP_POSITION}
          icon={customMarker}
        >
          <Popup>
            <strong>Bar Roma</strong>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Directions Button */}
      <Button
        to={GOOGLE_DIRECTIONS_URL}
        rel='noopener noreferrer'
        classes='absolute bottom-6 right-6 z-1000 gap-3 rounded-3xl h-12'
      >
        <ArrowRight className='h-5 w-5' />
        Indicazioni
      </Button>
    </div>
  );
};

export default MapWithDirections;
