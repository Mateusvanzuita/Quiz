export default class RespostModel {
  #valor: string
  #certa: boolean
  #revelada: boolean

  constructor(valor: string, certa: boolean, revelada = false) {
    this.#valor = valor
    this.#certa = certa
    this.#revelada = revelada
  }

  static certa(valor: string) {
    return new RespostModel(valor, true)
  }
  static errada(valor: string) {
    return new RespostModel(valor, false)
  }

  get valor() {
    return this.#valor
  }
  get certa() {
    return this.#certa
  }
  get revelada() {
    return this.#revelada
  }

  revelar() {
    return new RespostModel(this.#valor, this.#certa, true)
  }

  static criarUsandoObject(obj: RespostModel): RespostModel {
    return new RespostModel(obj.valor, obj.certa, obj.revelada)
  }


  toObject() {
    return {
      valor: this.#valor,
      certa: this.#certa,
      revelada: this.#revelada
    }
  }
}