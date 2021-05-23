import { BankAsset } from "../pages/eiendeler";
import {
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import AssetCard from "./AssetCard";
import React from "react";

type AssetGridProps = {
  title?: string;
  assets: BankAsset[];
};

const AssetGrid = ({ title, assets }: AssetGridProps): JSX.Element => {
  return (
    <>
      {title && (
        <>
          {" "}
          <EuiFlexGroup justifyContent="center">
            <EuiFlexItem grow={false}>
              <EuiTitle size="l">
                <h1>{title}</h1>
              </EuiTitle>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiHorizontalRule size="half" />
          <EuiSpacer />
        </>
      )}

      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexGrid columns={3} gutterSize={"xl"}>
          {assets.map(({ balance, bank, name }: BankAsset) => (
            <EuiFlexItem key={`${bank} ${name}`}>
              <AssetCard bank={bank} name={name} balance={balance} />
            </EuiFlexItem>
          ))}
        </EuiFlexGrid>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />
    </>
  );
};

export default AssetGrid;
