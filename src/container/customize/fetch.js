import React from "react";
import { useEffect, useState } from "react";
import {
  getAllCodeService,
  getAllCodeServiceByType,
} from "../../services/userService";

const useFetchAllcode = (type) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    try {
      let fetchData = async () => {
        let arrData = await getAllCodeServiceByType(type);
        console.log("arrData.allcodeData :", arrData.allcodeData);
        console.log("arrData :", arrData);
        console.log("arrData.data.rows :", arrData.data.rows);
        if (arrData && arrData.errCode === 0) {
          setdata(arrData.data);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { data };
};
export { useFetchAllcode };
