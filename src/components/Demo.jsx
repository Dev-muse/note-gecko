import { useState, useEffect } from "react";
import { useLazyGetSummaryQuery } from "../services/article";
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  // will save all articles in local storage for search history function
  const [allArticles, setAllArticles] = useState([]);

  // copy previous searches
  const [copied, setCopied] = useState("");

  // GETTING articles from local storge
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("getArticles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  // get articles from rapid api call
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // on form submit update article state and local storage
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    // if we get data from api exists
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      // update current local storage with all articles
      // localstorage on stores strings so need to stringify
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleChange = (e) => {
    setArticle({ ...article, url: e.target.value });
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    // clear it after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section className="mt-16 max-w-xl w-full">
      {/* searchbar */}
      <div className="flex flex-col w-full gap-2">
        <form
          onSubmit={handleSubmit}
          className="relative flex
         items-center justify-center"
        >
          <img
            src={linkIcon}
            alt="link icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter url"
            className="url_input peer"
            onChange={handleChange}
            value={article.url}
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            &#x23CE;
          </button>
        </form>
        {/* show browsed links history */}

        <div className="flex flex-col max-h-60 gap-1 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              className="link-card"
              onClick={() => setArticle(item)}
            >
              {/* allow us to copy url */}
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img
                  className="w-[40%] h-[40%] object-contain"
                  src={copied === item.url ? tick : copy}
                  alt="copy icon"
                />
              </div>

              <p className="flex-1 font-satoshi text-emerald-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* display results */}

      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-center text-black">
            Well that wasn't supposed to happen... <br />
            <span className="font-satoshi font-normal text-slate-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="green_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-slate-700">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
