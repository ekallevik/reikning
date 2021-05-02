import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiTitle } from "@elastic/eui";

const LoginPage = () => {
  const { user, error, loading } = useContext(UserContext);

  return (
    <main>
      <EuiTitle size="l">
        <h1>Logg inn</h1>
      </EuiTitle>
      {user ? <SignOutButton /> : <SignInButton />}
    </main>
  );
};

const SignOutButton = () => {
  return <EuiButton onClick={() => auth.signOut()}>Logg ut</EuiButton>;
};

const SignInButton = () => {
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
