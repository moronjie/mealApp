import React from 'react'
import { useGlobalContext } from '../Context'

function Favorite() {
  const {favoriteMeals, removeFromFavorite} = useGlobalContext()
  return (
    <div>Favorite</div>
  )
}

export default Favorite