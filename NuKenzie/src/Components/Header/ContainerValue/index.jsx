import styles from "./value.module.scss"

function RenderValue({ listValues }) {

        const totalValue = listValues.reduce((prevValue, list) => {
          if (list.typeValue === 'Entrada') {
            return prevValue + Number(list.value);
          } else {
            return prevValue - Number(list.value);
          }
        }, 0);
      
    
    return (
        <>
            <div className={styles.container__main}>
                <div>
                    <div className={styles.div__value}>
                        <h2>Valor atual:</h2>
                        <h3>{totalValue.toLocaleString('pt-BR', { style: 'currency', currency: "BRL"})}</h3>
                    </div>

                    <div>
                        <p>O valor se refere ao saldo</p>
                    </div>
                </div>
            </div>
        </>   
    )
}

export default RenderValue;