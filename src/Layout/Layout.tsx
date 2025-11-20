import type { JSX } from "react";
import Menu from "../components/Menu";

interface Props{
    title:string
    children: JSX.Element
}

function Layout({title, children}:Props) {
    return ( 
        <>
            <html lang="en">
            <head>
                <title>{title}</title>
            </head>
            <body>
                <Menu />
                {children}
            </body>
            </html>
        </>
     );
}

export default Layout;