import { useGlobalContext } from '../Context'


function Meal() {
  const {meal} = useGlobalContext()

  console.log(meal);
  return (
    <section className="section-center">
     {meal.map((singMeal) => {
      const {idMeal, strMeal: title, strMealThumb: image} = singMeal
      return(
        <article className='single-meal' key={idMeal}>
          <img src={image} alt={title} className='img'/>
          <footer>
            <h5>{title}</h5>
            <button className='like-btn'>click me</button>
          </footer>
        </article>
      )
     })}
    </section>
  )
}

export default Meal