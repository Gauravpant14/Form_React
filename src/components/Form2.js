import React from "react"; 
import showProfile from "./../redux/actions"
import { connect } from "react-redux";
const FormEx = ({ props }) => {
    
  const [item, setItem] = React.useState({
      Name: "",
      Email: "",
      Pass: "",
    });

    const getVal = (e) => {
      setItem({ ...item, [e.target.name]: e.target.value });
      console.log(item);
    };

    const func2 = () => {

      props.history.push('/profile');
    }
  
    return (
      <div>
        <div>
          <label htmlFor="Name">Name :</label>
          <input
            type="text"
            value={item.Name}
            onChange={getVal}
            name="Name"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label htmlFor="Email">Email :</label>
          <input
            type="text"
            value={item.Email}
            onChange={getVal}
            name="Email"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <label htmlFor="Pass">Password :</label>
          <input
            type="text"
            value={item.Pass}
            onChange={getVal}
            name="Pass"
            placeholder="Enter Your Password"
          />
        </div>
        <div>
          <button
            onClick={function () {
             
              func2();
            }}
          >
            Show Profile
          </button>
          <button onClick={() => props.showProfile(item)}>Submit</button>
        </div>
      </div>
    );
  };

  
  const mapDispatchToProps = (dispatch) => {
    return {

      showProfile : (item) => dispatch(showProfile({fn:item.Name, email:item.Email, pass:item.Pass}))
       
    };
  };
  
  export default connect(mapDispatchToProps)(FormEx);
