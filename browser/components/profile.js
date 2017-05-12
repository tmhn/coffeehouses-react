"use strict";

import React, { Component } from "react";
import { Card } from "rebass";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    heading: {
        fontFamily: "Reem Kufi",
        color: "#222222",
        fontSize: 50,
        marginBottom: 0
    },
    city: {
        fontFamily: "Reem Kufi",
        color: "#7B7B82",
        marginBottom: "0px"
    },
    profileLocation: {
        height: "500px",
        width: "100%",
        position: "relative",
        backgroundPosition: "center center",
        backgroundRepeat: "none",
        display: "inline-block",
        verticalAlign: "top",
        backgroundSize: "cover"
    },
    content: {
        paddingBottom: "10px"
    },
    links: {
        display: "inline-block"
    },
    socialIcon: {
        height: "25px",
        weight: "25px"
    },
    socialText: {
        paddingLeft: "15px",
        display: "inline-block"
    },
    serif: {
        fontFamily: "Reem Kufi"
    }
});

const Profile = props =>
    <div className="row">
        <div className="col-md-6">
            <h1 className={css(styles.heading)}>{props.name}</h1>
            <h3 className={css(styles.city)}>{props.city}</h3>
            <hr />
            <div className={css(styles.content)}>
                <h4 className={css(styles.serif)}>Opening Times</h4>
                <table className="table">
                    <tr>
                        <td><p>Mon - Fri</p></td>
                        <td><p>7:00 AM – 7:00 PM</p></td>
                    </tr>
                    <tr>
                        <td><p>Sat</p></td>
                        <td><p>9:00 AM – 6:00 PM</p></td>
                    </tr>
                    <tr>
                        <td><p>Sun</p></td>
                        <td><p>10:00 AM – 5:00 PM</p></td>
                    </tr>
                </table>
            </div>
            <h4 className={css(styles.serif)}>Social Links</h4>
            <div className={`container ${css(styles.content)}`}>
                <div className="row">
                    <a href="http://www.instagram.com">
                        <img
                            src="/assets/instagram.png"
                            className={css(styles.links, styles.socialIcon)}
                        />
                        <p className={css(styles.socialText)}>
                            @laynesespresso
                        </p>
                    </a>
                </div>
                <div className="row">
                    <a href="http://www.twitter.com">
                        <img
                            src="/assets/twitter.png"
                            className={css(styles.links, styles.socialIcon)}
                        />
                        <p className={css(styles.socialText)}>
                            @laynesespresso
                        </p>
                    </a>
                </div>
                <div className="row">
                    <a href="http://www.google.co.uk">
                        <img
                            src="/assets/web.png"
                            className={css(styles.links, styles.socialIcon)}
                        />
                        <p className={css(styles.socialText)}>
                            laynesespresso.co.uk
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <Card rounded width={"100%"}>
                <div
                    className={css(styles.profileLocation)}
                    style={{ backgroundImage: `url(/images/${props.image})` }}
                />
            </Card>
        </div>
    </div>;

export default Profile;

