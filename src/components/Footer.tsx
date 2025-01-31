import React from "react";

export default function Footer (){
    return(

    <footer className="flex justify-center items-center py-0 bg-black bg-opacity-40 text-sm">
        
        <p>&copy; {new Date().getFullYear()} Ammar. All rights reserved.</p>
    
    </footer>

    );
}