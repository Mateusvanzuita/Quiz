import { useEffect, useState } from "react";
import QuestaoModel from "../model/questao";
import Questionario from "../components/Questionario";
import { useRouter } from "next/router";

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()
  const [idsQuestoes, setIdsQuestoes ] = useState<number[]>([])
  const [ questao, setQuestao ] = useState<QuestaoModel>()
  const [ resCerta, setResCerta ] = useState<number>(0)

  async function carregarQuestoesIds() {
    
    const res = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await res.json()
    console.log(idsQuestoes)
    setIdsQuestoes(idsQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const res = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await res.json()
    const novaQuestao = QuestaoModel.criarUsandoObject(json)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarQuestoesIds()
  }, [])

  useEffect(() => {
    idsQuestoes.length > 0 && carregarQuestao(idsQuestoes[0])
  }, [idsQuestoes])
  
  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
    console.log(indice)
  }

  function tempoEsgotado() {
    if(questao.naoRespondida) {
    setQuestao(questao.responderCom(-1))
    }
  }

  function irProximaPergunta() {
    
      const proximoIndice = idsQuestoes.indexOf(questao.id) + 1
      return idsQuestoes[proximoIndice]
    
  }

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setResCerta(resCerta + (acertou ? 1 : 0))
  }

  function irProximoPasso() {
    const proximoId = irProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }

  function irPraProximaQuestao(proximoID: number) {
    carregarQuestao(proximoID)
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsQuestoes.length,
        certas: resCerta
      }
    })
  }

  return questao ? 
      <Questionario questao={questao} ultima={irProximaPergunta() === undefined} questaoRespondida={questaoRespondida} irProximoPasso={irProximoPasso}/> : false  
}
