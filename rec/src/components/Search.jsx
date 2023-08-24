import React,{ useState} from 'react'
import { useGlobalContext } from './../Context';

function Search() {
  const {setSearchMeal, fetchRandom} = useGlobalContext()
  const [text, settext] = useState('')

  const handleInput = (e) => {
    settext(e.target.value)
  }
  const handleRandom = () => {
    setSearchMeal("")
    settext("")
    fetchRandom()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text){
      console.log(text);
      setSearchMeal(text)
      settext('')
    }
  }

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter a meal' onChange={handleInput} value={text} className='serach-input'/>
        <button type='submit' className='btn'>serach</button>
        <button type='button' className='btn btn-random' onClick={handleRandom}>random search</button>
      </form>
    </header>
  )
}

export default Search