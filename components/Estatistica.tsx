import styles from "../styles/Estatistica.module.css";

interface EstatisticaProps {
  valor: any;
  text: string;
  corFundo?: string;
  corFonte?: string;
}

export default function Estatistica(props: EstatisticaProps) {
  return (
    <div className={styles.estatistica}>
      <div
        className={styles.valor}
        style={{
          backgroundColor: props.corFundo ?? "#fdd60f",
          color: props.corFonte ?? "#333",
        }}
      >
        {props.valor}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
