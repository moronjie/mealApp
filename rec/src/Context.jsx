import React, { useEffect, useState } from "react"
import axios from "axios"

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'



const AppProvider = ({children}) => {

    const [meal, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [searchMeal, setSearchMeal] = useState('')

    const fetchData = async (url) => {
        setLoading(true)
        try {
            const {data} = await axios(url)
            if(data.meals){
                setMeals(data.meals)
            }else{
                setMeals([])
            }
            
        } catch (error) {
            setError(true)
        }
       setLoading(false)
    }
    

    useEffect(() => {
        fetchData(`${allMealsUrl}${searchMeal}`)
    },[])

    
    return(
        <AppContext.Provider value= {{meal, loading, error, setSearchMeal}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(AppContext)
}

export {AppContext, AppProvider}
