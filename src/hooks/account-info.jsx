import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { httpClient } from "../utils/http-client";

const useAccountInfo = () => {
    const [accountInfo, setAccountInfo] = useState(null);
    const queryString = [`api_secret=${process.env.REACT_APP_CONVERTKIT_API_SECRET}`];

    useEffect(() => {
        const fetchAccountInfo = async () => {
            try {
                const response = await httpClient.get(`account?${queryString}`);
                setAccountInfo(response.data);
            } catch (error) {
                console.error('Error fetching account info:', error);
            }
        };

        fetchAccountInfo();
    }, []);

    return accountInfo


}

export default useAccountInfo;