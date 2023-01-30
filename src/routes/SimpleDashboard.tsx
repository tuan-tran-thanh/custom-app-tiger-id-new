// (C) 2007-2022 GoodData Corporation
import React from "react";
import { Dashboard, DashboardConfig } from "@gooddata/sdk-ui-dashboard";
import { idRef } from "@gooddata/sdk-model";

const dashboardRef = idRef("Tiger_Id_Parent_L0:L0_Dashboard1");
const config: DashboardConfig = { isReadOnly: true };

const SimpleDashboardComponent: React.FC = () => {
    return <Dashboard dashboard={dashboardRef} config={config} />;
};

export default SimpleDashboardComponent;