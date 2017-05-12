"use strict";

import React from "react";
import { Link } from "react-router";

const Header = () =>
    <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">

            <div className="navbar-header">
                <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#coffeehouses-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                {/* <Link className='navbar-brand' to='/'>CoffeeHouses</Link> */}
            </div>

            <div className="collapse navbar-collapse" id="coffeehouses-menu">
                <ul className="nav navbar-nav" />
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link
                            to="/"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.in"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.in"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;

export default Header;
