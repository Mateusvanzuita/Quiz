import questoes from "../bancoDeQuestoes"

export default (req, res) => {
  const idSelect = +req.query.id
  
  const unicQuestion = questoes.filter(questao => questao.id === idSelect)

  if(unicQuestion.length === 1) {
    const selectionQuestuin = unicQuestion[0].embaralharRespostas()
    res.status(200).json(selectionQuestuin.toObject())
  } else {

    res.status(204).send()
  }
}
