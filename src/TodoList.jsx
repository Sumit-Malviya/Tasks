import { Component } from "react";

class TodoList extends Component {

  state = {
    list: [{name: "Learn React"},
           {name: "Make Dinner"},
          ],
    newTodo: "",
    editingIndex: null,
    updatedTodo: "",
          
  }

  Add = (e) =>{
    this.setState({newTodo: e.target.value});
  
    }

  Update = (e) =>{
    this.setState({updatedTodo: e.target.value});
  }  

  AddTodo = (e) =>{
    const input = {name: this.state.newTodo}
    this.state.list.push(input);
    this.setState({newTodo: ""});
  }
  
  DeleteTodo = (indexPlace) =>{

    //... this creates shallow copy without disturbing actual list
    const newList = [...this.state.list]; 
    
    newList.splice(indexPlace, 1);

    this.setState({list: newList});
    
  };

  EditTodo = (indexPlace) =>{
    const selectedTodo = this.state.list[indexPlace];
    this.setState({editingIndex: indexPlace});
    this.setState({updatedTodo: selectedTodo.name});

  };

  UpdateTodo = () => {
    const updatedList = [...this.state.list];
    updatedList[this.state.editingIndex] = {name: this.state.updatedTodo};

    this.setState({list: updatedList, editingIndex: null, updatedTodo: "",});
  }


  


  render() {
    // console.log(this.state.list);
    return (
      <div>
        <div><h1>To do List</h1></div>
        <div>
          <input type="text" value={this.state.newTodo} onChange={this.Add} placeholder="Todo name"/>
          <button type="submit" onClick={this.AddTodo} >Create One Todo</button>
        </div>
        <div>
          <p>Output</p>
          <ol>
            {this.state.list.map( (item, index) => (
              <li key={index} >

                {index === this.state.editingIndex ? (
                  <div>
                    <input type="text" value={this.state.updatedTodo} onChange={this.Update}/>
                    <button onClick={this.UpdateTodo}>Update</button>
                  </div>
                ) : (
                <div>
                {item.name}
                <button type="submit" onClick={()=> this.EditTodo(index)} >Edit</button>
                <button type="submit" onClick={()=> this.DeleteTodo(index)}>Delete</button>
                </div>

                ) }
                
              </li>
            ))
            }
          </ol>
        </div>  
      </div>
    );
  }

}

export default TodoList;
