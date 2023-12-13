import Logo from '../assets/logo-gecko.svg';


const Hero = () => {
  return (
    <header className=" w-full flex flex-col justify-center items-center">
      <nav className="flex items-center justify-between mb-10 pt-3 w-full">
        <img src={Logo} alt="note gecko" className="w-36 object-contain" />
        <button className="black_btn" onClick = {()=>window.open('https://rapidmuse.com')} >
          Rapid Muse
        </button>
      </nav>
      <h1 className="head_text">Summarize articles with <br className="max-md:hidden" />
      <span className="green_gradient">Open AI GPT-4</span></h1>
      <h2 className="desc">Speed up your note taking with note gecko, an open source article summerizer that digests lengthy articles into clear and concise summary.</h2>
    </header>
  )
}

export default Hero