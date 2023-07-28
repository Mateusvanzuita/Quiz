import { useRouter } from "next/router";
import styles from "../styles/Resultado.module.css"
import Estatistica from "../components/Estatistica";
import Botao from "../components/Botao";

export default function resultado() {
  const router = useRouter();

  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>

      <Estatistica text="Perguntas" valor={total} />
      <Estatistica text="Certas" valor={certas} corFundo="#9cd2a4"/>
      <Estatistica text="Percentual" valor={`${percentual}%`} corFundo="#de6a33"/>
      </div>
      <Botao href="/" text="Tentar novamente"/>
    </div>
  );
}
