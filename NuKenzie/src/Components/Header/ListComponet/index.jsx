import styles from "../SectionSalary/salary.module.scss";

function ListComponet({ id, description, value, typeValue, removeValue }) {

    const cardClassName = typeValue === 'Entrada' ? styles.div__cards : styles.div__cards__despesa;

  return (
    <li className={cardClassName}>
      <h2>{description}</h2>

      <div>
      <h3>{`R$ ${value}`}</h3>
      </div>

      <div className={styles.div__typevalue}>
        <h2>{typeValue}</h2>
        <button onClick={() => removeValue(id)}>Excluir</button>
      </div>
    </li>
  );
}

export default ListComponet;
