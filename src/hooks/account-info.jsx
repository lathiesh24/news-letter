import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { httpClient } from "../utils/http-client";

const useAccountInfo = () => {

    useEffect(() => {
        try {

        } catch (error) {
            console.error('Error fetching account info:', error);
        }

    })


}

export default useAccountInfo;