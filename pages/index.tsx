import Cartao from "../components/Cartao";
import styles from '../styles/Formulario.module.css'
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";

export default function Formulario() {

  return (
    <div className={styles.form}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty hall</h1>  
        </Cartao>  
        <Cartao>
          <EntradaNumerica/>
        </Cartao>  
      </div>
      <div>
        <Cartao>
          <EntradaNumerica/>
        </Cartao>  
          
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/4/2`}>
            <h2 className={styles.link} style={{ flex: "1", margin: "0" }}>Iniciar</h2>
          </Link>
        </Cartao>  
      </div>
    </div>
  )
}
