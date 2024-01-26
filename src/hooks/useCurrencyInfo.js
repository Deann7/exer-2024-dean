import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [currentTime, setCurrentTime] = useState(new Date().getTime());

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json?_=${currentTime}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                setCurrentTime(new Date().getTime()); 
            });
    }, [currency, currentTime]);

    return data;
}

export default useCurrencyInfo;
