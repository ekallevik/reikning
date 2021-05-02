import React from "react";

import { EuiBasicTable, EuiHealth, EuiLink } from "@elastic/eui";

const IncomePage = () => {
  const users = [
    {
      id: "1",
      firstName: "john",
      lastName: "doe",
      github: "johndoe",
      dateOfBirth: Date.now(),
      nationality: "NL",
      online: true,
    },
    {
      id: "2",
      firstName: "johnnn",
      lastName: "does",
      github: "johndoed",
      dateOfBirth: Date.now(),
      nationality: "NL",
      online: true,
    },
  ];

  const countryNL = {
    code: "NL",
    name: "Netherlands",
    flag: "🇳🇱",
  };

  const columns = [
    {
      field: "firstName",
      name: "First Name",
      sortable: true,
      "data-test-subj": "firstNameCell",
      mobileOptions: {
        render: item => (
          <span>
            {item.firstName}{" "}
            <EuiLink href="#" target="_blank">
              {item.lastName}
            </EuiLink>
          </span>
        ),
        header: false,
        truncateText: false,
        enlarge: true,
        fullWidth: true,
      },
    },
    {
      field: "lastName",
      name: "Last Name",
      truncateText: true,
      render: name => (
        <EuiLink href="#" target="_blank">
          {name}
        </EuiLink>
      ),
      mobileOptions: {
        show: false,
      },
    },
    {
      field: "github",
      name: "Github",
    },
    {
      field: "dateOfBirth",
      name: "Date of Birth",
      dataType: "date",
      render: date => date,
    },
    {
      field: "nationality",
      name: "Nationality",
      render: countryCode => {
        const country = countryNL;
        return `${country.flag} ${country.name}`;
      },
    },
    {
      field: "online",
      name: "Online",
      dataType: "boolean",
      render: online => {
        const color = online ? "success" : "danger";
        const label = online ? "Online" : "Offline";
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
    },
  ];

  const items = users.filter((user, index) => index < 10);

  const getRowProps = item => {
    const { id } = item;
    return {
      "data-test-subj": `row-${id}`,
      className: "customRowClass",
      onClick: () => {},
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: "customCellClass",
      "data-test-subj": `cell-${id}-${field}`,
      textOnly: true,
    };
  };

  return (
    <>
      <h1>Heisann</h1>
      <EuiBasicTable
        items={items}
        rowHeader="firstName"
        columns={columns}
        rowProps={getRowProps}
        cellProps={getCellProps}
      />
    </>
  );
};

export default IncomePage;
