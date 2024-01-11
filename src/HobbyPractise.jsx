import { Component } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


class HobbyList extends Component {
  state = {
    hobby: "",
    hobbies: ["music", "coding"],

  }


  InputHobby = (e) => {
    this.setState({hobby: e.target.value});

  }

  AddHobby = () => {
    const hobbyLC = this.state.hobby.toLowerCase();
    if (!hobbyLC) {
      toast.error('Please enter valid hobby!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        return;
    };
    if (this.state.hobbies.includes(hobbyLC)) {
      toast.error('Please enter unique hobby!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        return;   
    }else {
    this.setState({hobbies: [...this.state.hobbies, hobbyLC], hobby: ""});
        toast.success(`${hobbyLC} added successfully!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        }   

  }

  DeleteHobby = (index) =>{
    let updatedHobby = [...this.state.hobbies];
    const deletingHobby = updatedHobby[index]
    updatedHobby.splice(index, 1);
    this.setState({hobbies: updatedHobby});
    toast.success(`${deletingHobby} deleted successfully!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  DeleteAll = () =>{
    let updatedHobby = [...this.state.hobbies];
    updatedHobby = [];
    this.setState({hobbies: updatedHobby});
    toast.success(" Deleted all hobbies successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  render() {

    console.log(this.state.hobbies);
    const {hobbies} = this.state;

    return (
      <div>
        <div className="form-element">
          <p>Welcome to Hobbify, where we promote new hobbies</p>
          <input type="text" value={this.state.hobby} placeholder="Enter your hobby" onChange={this.InputHobby}/>
          <button onClick={this.AddHobby}>Add hobby</button>
          <div style={{display:"flex", padding: "10px"}}>
          <p style={{marginLeft:"90px"}}>Hobbies</p>
          <button style={{marginLeft:"60px"}} onClick={()=> this.DeleteAll()}>Delete All</button>
          </div>
          <div>
            <ul>
            {hobbies.map((item, index) => (
              <li key={index}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <button style={{marginLeft:"80px"}} onClick={()=> this.DeleteHobby(index)}>Delete</button>
              </li>
            )
            )}
            </ul>
          </div> 
        </div>
      </div>
    );
  }
}

export default HobbyList;