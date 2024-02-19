import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    //we want to call api we can do it by fetch but we want when somebody call this hook then only that api will call there for we are using useEffect hook here.
    
    const [data , setData] = useState({})
    
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((resp) => setData(resp[currency]))
            console.log(data);
    } , [currency])
    console.log(data);
    return data

    //when some change occure in dependencies array elements then callback function are invoked
} 
 
export default useCurrencyInfo;