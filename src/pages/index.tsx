import React, { FunctionComponent } from "react";
import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiSpacer,
  EuiStat,
  EuiTitle,
} from "@elastic/eui";

import Image from "next/image";
import Link from "next/link";

const Index: FunctionComponent = (): JSX.Element => (
  <div>
    <EuiFlexGroup justifyContent="spaceAround">
      <Image src="/avatar.png" width="300px" height="300px" />
    </EuiFlexGroup>
    <EuiSpacer />
    <EuiFlexGroup justifyContent="center">
      <EuiFlexItem grow={false}>
        <EuiTitle size="l">
          <h1>Reikning</h1>
        </EuiTitle>
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiSpacer />
    <EuiFlexGroup justifyContent="spaceEvenly">
      <EuiFlexItem grow={false}>
        <EuiStat title="10" description="Konto" titleColor="subdued" />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiStat title="100" description="Investeringer" titleColor="primary" />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiStat title="1,000" description="Gjeld" titleColor="secondary" />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiStat title="10,000" description="Overskudd" titleColor="danger" />
        Forrige måned
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiHorizontalRule size="half" />
    <EuiFlexGroup justifyContent="center">
      <EuiButton color="primary" fill>
        <Link href="/formue">Se formue</Link>
      </EuiButton>
      <EuiButton color="secondary" fill>
        {" "}
        Før regnskap{" "}
      </EuiButton>
      <EuiButton color="warning" fill>
        {" "}
        Sett opp budsjett{" "}
      </EuiButton>
    </EuiFlexGroup>
  </div>
);

// todo: add steps to regnskapsføring?
// todo: add tabs?
// todo: add empty prompt

export default Index;
