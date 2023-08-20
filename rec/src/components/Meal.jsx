import { useGlobalContext } from '../Context'
import {BsHandThumbsUp} from 'react-icons/bs'


function Meal() {
  const {loading, error, meal} = useGlobalContext()

  if(loading) {
    return(
      <section className='section'>
        <h4>Loading...</h4>
      </section>
    )
  }
  if(meal.lenght < 1) {
    return(
      <section className='section'>
        <h4>no meal found...</h4>
      </section>
    )
  }

  if(error) {
    return(
      <section className='section error'>
        <h4>An error occured while runnning this page!!!</h4>
        <h4>Please reload your page or check your internet connection</h4>
      </section>
    )
  }


  return (
    <section className="section-center">
     {meal.map((singMeal) => {
      const {idMeal, strMeal: title, strMealThumb: image} = singMeal
      return(
        <article className='single-meal' key={idMeal}>
          <img src={image} alt={title} className='img'/>
          <footer>
            <h5>{title}</h5>
            <button className='like-btn'><BsHandThumbsUp/></button>
          </footer>
        </article>
      )
     })}
    </section>
  )
}

export default Meal