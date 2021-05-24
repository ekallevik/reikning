import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../lib/context";
import { getAssets } from "../../lib/firebase";
import AssetGrid from "../../components/AssetGrid";
import { Asset } from "../../lib/domain";

const AssetPage = (): JSX.Element => {
  const { user } = useContext(UserContext);
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => getAssets(user, setAssets), [user]);

  return <AssetGrid assets={assets} title={"Eiendeler"} />
};

export default AssetPage;
