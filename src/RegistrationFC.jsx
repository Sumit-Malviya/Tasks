import { useState } from "react";

const RegistrationForm = () => {
  const [details, setDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthMonth: undefined,
    birthDay: undefined,
    birthYear: undefined,
    gender: "",
    stAdd: "",
    stAdd2: "",
    city: "",
    state: "",
    zip: undefined,
    email: "",
    mobNum: 0,
    phNum: 0,
    wNum: 0,
    company: "",
    courses: "",
    addComments: "",
    submitStatus: false,
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // console.log({name, value});

    setDetails({ ...details, [name]: value });
  };

  const onMonthChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onDayChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onYearChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onGenderChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onStreetOneChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onStreetTwoChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onCityChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onStateChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onZipChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onEmailChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onMobileChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onPhoneChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onWorkNumChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onCompanyChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onCourseChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onCommentChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onSubmitClick = () => {
    setDetails({ ...details, submitStatus: !details.submitStatus });
    // console.log(details.submitStatus);
  };

  return (
    <div>
      <div className="form-element">
        <h1>Registration Form</h1>
        <p>Fill out the form carefully for registration.</p>
        <hr />
        <div>
          <h5 style={{ textAlign: "left" }}>Student Name</h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
            gap: "8px",
          }}
        >
          <input
            type="text"
            value={details.firstName}
            name="firstName"
            onChange={onInputChange}
          />
          <input
            type="text"
            value={details.middleName}
            name="middleName"
            onChange={onInputChange}
          />
          <input
            type="text"
            value={details.lastName}
            name="lastName"
            onChange={onInputChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "10px",
            fontWeight: "lighter",
            gap: "8px",
          }}
        >
          <div style={{ flex: "1", textAlign: "left" }}>
            <label>First Name</label>
          </div>
          <div style={{ flex: "1", textAlign: "left" }}>
            <label>Middle Name</label>
          </div>
          <div style={{ flex: "1", textAlign: "left" }}>
            <label>Last Name</label>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1", marginRight: "20px" }}>
            <h5 style={{ textAlign: "left" }}>Birth Date</h5>
          </div>
          <div style={{ flex: "1" }}>
            <h5 style={{ textAlign: "left" }}>Gender</h5>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "20px",
              gap: "8px",
            }}
          >
            <select
              onChange={onMonthChange}
              value={details.birthMonth}
              name="birthMonth"
            >
              <option>Please</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select
              onChange={onDayChange}
              value={details.birthDay}
              name="birthDay"
            >
              <option>Please</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
            <select
              onChange={onYearChange}
              value={details.birthYear}
              name="birthYear"
            >
              <option>Please</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
              <option>2032</option>
              <option>2033</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "45px",
            }}
          >
            <select
              onChange={onGenderChange}
              value={details.gender}
              name="gender"
            >
              <option>Please Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "44px",
            fontSize: "10px",
            fontWeight: "lighter",
            marginTop: "5px",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <label>Month</label>
          </div>
          <div style={{ textAlign: "left" }}>
            <label>Day</label>
          </div>
          <div style={{ textAlign: "left", marginLeft: "12px" }}>
            <label>Year</label>
          </div>
        </div>
        <div>
          <h5 style={{ textAlign: "left" }}>Address</h5>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            value={details.stAdd}
            name="stAdd"
            onChange={onStreetOneChange}
            style={{ flex: "1" }}
          />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "10px",
            fontWeight: "lighter",
            marginTop: "5px",
            marginBottom: "20px",
          }}
        >
          <label>Street Address</label>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            value={details.stAdd2}
            name="stAdd2"
            onChange={onStreetTwoChange}
            style={{ flex: "1" }}
          />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "10px",
            fontWeight: "lighter",
            marginTop: "5px",
            marginBottom: "10px",
          }}
        >
          <label>Street Address Line 2</label>
        </div>
        <div>
          <div style={{ display: "flex", gap: "20px" }}>
            <input
              type="text"
              value={details.city}
              name="city"
              onChange={onCityChange}
              style={{ flex: "1" }}
            />
            <input
              type="text"
              value={details.state}
              name="state"
              onChange={onStateChange}
              style={{ flex: "1" }}
            />
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
            <div
              style={{
                textAlign: "left",
                fontSize: "10px",
                fontWeight: "lighter",
                marginTop: "5px",
                flex: "1",
              }}
            >
              <label>City</label>
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "10px",
                fontWeight: "lighter",
                marginTop: "5px",
                flex: "1",
              }}
            >
              <label>State / Province</label>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            value={details.zip}
            name="zip"
            onChange={onZipChange}
            style={{ flex: "1" }}
          />
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "10px",
            fontWeight: "lighter",
            marginTop: "5px",
            marginBottom: "20px",
          }}
        >
          <label>Postal / Zip Code</label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ textAlign: "left", flex: "1" }}>
            <h5>Student E-mail</h5>
          </div>
          <div style={{ textAlign: "left", flex: "1" }}>
            <h5>Mobile Number</h5>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "20px" }}>
            <input
              type="email"
              value={details.email}
              name="email"
              onChange={onEmailChange}
              style={{ flex: "1" }}
            />
            <input
              type="tel"
              value={details.mobNum}
              name="mobNum"
              onChange={onMobileChange}
              style={{ flex: "1" }}
            />
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
            <div
              style={{
                textAlign: "left",
                fontSize: "10px",
                fontWeight: "lighter",
                marginTop: "5px",
                flex: "1",
              }}
            >
              <label>Student E-mail</label>
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "10px",
                fontWeight: "lighter",
                marginTop: "5px",
                flex: "1",
              }}
            >
              <label>Mobile Number</label>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ textAlign: "left", flex: "1" }}>
            <h5>Phone Number</h5>
          </div>
          <div style={{ textAlign: "left", flex: "1" }}>
            <h5>Work Number</h5>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", gap: "20px" }}>
            <input
              type="tel"
              value={details.phNum}
              name="phNum"
              onChange={onPhoneChange}
              style={{ flex: "1" }}
            />
            <input
              type="tel"
              value={details.wNum}
              name="wNum"
              onChange={onWorkNumChange}
              style={{ flex: "1" }}
            />
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
            <div
              style={{
                textAlign: "left",
                fontSize: "10px",
                fontWeight: "lighter",
                marginTop: "5px",
                flex: "1",
              }}
            >
              <label>Phone Number</label>
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "10px",
                fontWeight: "lighter",
                marginTop: "5px",
                flex: "1",
              }}
            >
              <label>Work Number</label>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ textAlign: "left", flex: "1" }}>
            <h5>Company</h5>
          </div>
          <div style={{ textAlign: "left", flex: "1" }}>
            <h5>Courses</h5>
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: "1", display: "flex" }}>
            <input
              type="text"
              value={details.company}
              name="company"
              onChange={onCompanyChange}
              style={{ flex: "1" }}
            />
          </div>
          <div style={{ flex: "1", display: "flex" }}>
            <select
              onChange={onCourseChange}
              value={details.courses}
              name="courses"
              style={{ flex: "1" }}
            >
              <option>Please Select</option>
              <option>75 Days of React</option>
              <option>90 Days of Devops</option>
            </select>
          </div>
        </div>

        <div>
          <h5 style={{ textAlign: "left" }}>Additional Comments</h5>
        </div>
        <div style={{ display: "flex" }}>
          <textarea
            value={details.addComments}
            name="addComments"
            onChange={onCommentChange}
            style={{ flex: "1" }}
            rows={8}
            cols={4}
          ></textarea>
        </div>

        <hr />
        <div>
          <button onClick={() => onSubmitClick()}>Submit</button>
        </div>
      </div>

      <hr />
      {details.submitStatus && (
        <div>
          <h3>Your Details:</h3>
          <div>
            <label>First Name: {details.firstName}</label>
          </div>
          <div>
            <label>Middle Name: {details.middleName}</label>
          </div>
          <div>
            <label>Last Name: {details.lastName}</label>
          </div>
          <div>
            <label>Birth Month: {details.birthMonth}</label>
          </div>
          <div>
            <label>Birth Day: {details.birthDay}</label>
          </div>
          <div>
            <label>Birth Year: {details.birthYear}</label>
          </div>
          <div>
            <label>Gender: {details.gender}</label>
          </div>
          <div>
            <label>Street Address: {details.stAdd}</label>
          </div>
          <div>
            <label>Street Address Line 2: {details.stAdd2}</label>
          </div>
          <div>
            <label>City: {details.city}</label>
          </div>
          <div>
            <label>State / Province: {details.state}</label>
          </div>
          <div>
            <label>Postal / Zip Code: {details.zip}</label>
          </div>
          <div>
            <label>Student E-mail: {details.email}</label>
          </div>
          <div>
            <label>Mobile Number: {details.mobNum}</label>
          </div>
          <div>
            <label>Phone Number: {details.phNum}</label>
          </div>
          <div>
            <label>Work Number: {details.wNum}</label>
          </div>
          <div>
            <label>Company: {details.company}</label>
          </div>
          <div>
            <label>Courses: {details.courses}</label>
          </div>
          <div>
            <label>Comments: {details.addComments}</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
