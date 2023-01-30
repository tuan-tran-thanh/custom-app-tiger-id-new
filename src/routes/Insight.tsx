import { idRef } from "@gooddata/sdk-model";
import { InsightView } from "@gooddata/sdk-ui-ext";
// @ts-ignore
import React from "react";

import { Insights } from "../md/full";

const INSIGHT_ID = `Tiger_Id_Parent_L0:${Insights.L0Insight2}`;
const insightRef = idRef(INSIGHT_ID);

const style = { height: 500,width: 600 };

const Insight: React.FC = () => {
    // @ts-ignore
    // return <Page><div style={{ height: 400, width: 600 }}> <InsightView insight={insightRef}/> </div>&hellip;</Page>;
    return (
        <div style={style} className="s-insightView-pivot">
            <InsightView
                insight={insightRef}
                showTitle={true}
            />
        </div>
    )
};

export default Insight;
