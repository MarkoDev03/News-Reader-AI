import React, { useLayoutEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {

   const alanAIkey = "0cec60ce0293f675fe5785b0dc7bb4b82e956eca572e1d8b807a3e2338fdd0dc/stage";

   useLayoutEffect(() => {
       alanBtn({
           key:alanAIkey,
           onCommand: ({ command }) => {
               if (command === "testCommand") {
                   alert("Test command is executed")
               }
           }
       })
   }, [])

    return (
        <div>
            ALAN AI
        </div>
    )
}

export default App