import { Component } from "react";

class Form extends Component {
  state = {
    uName: "",
    uEmail: "",
    uPassword: "",
    uGender: "",
    uInterest: "",
    uAge: "",
    uDate: "",
    submit: false,
    display: false
  }
  render () {
  

    const userName = (e) => {
      this.setState({uName: e.target.value });
    };

    const userEmail = (e) => {
      this.setState({uEmail: e.target.value});
    };

    const userPassword = (e) => {
      this.setState({uPassword: e.target.value});
    };

    const userGender = (e) => {
      this.setState({uGender: e.target.value})

    };

    const userInterest = (e) => {
      this.setState({uInterest: e.target.value})

    };

    const userDate = (e) => {
      this.setState({uDate: e.target.value})

    }

    const userAge = (e) => {
      this.setState({uAge: e.target.value})

    }

    const switchSubmit =() => {
      this.setState({submit: !this.state.submit});
      this.state.uName != "" && 
      this.state.uEmail != "" &&
      this.state.uPassword != "" && this.state.uPassword.length > 8 &&
      this.setState({display: !this.state.display})

    };


    return (
      <div>

        <label>Full Name</label>
        <input type="text" value={this.state.uName} onChange={userName} /><br/>
        {this.state.submit && this.state.uName === "" && <div>Please enter your Full Name</div>}

        <label>Email</label>
        <input type="email" value={this.state.uEmail} onChange={userEmail} /><br/>
        {this.state.submit && this.state.uEmail === "" && <div>Please enter your Email Id</div> }

        <label>Password</label>
        <input type="password" value={this.state.uPassword} onChange={userPassword} /><br/>
        {this.state.submit && (this.state.uPassword === "" || this.state.uPassword.length < 8) && <div>Please enter atleast 8 character password</div> }

        <p>
        Gender<br/>
        <label>
        <input type="radio" checked={this.state.uGender == "Male"} value= "Male" onChange={userGender}/>
        Male
        </label>
        <label>
        <input type="radio" checked={this.state.uGender == "Female"} value="Female" onChange={userGender}/>
        Female
        </label>
        </p>

        <p>
        Interest<br/>
        <label>
          <input type="checkbox"  value= "sports" onChange={userInterest} />
          Sports
        </label>
        <label>
          <input type="checkbox" value="music" onChange={userInterest} />
          Music
        </label>
        </p>
    
        <label>Age</label>
        <input type="range" min={1} max={100} value={this.state.uAge} onChange={userAge}/><br/>

        <label>Date of Birth</label>
        <input type="date" value={this.state.uDate} onChange={userDate} /><br/>

        <input type="submit" onClick={switchSubmit} value="Register"/>
        <hr/>

        <h3>Your Details:</h3>
        {this.state.display && 
        (<div><div>Full Name: {this.state.uName}</div>
        <div>Email: {this.state.uEmail}</div> 
        <div>Password: {this.state.uPassword}</div> 
        <div>Gender: {this.state.uGender}</div>
        <div>Interest: {this.state.uInterest}</div>
        <div>Age: {this.state.uAge}</div>
        <div>Date of Birth: {this.state.uDate}</div>
        </div>)
        }
      
        
      </div>
    );
  }
}

export default Form;