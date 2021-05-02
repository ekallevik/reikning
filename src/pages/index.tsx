import React, { FunctionComponent } from "react";
import {
  EuiButton,
  EuiCode,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
  EuiStat,
  EuiText,
  EuiTitle,
} from "@elastic/eui";

import MyComponent from "../components/my_component";

const Index: FunctionComponent = () => (
  <>
    <EuiFlexGroup>
      <EuiFlexItem>
        <EuiTitle size="l">
          <h1>Reikning</h1>
        </EuiTitle>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton
          iconType="logoGithub"
          href="https://github.com/elastic/next-eui-starter"
          fill>
          Open in Github
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiSpacer />

    <EuiText>
      <h2>Getting started</h2>
      <div>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiStat title="1" description="Default color" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="10"
              description="Subdued color"
              titleColor="subdued"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="100"
              description="Primary color"
              titleColor="primary"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="1,000"
              description="Secondary color"
              titleColor="secondary"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="10,000"
              description="Danger color"
              titleColor="danger"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="100,000"
              description="Accent color"
              titleColor="accent"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>

      <p>
        This{" "}
        <EuiLink external={true} target="_blank" href="https://nextjs.org/">
          Next.js
        </EuiLink>{" "}
        EUI Starter is intended to help you quickly build and deploy prototypes
        for Kibana apps with the{" "}
        <EuiLink
          href="https://elastic.github.io/eui/"
          external={true}
          target="_blank">
          EUI library
        </EuiLink>
        .
      </p>

      <h3>Try it out in CodeSandbox</h3>

      <p>
        Simply go to{" "}
        <EuiLink
          href="https://codesandbox.io/s/github/elastic/next-eui-starter"
          external={true}
          target="_blank">
          https://codesandbox.io/s/github/elastic/next-eui-starter
        </EuiLink>
        . CodeSandbox will fork the template when you make changes!
      </p>

      <h3>Clone the project</h3>
      <p>
        To use this starter, simply run{" "}
        <EuiCode>
          git clone https://github.com/elastic/next-eui-starter my-app
        </EuiCode>
        . Then <EuiCode>cd my-app</EuiCode> and start editing.
      </p>

      <h3>Running locally</h3>
      <p>
        <EuiCode>yarn dev</EuiCode>
      </p>

      <h3>Running in production mode:</h3>
      <p>
        <EuiCode>yarn build</EuiCode>
      </p>
      <p>Then:</p>
      <p>
        <EuiCode>yarn start</EuiCode>
      </p>

      <h3>Deploying to GitHub Pages</h3>
      <p>
        Make sure that your repo has Github Pages enabled in settings. Then run{" "}
        <EuiCode>yarn build-docs</EuiCode>, commit the results and push to
        GitHub.
      </p>

      <MyComponent />
    </EuiText>
  </>
);

export default Index;
