import React from "react";

import { EuiCard, EuiStat, EuiText } from "@elastic/eui";

const icons = ["Beats", "Cloud", "Logging", "Kibana"];

const AssetCard = () => {
  return (
    <EuiCard textAlign="left" title="title" description="description">
      <EuiText size="s">Lorum</EuiText>
      <EuiStat title="22,123" description="Investert" color="secondary" />
    </EuiCard>
  );
};

export default AssetCard;
