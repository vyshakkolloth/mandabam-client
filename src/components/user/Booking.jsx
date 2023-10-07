import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { booking ,datePicker} from "../../service/UserApi";
import { showAlertError, showAlertSuccess } from "../../service/showAlert";
import { useDispatch } from "react-redux";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from "react";
import { useState } from "react";
import {BsFlagFill} from"@react-icons/all-files/bs/BsFlagFill"
import ReportVenue from "./ReportVenue";
const Booking = ({ venueid }) => {
  const dispatch = useDispatch();
  const [block, setblock] = useState([])
  useEffect(() => {
    try {
      let id=venueid
      datePicker(id).then((res)=>{
      // console.log(res.data.date,"datepicker")
      if(res.status===200){
        setblock(res?.data?.date)
      }
      
      }).catch((err)=>{
        console.log(err,"datePick")
      })
      
    } catch (error) {
      console.log(error,"try catch")
    }
  
    
  }, [])
  // const blockedDates = [new Date('2023-09-25'), new Date('2023-09-28')];

  const isDateDisabled = (date) => {
    const timeZoneOffsetMinutes = date.getTimezoneOffset();

  // Calculate the adjusted date by subtracting the time zone offset in minutes
  const adjustedDate = new Date(date.getTime() - timeZoneOffsetMinutes * 60000);
    // Format the date as a string in the same format as the blockedDates
    const formattedDate = adjustedDate.toISOString().split('T')[0]+ "T00:00:00.000Z";
    console.log("Formatted Date:", formattedDate);
     console.log("Blocked Dates:", block);
    return block.includes(formattedDate);
  };
  




  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      guest: "",
      type: "",
      Phone: "",
      date: new Date(),
      rooms: "",
      time: "",
    },
    onSubmit: (values, { resetForm }) => {
      booking(values, venueid, "44545")
        .then((res) => {
          resetForm();
          // const message=res.data.message
          console.log(res)
          if (res.data?.auth) {
            // resetForm();
            showAlertSuccess(dispatch,"added sucessfully")
          } else {
            showAlertError(dispatch, " please Sign in");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validationSchema: Yup.object({
      name: Yup.string("must be letters")
        .max(15, "must be 15 char or less")
        .required("required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      guest: Yup.number().required("Number of guests is required"),
      type: Yup.string().required("Function Type is required"),
      Phone: Yup.number()
        .required("Phone number is required")
        .integer("Phone number must be an integer")
        .test(
          "len",
          "Phone number must be exactly 10 digits",
          (val) => val.toString().length === 10
        ),
      rooms: Yup.number().required("Number of rooms is required"),
      date: Yup.date().required("Date of function required"),
    }),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-1">
          <div className=" p-2">
            <div className="">
              <input
                type="text"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                name="name"
                onChange={formik.handleChange}
                className="flex border-b-2 bg-white "
                placeholder="enter your name "
              ></input>
              {formik.errors.name && formik.touched.name ? (
                <label className="text-red-600">{formik.errors.name}</label>
              ) : null}
            </div>
            <div className="mt-2">
              <input
                type="email"
                values={formik.values.email}
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="flex border-b-2 bg-white "
                placeholder="enter your Email "
              ></input>
              {formik.errors.email && formik.touched.email ? (
                <label className="text-red-600">{formik.errors.email}</label>
              ) : null}
            </div>
            <div className="mt-2">
              <input
                type="number"
                values={formik.values.guest}
                onBlur={formik.handleBlur}
                name="guest"
                pattern="[0-9]+"
                className="flex border-b-2 bg-white "
                onChange={formik.handleChange}
                placeholder="No of guest*(min 50)"
              ></input>
              {formik.errors.guest && formik.touched.guest ? (
                <label className="text-red-600">{formik.errors.guest}</label>
              ) : null}
            </div>
            <div className="mt-2">
              <label className="text-black flex">Function Type</label>
              <input
                type="radio"
                name="type"
                value="preWedding"
                onChange={formik.handleChange}
                className="radio radio-error"
                checked={formik.values.type === "preWedding"}
              />{" "}
              <label>Pre wedding</label>
              <input
                type="radio"
                name="type"
                value="wedding"
                onChange={formik.handleChange}
                className="radio radio-error"
                checked={formik.values.type === "wedding"}
              />
              <label>wedding</label>
            </div>
          </div>
          <div className="bg-white p-2">
            <div className="">
              <input
                type="number"
                className="flex border-b-2 bg-white "
                values={formik.values.Phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="Phone"
                placeholder="enter your number "
              ></input>
              {formik.errors.Phone && formik.touched.Phone ? (
                <label className="text-red-600">{formik.errors.Phone}</label>
              ) : null}
            </div>
            <div className="mt-2">
            <DatePicker  name="date" onChange={(date) => formik.setFieldValue("date", date)} format="dd-MM-y"
             value={formik.values.date} minDate={new Date()}  onBlur={formik.handleBlur} tileDisabled={({ date }) => isDateDisabled(date)} />


              {/* <input
                type="date"
                className="flex border-b-2 bg-white "
                values={formik.values.date}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="date"
                placeholder="*Function date"
              ></input> */}
              {formik.errors.date && formik.touched.date ? (
                <label className="text-red-600">{formik.errors.date}</label>
              ) : null}
            </div>
            <div className="mt-2">
              <input
                type="number"
                pattern="[0-9]+"
                className="flex border-b-2 bg-white "
                values={formik.values.rooms}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="rooms"
                placeholder="No of rooms"
              ></input>
              {formik.errors.rooms && formik.touched.rooms ? (
                <label className="text-red-600">{formik.errors.rooms}</label>
              ) : null}
            </div>
            <div className="mt-2">
              <label className="text-black flex">Function Type</label>
              <input
                type="radio"
                name="time"
                value="evening"
                onChange={formik.handleChange}
                className="radio radio-error"
                checked={formik.values.time === "evening"}
              />{" "}
              <label>Evening</label>
              <input
                type="radio"
                name="time"
                value="day"
                onChange={formik.handleChange}
                className="radio radio-error"
                checked={formik.values.time === "day"}
              />
              <label>Day</label>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn m-1">
            {" "}
            Check Avalibality and Price
          </button>
        </div>
      </form>
      <div
      onClick={()=>document.getElementById('my_modal_1').showModal()}
       className=" btn btn-ghost text-red-400 flex justify-center font-bold p-5">
         <BsFlagFill/>Report User 
         </div>
        <ReportVenue venueId={venueid}/>
    </div>
  );
};

export default Booking;
