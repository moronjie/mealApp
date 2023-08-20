import React,{ useState} from 'react'
import { useGlobalContext } from './../Context';

const {setSearchMeal} = useGlobalContext

function Search() {
  const [text, settext] = useState('')

  const handleInput = (e) => {
    settext(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text){
      setSearchMeal(text)
      settext('')
    }
  }

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter a meal' onChange={handleInput} value={text} className='serach-input'/>
        <button type='submit' className='btn'>serach</button>
        <button type='button' className='btn btn-random'>random search</button>
      </form>
    </header>
  )
}

export default Search