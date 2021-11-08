import React from "react";


const UserGreeting = (props) => {
  const { user } = props;
  //handle the calander when the date is chosen it will sent a post request to the server
  //and the server will handle the req body and redirect to the events page
  const handleCalander = (e) => {
    e.preventDefault();
    const date = e.target.value;
    const data = {
      date: date,
    };
    fetch("/api/date", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  };

    return (
    <div>
      <h1 className='welcomeBack'>Welcome back {user}</h1>
      <h5 className='whenLook'>When do you want to rave?</h5>
      <div className="calandarPick">
        <label for="start">Date: </label>
        <input 
		  		type="date" id="start" 
		  		name="trip-start"
          onChange={handleCalander}
      		value={new Date}
      		min="20-01-01" 
		  		max="2022-12-31">
		  	</input>
        <button>Submit</button>
      </div>
    </div>
  );
}
export default UserGreeting;