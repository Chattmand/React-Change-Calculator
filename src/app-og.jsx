import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0.00,
      amountReceived: 0.00,
      changeDue: [["Twenties", 20, 0],["Tens", 10, 0], ["Fives", 5, 0], ["Ones", 1, 0], ["Quarter", 0.25, 0], ["Dime", 0.1, 0], ["Nickle", 0.05, 0], ["Penny", 0.01, 0]],
      yourChange: " ",
    }
    
    this.update = this.update.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  
update(event){
  
  this.setState({[event.target.name]: Number(event.target.value)})
}
    calculate(amountDue, amountReceived) {
     let changeDue = amountReceived - amountDue;
      const denominations = [["Twenties", 20, 0],["Tens", 10, 0], ["Fives", 5, 0], ["Ones", 1, 0], ["Quarter", 0.25, 0], ["Dime", 0.1, 0], ["Nickle", 0.05, 0], ["Penny", 0.01, 0]]
    
      for (let bill of denominations) { 
        if (changeDue >= bill[1]) {
          bill[2] = Math.floor(changeDue/bill[1]);
        
          changeDue = (changeDue - bill[1]*bill[2]).toFixed(2)
          changeDue = Number(changeDue);
          console.log(Number)
//           let stringNumber = "456";
// let number = Number(stringNumber);
// console.log(number);  Output: 456

// stringNumber = "7.5";
// number = Number(stringNumber);
// console.log(number);  Output: 7.5

          //changeDue = Math.ceil((changeDue - bill[1]*bill[2]) * 100.0) / 100.0;
        }
               
      }
      this.setState({changeDue: denominations});
      this.setState({yourChange: `Total change due is $${this.state.amountReceived - this.state.amountDue}`})
    
      return changeDue;
    }

render(){
    return (
    <div>
      <h1>Change Calculator</h1>
      <hr></hr>
      <div className = "row">
        <div className = "col">
          <div>
              <div>Enter Information</div>
              <label>How much is due?</label>
              <input name = 'amountDue' type = 'number' placeholder = 'Change due is' defaultValue = {this.state.amountDue} onChange = {this.update}/>
              <label>How much was received?</label>
              <input name = 'amountReceived' type = 'number' placeholder = '00.00' defaultValue = {this.state.amountReceived} onChange = {this.update}/>
              <button type = 'button' className = 'btn btn-primary' name = 'calculate' onClick = {() => this.calculate(this.state.amountDue, this.state.amountReceived)}>Calculate</button>
          </div>
        </div>
        <div className = "col">
          <p id = 'outcome'> {this.state.yourChange}</p>
          <div className = "row">
            <div className = "col">
              <div className="card">
              <div className="card-body">
              <div className='well'>
                <h1>Twenties</h1>
                <p className="change">{this.state.changeDue[0][2]}</p>
              </div>
              </div>
              </div>
            </div>
            <div className = "col">
              <div className="card">
              <div className="card-body">
              <div className='well'>
                <h1>Tens</h1>
                <p className="change">{this.state.changeDue[1][2]}</p>
              </div>
              </div>
              </div>
            </div>
            <div className = "col">
              <div className="card">
              <div className="card-body">
              <div className='well'>
                <h1>Fives</h1>
                <p className="change">{this.state.changeDue[2][2]}</p>
              </div>
              </div>
              </div>
            </div>
            <div className = "col">
              <div className="card">
              <div className="card-body">
              <div className='well'>
                <h1>Ones</h1>
                <p className="change">{this.state.changeDue[3][2]}</p>
              </div>
              </div>
              </div>
            </div>
          </div>
          <div className = "row">
            <div className = "col">
              <div className="card">
              <div className="card-body">
            <div className='well'>
              <h1>Quarter</h1>
              <p className="change">{this.state.changeDue[4][2]}</p>
            </div>
            </div>
            </div>
          </div>
            <div className = "col">
              <div className="card">
              <div className="card-body">
            <div className='well'>
              <h1>Dime</h1>
              <p className="change">{this.state.changeDue[5][2]}</p>
            </div>
            </div>
            </div>
          </div>
            <div className = "col">
              <div className="card">
              <div className="card-body">
            <div className='well'>
              <h1>Nickle</h1>
              <p className="change">{this.state.changeDue[6][2]}</p>
            </div>
            </div>
            </div>
          </div>
            <div className = "col">
              <div className="card">
              <div className="card-body">
            <div className='well'>
              <h1>Penny</h1>
              <p className="change">{this.state.changeDue[7][2]}</p>
            </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>  
   )}
    };
  
  


export default App;