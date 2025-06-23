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
          } else {
            setdisplay(false)
          }
        })
        .catch((err) => {
          console.log(err, "tryCatch");
          if (err.message == "Network Error") {
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



    <div className="container mx-auto p-5 ">
      <div className="flex justify-end">
        <label className="btn btn-ghost " onClick={toggleSortingOrder} >sort by name</label>

      </div>

    <div className="min-h-[60vh] pt-4" >
        {display === true ? (
        <div className="   flex flex-wrap justify-center sm:justify-between sm:flex-row items-center gap-y-4 sm:gap-[2rem] ">
          {/* // grid grid-cols-3 gap-4 flex flex-wrap */}
          {sortRecordsByName(records)?.map((item, index) => (



            <div key={index} className="card w-[19rem] h-[20rem] sm:w-[20rem] overflow-hidden sm:h-[25rem]  bg-base-100 shadow-2xl shadow-slate-600/70 ring-2 ring-pink-400/20 hover:cursor-default ">
              < div className="h-[10rem]"><img className="w-full h-full" src={item.image[0]} alt="Shoes" />
              </div>
              <div className="card-body gap-1 sm:gap-2"> 
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item?.name}</div>
                <p class="  text-lg leading-tight font-medium text-black hover:underline">{item?.location}</p>
                <p class=" text-slate-500 truncate">{item?.type}</p>

                <div className="card-actions justify-end">
                  <button onClick={() => handelClick(item._id)} className="btn btn-info"> Explore </button>
                </div>
              </div>
            </div>



          ))}





        </div>
      ) : (
        <div
          className=" h-[60vh]  bg-contain bg-no-repeat bg-center rounded-lg  relative"
          style={{ backgroundImage: 'url("/images/ResultNotFound.jpg")' }}
        >

          <div className=" text-center text-neutral-content">

            <h1 className="mb-5 sm:text-4xl text-red-700 font-bold">
              No Result found
            </h1>

          </div>
        </div>
      )}
    </div>


      <div className="flex justify-center mt-4">
        <div className="join mx-auto">
          <button className="join-item btn" onClick={prePage}>
            «
          </button>
          <button className="join-item btn">Page : {currentPage}</button>
          <button className="join-item btn" onClick={nextPage}>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
