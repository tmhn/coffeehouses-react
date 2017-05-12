"use strict";

import React from "react";
import { css, StyleSheet } from "aphrodite";
import { REEM_KUFI } from "../helpers/fonts";
import { SLATE } from "../helpers/colors";

const styles = StyleSheet.create({
    banner: {
        paddingBottom: "100px"
    },
    header: {
        fontFamily: REEM_KUFI,
        color: SLATE,
        fontSize: 50,
        textAlign: "center"
    }
});

const Banner = props =>
    <div className={`row ${css(styles.banner)}`}>
        <h1 className={css(styles.header)}>
            {props.heading}
        </h1>
        <div className={css(styles.header)}>
            <p>{props.text}</p>
        </div>
    </div>;

export default Banner;
