import React, { useLayoutEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const App = () => {

   const [newArticles, setNewsArticles] = useState([])

   const alanAIkey = "0cec60ce0293f675fe5785b0dc7bb4b82e956eca572e1d8b807a3e2338fdd0dc/stage";

   useLayoutEffect(() => {
       alanBtn({
           key:alanAIkey,
           onCommand: ({ command, country }) => {
               if (command === "newHeadlines") {
                   setNewsArticles(country)
               }
           }
       })
   }, [])

    return (
        <div>
            <NewsCards articles={newArticles} />
        </div>
    )
}

export default App