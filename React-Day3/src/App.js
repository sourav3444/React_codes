/*
 *  PARCEL IS A BEAST
* File watcher algorithm
*Bundling
*Minify
*cleaning our code
*dev and production build
*superfast build algorithm
*Image optimization
*Caching while developement
*Compression
*Compatable with older version of browser
*HTTPS on DEV
*port Number    
*Consistent Hashing Algorithm
*Zero config
*Tree shaking -Removing unwanted function
*Transitive Dependencies
*
*
*/



import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/header";
import { Footer } from "./components/footer";
import { Body } from "./components/body";

// *React component
// *->functional component
// *->Class Based Component



const AppLayout=()=>{
    return (
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
        
    }
const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>);






















