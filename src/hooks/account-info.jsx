import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { httpClient } from "../utils/http-client";

const useAccountInfo = () => {

    useEffect(() => {

        const fetchAccountInfo = async () => {
            try {
                const response = await httpClient.get(``)
            } catch (error) {
                console.error('Error fetching account info:', error);
            }
        }


    })


}

export default useAccountInfo;