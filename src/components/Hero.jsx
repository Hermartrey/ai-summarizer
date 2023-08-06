function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          className="w-[2.5rem] object-contain"
          src="https://img.freepik.com/premium-vector/ai-technology-digital-artificial-intelligence-future-circuit-electronic-colorful-vector-logo-design_216988-1080.jpg"
          alt=""
        />
        <button
          type="button"
          onClick={() => window.open("https://github.com/Hermartrey")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source aritlcle summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
}

export default Hero;
