import React from 'react'
import { useGlobalContext } from '../Context'

function Favorite() {
  const {favoriteMeals, removeFromFavorite, selectMeal} = useGlobalContext()
  return (
    <section className='favorites'>
      <div className='favorite-content'>
        <h5>Favorite Meals</h5>
        <div className='favorites-contaner'>
          {
            favoriteMeals.map((favoriteMeal) => {
              const {idMeal, strMealThumb: img} = favoriteMeal
              return(
                <div className='favorite-item' key={idMeal}>
                  <img src={img} alt="" onClick={() => selectMeal(idMeal)} />
                  <button className='remove-btn' onClick={() => removeFromFavorite(idMeal)}>remove</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Favorite