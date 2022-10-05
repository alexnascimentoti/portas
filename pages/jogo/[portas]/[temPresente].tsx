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
  const [valido, setValido] = useState(false)
  
  const router = useRouter()
  
  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente 
    setPortas(criarPortas( portas , temPresente ))
  }, [router?.query])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePortasValidas = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <=portas

    setValido(qtdePortasValidas && temPresenteValido)
  }, [portas])
  

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
        {valido ? 
          renderizarPortas() :
          <h2>Valores inválidos</h2> 
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}