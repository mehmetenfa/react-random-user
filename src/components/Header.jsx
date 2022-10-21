import React, { useEffect, useState } from "react";
import axios from "axios";
import emailsvg from "../assets/email.svg";
import locationsvg from "../assets/location.svg";
import phonesvg from "../assets/phone.svg";

const Header = () => {
  const [data, setData] = useState(null);

  const getApi = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        console.log(res);
        setData(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center">
      {data ? (
        <div className="w-[30rem] h-[30rem] mx-auto text-center rounded-lg bg-emerald-200  shadow-[0_10px_10px_15px_rgba(0,0,0,0.5)]">
          <div className="flex">
            <div className="img">
              <img
                className="w-[6rem] rounded-full ml-10 mt-5 "
                src={data.picture.medium}
                alt={data.name.first}
              />
            </div>
            <div className="flex justify-center items-center text-center w-[18rem] text-2xl mt-5">
              <h1 className="text-center ml-5">
                {data.name.title} {data.name.first} {data.name.last}
              </h1>
            </div>
          </div>
          <div className="flex">
            <div className="ml-10 mt-10 w-[5rem] flex flex-col justify-center items-center">
              <img className="w-[2rem] mb-8 " src={emailsvg} alt="email" />
              <img className="w-[2rem] mb-8 " src={phonesvg} alt="phone" />
              <img
                className="w-[2rem] mb-8 "
                src={locationsvg}
                alt="location"
              />
            </div>
            <div className="mt-11 flex flex-col text-nceter w-[20rem] gap-10 text-xl">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>
                {data.location.city}-{data.location.country}
              </p>
            </div>
          </div>
          <div className="mt-12 text-xl">
            <p>Age: {data.dob.age}</p>
            <p>Register Date: {data.registered.date.slice(0, 10)}</p>
          </div>
        </div>
      ) : (
        "no data yet"
      )}
      <div>
        <button
          className="bg-cyan-500 text-white m-6 w-[8rem] h-[3rem] rounded hover:bg-slate-200 hover:text-black "
          onClick={() => getApi()}
        >
          Random user
        </button>
      </div>
    </div>
  );
};

export default Header;
