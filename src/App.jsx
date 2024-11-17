import React, {useState, useEffect, useCallback} from "react";

function App(){
    const[charAllowed, changeCharAllowed]=useState(false);
    const[numAllowed, changeNumAllowed]=useState(false);
    const[passLength, changePassLength]=useState(8);
    const[password, changePassword]=useState('')
    useEffect(()=>{
        let pass='';
        let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if(charAllowed){
            str+="~!@#$%^&*()_+=-:;"
        }
        if(numAllowed){
            str+="1234567890"
        }
        for(let i=0;i<passLength;i++){
            let a=str[Math.floor(Math.random()*str.length)];
            pass+=a;
        }
        changePassword(pass);
    },[charAllowed, numAllowed, passLength])
    const copyPass=useCallback(()=>{window.navigator.clipboard.writeText(password)},[password])
    return(
        <>
            <div className="h-screen w-full bg-slate-700 flex justify-center items-center ">
                <div className="bg-violet-900 w-1/2 flex flex-col py-4 px-4 rounded-lg justify-center items-center text-center gap-5">
                    <h1 className="text-white text-center text-2xl">Password Generator</h1>
                    <div className="w-full">
                        <input type="text" value={password} className="w-4/5 h-8 rounded-l-lg px-2 focus:outline-none focus:border-cyan-600" placeholder="Generate Password" readOnly />
                        <button onClick={copyPass} className="active:scale-50 py-1  bg-green-800 px-4 rounded-r-lg text-white hover:bg-green-900">COPY</button>
                        </div>
                    <div className="flex gap-5 justify-center ">
                        <span className="flex justify-center items-center">
                            <input id="passLength" type="range" min={6} max={20} value={passLength}  className="mr-1" onChange={(e)=>{changePassLength(e.target.value)}}  />
                            <label htmlFor="passLength" className="text-white">length:{passLength}</label>
                        </span>
                        <span className="flex justify-center items-center">
                            <input id="num" type="checkbox" className="mr-1" defaultChecked={numAllowed} onChange={()=>{changeNumAllowed(!numAllowed)}}/>
                            <label htmlFor="num" className="text-white">Number</label>
                        </span>
                        <span className="flex justify-center items-center">
                            <input id="char" type="checkbox" className="mr-1" defaultChecked={charAllowed} onChange={()=>{changeCharAllowed(!charAllowed)}}/>
                            <label htmlFor="char" className="text-white">Character</label>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App
