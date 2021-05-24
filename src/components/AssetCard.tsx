import React from "react";

import { EuiIcon, EuiPanel, EuiStat } from "@elastic/eui";
import { Asset } from "../lib/domain";

const AssetCard = ({
  bank,
  name,
  transactions,
}: Asset): JSX.Element => {

  const balance = transactions.reduce((acc, item) => acc + item.amount, 0);

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
