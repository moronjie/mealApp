import React, { useEffect, useState } from "react"
import axios from "axios"

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'



const AppProvider = ({children}) => {

    const [meal, setMeals] = useState([])

    const fetchData = async (url) => {
        const {data} = await axios(url)
        setMeals(data.meals)
    }
    

    useEffect(() => {
        fetchData(allMealsUrl)
    },[])

    
    return(
        <AppContext.Provider value= {{meal}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(AppContext)
}

export {AppContext, AppProvider}
