import {useState,useEffect} from 'react';
import {useLazyGetSummaryQuery} from '../services/article'
import { copy,linkIcon,loader,tick} from '../assets';



const Demo = () => {
  const [article, setArticle] = useState({
    url: '', summary: ''
  })


const [getSummary,{error,isFetching}] = useLazyGetSummaryQuery()

  const handleSubmit  = async (e)=>{
    e.preventDefault()
    
  }

  const handleChange = (e)=>{
    setArticle({...article,url: e.target.value})
  }
  return (
    <section className="mt-16 max-w-xl w-full">
      {/* searchbar */}
      <div className="flex flex-col w-full gap-2">
        <form onSubmit={handleSubmit} className="relative flex
         items-center justify-center">
          <img src={linkIcon} alt="link icon" className="absolute left-0 my-2 ml-3 w-5" />
          <input type="url" placeholder="Enter url" className="url_input peer"
          onChange={handleChange} value={article.url} required />
          <button type="submit" className="submit_btn text-2xl
          peer-focus: border-gray-700 peer-focus:text-gray-700">&#x23CE;</button>
        </form>
        {/* show browsed linked history */}

      </div>
      {/* display results */}
    </section>
  )
}

export default Demo