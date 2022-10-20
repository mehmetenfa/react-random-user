import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="bosss">
        {data && (
          <div className="flex justify-between items-center flex-col w-[30rem] h-[30rem] mx-auto text-center bg-blue-400 p-4">
            <img
              className="rounded-full w-[9rem]"
              src={data.picture.medium}
              alt={data.name.first}
            />
            <p>{data.name.title} {data.name.first} {data.name.last}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.location.city}-{data.location.country}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
