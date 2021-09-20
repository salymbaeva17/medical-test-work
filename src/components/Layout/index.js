import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({children}) => {
    return (
        <>

                <Header/>
                <main className="main">
                    <aside>
                        Hallo! Mein Name ist Aitolkun. Ich komme aus Kirgizistan, aus Bischkek.
                    </aside>
                    <div className="container">{children}</div>
                </main>
                <Footer/>


        </>
    );
};

export default Layout;