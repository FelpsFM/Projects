import Input from "../input";
import styles from "./form.module.scss";
import { useState } from "react";
import RenderSalary from "../SectionSalary";

function FormPages({ addValue }) {
  const [description, setDescription] = useState("");
  const [value, setvalueMoney] = useState("");
  const [typeValue, settypeValue] = useState("Entrada");

  const submit = (event) => {
    event.preventDefault();
    addValue({ description, value, typeValue });
    setDescription("");
    setvalueMoney("");
  };

  return (
    <form onSubmit={submit}>
      <div className={styles.container__pages}>
        <Input
          label="Descrição"
          type="text"
          placeholder="Digite aqui sua descrição"
          id="description"
          value={description}
          setValue={setDescription}
        />
        <p>Ex: Compra de roupas</p>

        <Input
          label="Valor (R$)"
          type="number"
          placeholder="1"
          id="value"
          value={value}
          setValue={setvalueMoney}
        />

        <label>Tipo de valor</label>
        <select
          className={styles.select}
          value={typeValue}
          onChange={(event) => settypeValue(event.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>

        <div className={styles.div__button}>
          <button onClick={RenderSalary}>inserir valor</button>
        </div>
      </div>
    </form>
  );
}

export default FormPages;
