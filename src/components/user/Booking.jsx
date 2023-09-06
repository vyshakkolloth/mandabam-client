import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { booking } from "../../service/UserApi";
import { showAlertError, showAlertSuccess } from "../../service/showAlert";
import { useDispatch } from "react-redux";
const Booking = ({ venueid }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      guest: "",
      type: "",
      Phone: "",
      date: "",
      rooms: "",
      time: "",
    },
    onSubmit: (values, { resetForm }) => {
      booking(values, venueid, "44545")
        .then((res) => {
          // const message=res.data.message
          console.log(res)
          if (res.data?.auth) {
            resetForm();
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
              <input
                type="date"
                className="flex border-b-2 bg-white "
                values={formik.values.date}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="date"
                placeholder="*Function date"
              ></input>
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
    </div>
  );
};

export default Booking;
