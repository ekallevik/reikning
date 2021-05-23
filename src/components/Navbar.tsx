import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "../lib/context";
import {
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiHeaderSectionItem,
} from "@elastic/eui";

const Navbar = (): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <EuiHeader className="navbar">
      <EuiHeaderSectionItem border="right">
        <Link href="/">
          <button className="btn-logo">Reikning</button>
        </Link>
      </EuiHeaderSectionItem>

      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links">
          {user && (
            <>
              <EuiHeaderLink href="/profile">Profile</EuiHeaderLink>
              <EuiHeaderLink>
                <button>Sign Out</button>
              </EuiHeaderLink>
            </>
          )}

          {!user && (
            <EuiHeaderLink href="/login">
              <button className="btn-blue">Log in</button>
            </EuiHeaderLink>
          )}
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};

export default Navbar;
