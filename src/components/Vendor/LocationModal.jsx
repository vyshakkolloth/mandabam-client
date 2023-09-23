import React, { useEffect, useRef, useState } from 'react'
import ReactMapGL from 'react-map-gl';


const LocationModal = () => {
  const [viewport, setViewport] = React.useState({
    width: '100%',
    height: '400px',
    latitude: 37.7577, // Initial latitude
    longitude: -122.4376, // Initial longitude
    zoom: 10, // Initial zoom level
  });
  return (
    <>
     <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                    <div className="mockup-window border border-base-300">
                            <div className="flex justify-center px-4 py-16 border-t border-base-300">
                                
                                
                            <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      onViewportChange={(newViewport) => setViewport(newViewport)}
    />
                                
              
                                
                                
                                
                                </div>
                          </div>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>

    </>
  )
}

export default LocationModal