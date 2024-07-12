import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompt,setPrevPrompt] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const onSent = async (prompt) => {

        setShowResult(true)
        setLoading(true)
        setResultData("")
        setRecentPrompt(input)
        const response = await run(input);
        let newresp = response.split("**");
        let res = "";
        for(let i=0; i<newresp.length; i++){
            if(i === 0||i%2 !== 1){
                res = res + newresp[i];
            }else{
                res = res + "<b>"+newresp[i]+"</b>";
            }
        }
        let res2 = res.split("*").join("</br>")
        setResultData(res2)
        setLoading(false)
        setInput("")

    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }


    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider