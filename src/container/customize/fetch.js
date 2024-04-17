import React from 'react';
import { useEffect, useState } from 'react';
import { getAllCodeService } from '../../services/userService';

const useFetchAllcode = (type) => {
    const [data, setdata] = useState([])
    useEffect(() => {
        try {
            let fetchData = async () => {
                let arrData = await getAllCodeService(type)
                console.log('23 :', arrData.allcodeData);
                if (arrData && arrData.err === 0) {
                    setdata(arrData.allcodeData.rows)

                }
            }
            fetchData();
        } catch (error) {
            console.log(error)
        }

    }, [])
    return { data }
}
export {
    useFetchAllcode
}