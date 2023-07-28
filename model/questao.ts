import { embaralhar } from "../functions/arrays"
import RespostModel from "./resposta"

export default class QuestaoModel {
  #id: number
  #enunciado: string
  #respostas: RespostModel[]
  #acertou: boolean

  constructor(id: number, enunciado: string, respostas: RespostModel[], acertou = false) {
  this.#id = id
  this.#enunciado = enunciado
  this.#respostas = respostas
  this.#acertou = acertou
  }

  get id() {
    return this.#id
  }
  get enunciado() {
    return this.#enunciado
  }
  get respostas() {
    return this.#respostas
  }
  get acertou() {
    return this.#acertou
  }

  get respondida() {
    for(let resposta of this.#respostas) {
      if(resposta.revelada) return true
    }
    return false
  }

  get naoRespondida() {
    return !this.respondida
  }

  responderCom(indice: number): QuestaoModel {
    const acertou = this.#respostas[indice]?.certa
    const respostas = this.#respostas.map((res, i) => {
      const respostaSelecionada = indice === i
      const deveRevelar = respostaSelecionada || res.certa
      return deveRevelar ? res.revelar() : res
    })
    return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
  }

  embaralharRespostas(): QuestaoModel {
    let respostasEmbaralhadas = embaralhar(this.#respostas)
    return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
  }

  static criarUsandoObject(obj: QuestaoModel): QuestaoModel {
    const respostas = obj.respostas.map(res => RespostModel.criarUsandoObject(res))
    return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
  }



  toObject() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respostas: this.#respostas.map(res => res.toObject()),
      respondida: this.respondida,
      acertou: this.#acertou
    }
  }
}