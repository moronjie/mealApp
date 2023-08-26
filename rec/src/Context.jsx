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
    const [showModel, setShowModel] = useState(false)
    const [selectedMeal, setselectedMeal] = useState(null)
    const [favoriteMeals, setFavoratesMeals] = useState([])

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


    const addToFavorite = (id) => {
        try {
            const singleMeal = meal.find((singlemeal) => singlemeal.idMeal === id)
            const addedToFavorite = favoriteMeals.find((favorateMeal) => {return favorateMeal.idMeal === singleMeal.idMeal})
            if(addedToFavorite) return 

            setFavoratesMeals([...favoriteMeals, singleMeal])
            console.log(favoriteMeals);
        } catch (error){
            console.log(error.message)
        }
    }
    const removeFromFavorite = (id) => {
        const filterFavorite = favoriteMeals.filter((favorateMeal) => {
            return favorateMeal.idMeal !== id
        })
        setFavoratesMeals(filterFavorite)
    }

    const closeModel = () => {
        setShowModel(false)
    }

    const selectMeal = (id) => {
        let clickedMeal 
        clickedMeal = meal.find((singleMeal) => singleMeal.idMeal === id)
        setselectedMeal(clickedMeal)
        console.log(id);
        setShowModel(true)
    }
    const fetchRandom = () => {
        fetchData(randomMealUrl)
    }

    useEffect(() => {
        fetchData(allMealsUrl)
    },[])

    useEffect(() => {
        if(!searchMeal) return
        fetchData(`${allMealsUrl}${searchMeal}`)
    },[searchMeal])

    
    return(
        <AppContext.Provider value= {{meal, loading, error, setSearchMeal, fetchRandom, selectMeal, closeModel, selectedMeal, showModel, addToFavorite, favoriteMeals, removeFromFavorite}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(AppContext)
}

export {AppContext, AppProvider}
