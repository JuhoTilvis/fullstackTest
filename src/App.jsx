
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {

  // kommentti
  const nimi = "Heikki"
  const age = 55
  const simo = { name: "Simo", age: 33 }
  console.log("Kutsutaan App-komponenttia")
  return (
    <>
      <p>Greetings</p>
      <Hello name="Petteri" age={19} />
      {/* kommentti */}
      <Hello name={nimi} age={age} />
      <Hello name="Jaana" age={22} />
      <Hello name={simo.name} age={simo.age} />
      <p>{simo.name} {simo.age}</p>
    </>
  )
}

export default App
