import React from "react";

import { EuiIcon, EuiPanel, EuiStat } from "@elastic/eui";
import { BankAsset } from "../pages/eiendeler";

const AssetCard = ({ balance, bank, name }: BankAsset): JSX.Element => {
  return (
    <EuiPanel>
      <EuiStat
        title={balance.toLocaleString()}
        description={`${bank} ${name}`}
        textAlign="center">
        <EuiIcon type="empty" />
      </EuiStat>
    </EuiPanel>
  );
};

export default AssetCard;
