import Link from "next/link"
import styles from "../styles/Botao.module.css"

interface BotaoProps {
  href?: string
  text: string
  onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {

  function renderizarBotao() {
    return (
      <button className={styles.botao} onClick={props.onClick} >{props.text}</button>
    )
  }

  return props.href ? (
    <Link href={props.href}>
    {renderizarBotao()}
    </Link>
  ) : renderizarBotao()
}