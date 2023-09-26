import React, { useEffect, useRef, useState } from 'react';






const LocationModal = () => {



  
  return (
    <>
     <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                    <div className="mockup-window border border-base-300">
                            <div className="flex justify-center px-4 py-16 border-t border-base-300">
                                
                            
                                                          
                                
                                
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