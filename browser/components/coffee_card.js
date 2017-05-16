"use strict";

import React from "react";
import { Link } from "react-router";
import { Card } from "rebass";
import { css, StyleSheet } from "aphrodite";
import { BLANC, NOIR } from "../helpers/colors";
import { REEM_KUFI } from "../helpers/fonts";

const styles = StyleSheet.create({
    city: {
        textDecoration: "none",
        color: NOIR
    },
    location: {
        height: "380px",
        width: "100%",
        position: "relative",
        backgroundPosition: "center center",
        backgroundRepeat: "none",
        display: "inline-block",
        verticalAlign: "top",
        backgroundSize: "cover"
    },
    heading: {
        textAlign: "center",
        color: BLANC,
        paddingTop: "160px",
        fontFamily: REEM_KUFI,
        fontSize: "30px",
        fontWeight: 400,
        textDecoration: "none"
    }
});

const CoffeeCard = props =>
    <Link className={css(styles.city)} to={props.link}>
        <Card rounded width={"100%"}>
            <div
                className={css(styles.location)}
                style={{ backgroundImage: `url(images/${props.image})` }}
            >
                <p className={css(styles.heading)}>
                    {props.name}
                </p>
            </div>
        </Card>
    </Link>;

export default CoffeeCard;
