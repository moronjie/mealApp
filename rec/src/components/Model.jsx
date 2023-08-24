import React from 'react'
import { useGlobalContext } from '../Context'

function Model() {

  const {closeModel, selectedMeal} = useGlobalContext()
  const {idMeal: id, strMeal: title, strInstructions: des, strMealThumb: img, strSource: source} = selectedMeal
  return (
    <aside className='model-container'>
      <div className='content-container'>
        <img src={img} alt={title} className='img model-img' />
        <div className='model-content'>
          <h4>{title}</h4>
          <p>Cooking Instruction</p>
          <p>{des}</p>
          <a href={source} target='_blank' className='soure-link'>Original Source</a>
        <button onClick={closeModel} className="btn close-btn btn-hipster">close</button>
        </div>
      </div>
    </aside>
  )
}

export default Model