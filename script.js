const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  //localStorage: guarda as alterações feitas na página através de uma chave que devem ser em formato de string
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//getItem: busca as alterações feitas na página para que sejam exibidas através da mesma chave informada antes (NLWSetup@habits) 
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} 

nlwSetup.setData(data)
nlwSetup.load()
