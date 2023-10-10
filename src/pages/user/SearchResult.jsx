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
 <div className="   max-h-[80vh]  flex flex-wrap justify-between gap-2  overflow-y-scroll ">
   {/* // grid grid-cols-3 gap-4 flex flex-wrap */}
 {sortRecordsByName(records)?.map((item, index) => (



      <div key={index} className="card w-96 max-h-96 bg-base-100 shadow-2xl hover:cursor-grabbing ">
        <figure><img className="img"  src={item.image[0]}  alt="Shoes" />
        </figure>
        <div className="card-body"> <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item?.name}</div>
        <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item?.location}</p>
          <p class="mt-2 text-slate-500">{item?.type}</p>

          <div className="card-actions justify-end">
            <button  onClick={() => handelClick(item._id)} className="btn btn-info"> Explore </button>
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
