import { InsightView } from "@gooddata/sdk-ui-ext";
import React from "react";

import Page from "../components/Page";
import { Insights } from "../md/full";

const Home: React.FC = () => {
    return <Page><div style={{ height: 400, width: 600 }}> <InsightView insight={Insights.L0Insight2}/> </div>&hellip;</Page>;
};

export default Home;
