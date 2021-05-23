import React from "react";
import AssetGrid from "../components/AssetGrid";

export type BankAsset = {
  bank: string;
  name: string;
  balance: number;
  icon?: string;
};

const AssetPage = (): JSX.Element => {
  const assets = [
    { bank: "DNB", name: "Brukskonto", balance: 10000, icon: null },
    { bank: "DNB", name: "Sparekonto", balance: 40000, icon: null },
    { bank: "Nordax", name: "Høyrentekonto", balance: 100000, icon: null },
    { bank: "Tolga-Os", name: "BSU", balance: 200000, icon: null },
    { bank: "Tolga-Os", name: "BSU 2", balance: 40000, icon: null },
  ];

  const liabilities = [
    { bank: "DNB", name: "Kredittkort", balance: -10000, icon: null },
    { bank: "KomplettBank", name: "Kredittkort", balance: -5000, icon: null },
    { bank: "BankNorwegian", name: "Kredittkort", balance: 0, icon: null },
    { bank: "Lånekassen", name: "Studielån", balance: -400000, icon: null },
  ];

  return (
    <>
      <AssetGrid assets={assets} title={"Eiendeler"} />
      <AssetGrid assets={liabilities} title={"Gjeld"} />
    </>
  );
};

export default AssetPage;
