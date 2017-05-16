"use strict";

import React from "react";
import { Link } from "react-router";
import CoffeeCard from "./coffee_card";

const City = props =>
    <CoffeeCard link={props.link} image={props.image} name={props.name} />;

export default City;
