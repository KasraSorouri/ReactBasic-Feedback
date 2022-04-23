import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
constructor () {
  super();
  this.state = {
    good: 0,
    neutral: 0,
    poor: 0
  }
}
feedback = (fb) => () => {
  if(fb === 'G'){
    this.setState({good:this.state.good+1})
  }
  if(fb === 'N'){
    this.setState({neutral:this.state.neutral+1})
  }
  if(fb === 'P'){
    this.setState({poor:this.state.poor+1})
  }
}

render(){
  console.log(this.state)
  return(
    <div>
      <div>
        <Title title='anna palautetta' />
      </div>
      <div>
        <Button title='Hyva' clickHandler={this.feedback('G')} />
        <Button title='Neutraali' clickHandler={this.feedback('N')} />
        <Button title='Huono' clickHandler={this.feedback('P')} />
      </div>
      <div>
        <Title title='Statistiikka' />
      </div>
      <Statistiks stats={this.state} />
    </div>
  )
}



}

const Title = (props) =>{
  return(
    <div>
      <h2>{props.title} </h2>
    </div>
  )
}

const Button = (props) =>{
  return(
    <button onClick={props.clickHandler}>{props.title}</button>
  )
}

const Statistiks = (props) => {
  const {good, neutral,poor}= props.stats
  const avarage = () => {
//    console.log('g:', good,'n:', neutral,'p:', poor)
    const w = {g:1 ,n:0 ,p:-1 }
    const avg=((good*w.g+neutral*w.n+poor*w.p)/(good+neutral+poor))
    return avg
  }
  const posetivePersent = () => {
        const pp=(good)/(good+neutral+poor)*100
        return pp
      }


  return(
    <div>
     <p>Hyva {good}</p>
     <p>Neutral {neutral}</p>
     <p>Houno {poor}</p>
     <p>Keskiarvo {avarage().toFixed(1)}</p>
     <p>positiivisia {posetivePersent().toFixed(1)}%</p>
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)