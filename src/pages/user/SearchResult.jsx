import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { search } from "../../service/UserApi";

const SearchResult = () => {
   const [sortingOrder, setSortingOrder] = useState("asc"); 
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
// console.log(display,"display")
  const toggleSortingOrder = () => {
    const newOrder = sortingOrder === "asc" ? "desc" : "asc";
    setSortingOrder(newOrder);
  };

const sortRecordsByName = (recordsToSort) => {
  return recordsToSort.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (sortingOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });
};

  return (



    <div className="container mx-auto p-5">
      <div className="flex justify-end">
      <label className="btn btn-ghost "  onClick={toggleSortingOrder} >sort by name</label>

      </div>

      {display===true?(
 <div className="   h-[80vh] p-4 border grid grid-cols-3 gap-4 border-b-2 border-pink-600 overflow-auto ">
   {/* // grid grid-cols-3 gap-4 flex flex-wrap */}
 {sortRecordsByName(records)?.map((item, index) => (

<div key={index} class="max-w-md mx-auto bg-white shadow-lg h-fit rounded-xl  overflow-hidden md:max-w-2xl">
  <div class="md:flex" onClick={() => handelClick(item._id)}>
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48"  src={item.image[0]} alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item?.name}</div>
      <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item?.location}</p>
      <p class="mt-2 text-slate-500">{item?.type}</p>
    </div>
  </div>
</div>
  
  //  <div key={index} className=" w-fit">
  //    <div className="card w-96 glass">
  //      <figure>
  //        <img className="w-50 h-50" src={item.image[0]} alt="car!" />
  //      </figure>
  //      <div className="card-body">
  //        <h2 className="card-title">{item?.name} <span> Location:{item?.location}</span></h2>
  //        <p>{item?.type}</p>
  //        <div className="card-actions justify-end">
  //          <button
  //            onClick={() => handelClick(item._id)}
  //            className="btn btn-primary"
  //          >
  //            Learn now!
  //          </button>
  //        </div>
  //      </div>
  //    </div>
  //  </div>
 ))}

{/* <div class="max-w-md mx-auto bg-white h-fit rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/07.jpg" alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div> */}



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
