import { auth, googleAuthProvider } from "../lib/firebase";
import React, { useContext } from "react";
import { UserContext } from "../lib/context";
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiTitle } from "@elastic/eui";
import Image from "next/image";

const LoginPage = (): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <main>
      <EuiTitle size="l">
        <h1>Logg inn</h1>
      </EuiTitle>
      {user ? <SignOutButton /> : <SignInButton />}
    </main>
  );
};

const SignOutButton = (): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Image src={user.photoURL} width="300px" height="300px" />

      <EuiButton onClick={() => auth.signOut()}>Logg ut</EuiButton>
    </>
  );
};

const SignInButton = (): JSX.Element => {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiButton
            onClick={signInWithGoogle}
            iconType="/Google_Logo.svg"
            size="s">
            Logg inn med Google
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiButton onClick={() => auth.signInAnonymously()}>
            Logg inn anonymt
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};

export default LoginPage;
