"use strict";

import React from "react";
import DocumentTitle from "react-document-title";
import { SITE_TITLE } from "../../helpers/global";

const About = () =>
    <DocumentTitle title={`About | ${SITE_TITLE}`}>
        <div>
            About
        </div>
    </DocumentTitle>;

export default About;
