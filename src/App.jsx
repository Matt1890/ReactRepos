import React from "react";



export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };
    this.addItem = this.addItem.bind(this);
  }


  addItem() {
    let newItem = [...this.state.list, this.state.text];
    this.setState ({ list: newItem, text: "" });
  }

  render() {
    return (
      <div className = "App">
      <div className = "App-header">
        <h1>To do List</h1>
        <ul>
          {this.state.list.map((list, idx)=>{ 
            return <li key={idx}>{list}</li>
          })}
          <div>
            <input
            type="text"
            name="new task"
            id="new task"
            value={this.state.text}
            onChange={(event) => this.setState({text: event.target.value})}
            />
            <button onClick = {this.addItem}>Add</button>
          </div>
        </ul>
      </div>
      </div>
    );
  }
}


