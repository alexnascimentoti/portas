/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link"
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from '../../../styles/Jogo.module.css'
import { useRouter } from "next/router"

export default function jogo(){
  
  const [portas, setPortas] = useState([])
  
  const router = useRouter()
  
  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente 
    setPortas(criarPortas( portas , temPresente ))
  }, [router?.query])
  

  function renderizarPortas(){
    return portas.map( porta => {
        return <Porta key = {porta.numero} value={porta} 
          onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
      }
    )
  }
  
  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}