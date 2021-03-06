import { EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiSpacer, EuiTitle } from "@elastic/eui";
import AssetCard from "./AssetCard";
import React from "react";
import { Asset } from "../lib/domain";

type AssetGridProps = {
  title?: string;
  assets: Asset[];
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
          {assets.map(({ id, bank, name, transactions, type }: Asset) => (
            <EuiFlexItem key={id}>
              <AssetCard
                id={id}
                bank={bank}
                name={name}
                transactions={transactions}
                type={type} />
            </EuiFlexItem>
          ))}
        </EuiFlexGrid>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />
    </>
  );
};

export default AssetGrid;
