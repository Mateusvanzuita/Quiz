import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Temporizador.module.css";

interface TemporizadorProps {
  duracao: number;
  tempoEsgotado: () => void;
  key: any
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={props.duracao}
        onComplete={props.tempoEsgotado}
        colors={["#6dc917", "#F7BB01", "#ED827A"]}
        colorsTime={[5, 3, 2]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
