"use strict";

import React from "react";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    footer: {
        paddingTop: 60,
        paddingBottom: 100,
        fontFamily: "Reem Kufi"
    },
    hr: {
        width: "100%"
    },
    header: {
        color: "#7B7B82",
        textAlign: "center"
    },
    link: {
        color: "#24CC82"
    }
});

const Footer = () =>
    <div className={`container ${css(styles.footer)}`}>
        <hr className={css(styles.hr)} />
        <div>
            <h4 className={css(styles.header)}>
                Crafted by
                {" "}
                <a href="http://tmhn.io" className={css(styles.link)}>Tom</a>
                {" "}
                - 2017
            </h4>
        </div>
    </div>;

export default Footer;
