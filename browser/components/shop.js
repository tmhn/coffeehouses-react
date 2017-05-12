"use strict";

import React from "react";
import { Link } from "react-router";
import { Card } from "rebass";

const CoffeeCard = props =>
    <Link className="city" to={props.link}>
        <Card rounded width={"100%"}>
            <div
                className="location"
                style={{ backgroundImage: `url(images/${props.image})` }}
            >
                <p className="heading">
                    {props.name}
                </p>
            </div>
        </Card>
    </Link>;

export default CoffeeCard;
