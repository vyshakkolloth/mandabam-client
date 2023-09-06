import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { search } from "../../service/UserApi";

const SearchResult = () => {
  const [display, setdisplay] = useState(false)
  const [data, setdata] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const value = location?.state;
  const id = value?.query;

  //pagniation
  const [currentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setcurrentPage(currentPage + 1);
    }
  };

  // =========

  useEffect(() => {
    try {
      search(id)
        .then((res) => {
          console.log(res.status);
          console.log(res.data);

          if (res.status === 200) {
            setdata(res?.data?.data);
            setdisplay(true)
          }else{
            setdisplay(false)
          }
        })
        .catch((err) => {
          console.log(err,"tryCatch");
          if(err.message=="Network Error"){
            navigate("/500")
          }
        });
    } catch (error) {
      console.warn(error);
    }
  }, []);
  const handelClick = (id) => {
    navigate("/details", { state: { query: id } });
  };
console.log(display,"display")
  return (
    <div className="container mx-auto">
      {display===true?(
 <div className="flex gap-4 flex-nowrap h-screen p-4 border overflow-clip border-b-2 border-pink-500 ">
 {records?.map((item, index) => (
   <div key={index}>
     <div className="card w-96 glass">
       <figure>
         <img className="w-50 h-50" src={item.image[0]} alt="car!" />
       </figure>
       <div className="card-body">
         <h2 className="card-title">{item?.name} <span> Location:{item?.location}</span></h2>
         <p>{item?.type}</p>
         <div className="card-actions justify-end">
           <button
             onClick={() => handelClick(item._id)}
             className="btn btn-primary"
           >
             Learn now!
           </button>
         </div>
       </div>
     </div>
   </div>
 ))}
</div>
      ):(
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: 'url("/images/ResultNotFound.jpg")' }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-red-700 font-bold">
              No Result found
            </h1>
          </div>
        </div>
      </div>
      )}
     
      
      <div className="flex justify-center">
        <div className="join mx-auto">
          <button className="join-item btn" onClick={prePage}>
            «
          </button>
          <button className="join-item btn">Page {currentPage}</button>
          <button className="join-item btn" onClick={nextPage}>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
