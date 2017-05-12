"use strict";

import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Main = props =>
    <div>
        <div className="container">
            <Header />
        </div>
        <div className="container">
            {props.children}
        </div>
        <div className="container">
            <Footer />
        </div>
    </div>;

export default Main;
