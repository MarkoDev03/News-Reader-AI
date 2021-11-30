import React, { useLayoutEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles"
import Logo from "./alan.jpg"

const App = () => {

   const [newArticles, setNewsArticles] = useState([])
   const classes = useStyles();

   const alanAIkey = "0cec60ce0293f675fe5785b0dc7bb4b82e956eca572e1d8b807a3e2338fdd0dc/stage";

   useLayoutEffect(() => {
       alanBtn({
           key:alanAIkey,
           onCommand: ({ command, articles }) => {
               if (command === "newHeadlines") {
                   setNewsArticles(articles)
               }
           }
       })
   }, [])


    return (
        <div>
            <div className={classes.logoContainer}>
              <img src={Logo} className={classes.alanLogo} alt="application logo - alan ai"  />
            </div>
            <NewsCards articles={newArticles} />
        </div>
    )
}

export default App