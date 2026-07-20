import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';

// Using a subset of the data for demonstration
const nationalRegistryData = [
  { name: "Ruwanwelisaya Stupa", type: "Buddhist Temple / Shrine", period: "Anuradhapura Period", lat: 8.3507, lng: 80.3963, district: "Anuradhapura", province: "North Central", desc: "A colossal hemispherical brick masterpiece built by King Dutugemunu in 140 BC." },
  { name: "Sigiriya Rock Fortress", type: "Fortress / Citadel", period: "Historical Era", lat: 7.9570, lng: 80.7603, district: "Matale", province: "Central", desc: "The iconic 5th-century palace citadel and urban landscape complex." },
  { name: "Galle Dutch Fort", type: "Fortress / Citadel", period: "Colonial Period", lat: 6.0264, lng: 80.2161, district: "Galle", province: "Southern", desc: "An extensive living fort city built by the Portuguese and Dutch." }
];

const MapSection = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setPanelOpen(true);
  };

  const closePanel = () => {
    setPanelOpen(false);
  };

  // Filter data for the panel based on selection (if any)
  const filteredData = selectedDistrict 
    ? nationalRegistryData.filter(site => site.district === selectedDistrict)
    : [];

  return (
    <section id="explore" className="bg-cream py-[80px] px-[40px] relative overflow-hidden">
      <div className="text-left mb-[40px] relative z-10 pl-[20px]">
        <p className="text-gold text-[0.72rem] font-bold tracking-[3px] uppercase mb-3">EXPLORE BY MAP</p>
        <h2 className="font-serif text-[2rem] text-text-dark font-bold">Find The Heritage By Province</h2>
      </div>

      <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.2)] h-[82vh] min-h-[580px]">
        <div className="flex w-full h-full relative">
          
          {/* Map details panel */}
          <aside className={`w-[440px] h-full bg-[#161614] border-r border-border p-[25px] flex flex-col absolute left-0 top-0 z-[1000] shadow-[8px_0_35px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${panelOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button 
              onClick={closePanel}
              className="bg-transparent border border-gold text-gold px-4 py-2 font-bold rounded cursor-pointer mb-5 w-fit transition-all duration-300 hover:bg-gold hover:text-[#0f0f0e]"
            >
              ✕ Close Details
            </button>
            <div className="mb-5">
              <h2 className="text-gold text-[1.4rem] mb-1.5 font-serif font-bold">Archaeological Registry</h2>
              <p className="text-[#a6a69e] text-[0.85rem] mb-5 tracking-[0.5px]">PROTECTED ANTIQUITIES ORDINANCE • SRI LANKA</p>
            </div>
            
            <div className="flex-grow overflow-y-auto pr-1.5 custom-scrollbar">
              {filteredData.length > 0 ? (
                filteredData.map((site, i) => (
                  <div key={i} className="bg-[#1f1f1c] border-l-4 border-gold rounded-md p-5 mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
                    <span className="block text-[0.75rem] text-gold font-bold uppercase mb-2.5">{site.type}</span>
                    <h3 className="text-gold mb-1 text-[1rem] font-serif font-bold">{site.name}</h3>
                    <p className="text-[#a6a69e] text-[0.9rem] leading-[1.6] text-justify mb-3">{site.desc}</p>
                    <table className="w-full border-collapse text-[0.85rem]">
                      <tbody>
                        <tr>
                          <th className="text-left text-gold py-1.5 pr-2.5 border-b border-border whitespace-nowrap w-[35%]">District</th>
                          <td className="text-white py-1.5 border-b border-border">{site.district}</td>
                        </tr>
                        <tr>
                          <th className="text-left text-gold py-1.5 pr-2.5 border-b border-border whitespace-nowrap w-[35%]">Period</th>
                          <td className="text-white py-1.5 border-b border-border">{site.period}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))
              ) : (
                <div className="text-white p-4">Select a marker on the map to see details here, or no sites found for selection.</div>
              )}
            </div>
          </aside>

          {/* Map View */}
          <main className={`flex-grow h-full relative transition-all duration-500 ${panelOpen ? 'ml-[440px]' : 'ml-0'}`}>
            <MapContainer 
              center={[7.8731, 80.7718]} 
              zoom={7} 
              style={{ height: "100%", width: "100%", background: "#0c0c0a" }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              <MarkerClusterGroup>
                {nationalRegistryData.map((site, index) => (
                  <Marker 
                    key={index} 
                    position={[site.lat, site.lng]}
                    eventHandlers={{
                      click: () => handleDistrictSelect(site.district),
                    }}
                  >
                    <Popup>
                      <strong>{site.name}</strong><br/>
                      {site.district} District
                    </Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </MapContainer>
            <div className="absolute top-[15px] right-[15px] z-[900] bg-[#161614]/90 border border-gold text-gold py-2 px-3.5 rounded-md text-[0.8rem] font-bold tracking-[0.5px]">
              {nationalRegistryData.length} Sites Loaded
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
