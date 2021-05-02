import React, { useRef, useState } from "react";

import {
  EuiButton,
  EuiDatePicker,
  EuiFieldNumber,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiRadioGroup,
  EuiSpacer,
} from "@elastic/eui";

import { htmlIdGenerator } from "@elastic/eui/lib/services";
import { DEFAULT_INCOME, IncomeCategory } from "../../lib/domain";
import Head from "next/head";

type RadioCategory = {
  id: string;
  categoryid: IncomeCategory;
  label: string;
};

const AddIncomePage = () => {
  const [income, setIncome] = useState(DEFAULT_INCOME);
  const idPrefix = useRef(htmlIdGenerator()());

  const radios: RadioCategory[] = [
    {
      id: `${idPrefix}0`,
      categoryid: "Salary",
      label: "Lønn",
    },
    {
      id: `${idPrefix}1`,
      categoryid: "Financial gain",
      label: "Finansinntekter",
    },
    {
      id: `${idPrefix}2`,
      categoryid: "Gift",
      label: "Gave",
    },
    {
      id: `${idPrefix}3`,
      categoryid: "Other",
      label: "Annen",
    },
  ];

  const [radioIdSelected, setRadioIdSelected] = useState(`${idPrefix}0`);

  const selectIncomeCategory = optionId => {
    setRadioIdSelected(optionId);
    setIncome({
      ...income,
      category: radios.find(item => item.id === optionId).categoryid,
    });
  };

  const handleSubmit = () => {
    console.log("Submitting...");
    setIncome(DEFAULT_INCOME);
    console.log("Submitted");
  };

  return (
    <>
      <Head>
        <title> Reikning - Inntekter </title>
      </Head>
      <h1>Legg til inntekt</h1>
      <EuiForm component="form">
        <EuiFormRow label="Beskrivelse" helpText="Beskriv inntekten">
          <EuiFieldText
            name="Inntekt"
            value={income.description}
            onChange={e =>
              setIncome({ ...income, description: e.target.value })
            }
          />
        </EuiFormRow>

        <EuiFormRow label="Kategori">
          <EuiRadioGroup
            options={radios}
            idSelected={radioIdSelected}
            onChange={id => selectIncomeCategory(id)}
            name="radio group"
            legend={{
              children: <span>Velg kategori for inntekten</span>,
            }}
          />
        </EuiFormRow>

        <EuiFormRow label="Sum">
          <EuiFieldNumber
            placeholder="Income sum"
            value={income.amount}
            onChange={e =>
              setIncome({ ...income, amount: parseInt(e.target.value) })
            }
            append="NOK"
            aria-label="Use aria labels when no actual label is in use"
          />
        </EuiFormRow>

        <EuiFormRow label="Bokføringsdato">
          <EuiDatePicker
            selected={income.date}
            onChange={date => setIncome({ ...income, date: date })}
            locale="no-nb"
            dateFormat="DD-MM-YYYY"
          />
        </EuiFormRow>

        <EuiFormRow label="Kilde" helpText="Hvor kommer inntekten fra">
          <EuiFieldText
            name="Kilde"
            value={income.source}
            onChange={e => setIncome({ ...income, source: e.target.value })}
          />
        </EuiFormRow>

        <EuiSpacer />

        <EuiButton fill onClick={handleSubmit}>
          Save form
        </EuiButton>
      </EuiForm>
    </>
  );
};

export default AddIncomePage;
