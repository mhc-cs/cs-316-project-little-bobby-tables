import './style.css';


var usersArray = ["Joe", "Dave", "Carlos"];


export default function Page() {
	return (	
		<ItineraryScreen itineraryName={"Joe's BBQ Bash"}/>
	
  );
	
	//<HomeScreen/>    <SearchScreen/>		<ItineraryScreen itineraryName={"Joe's BBQ Bash"}/>  <NewEventScreen/>

}



/*
	Shows all itineraries.
*/

function HomeScreen() {
  return (
		<div>

			{/** The header banner, containing just a title.*/}

			<div className="header-banner">
				<h1>My Itineraries</h1>
			</div>

			{/** The body of the page, containing all Itineraries.*/}

			<div className="body-scroll">
				<ItinerarySummaryBlock
					tripTitle={"Trip to Bahamas"}
					startDate={"March 6th"}
					
					endDate={"March 16th"}
				/>

			</div>

			{/** The "add new" button */}
			<button className="button" style={{position:"fixed",left:"50%",bottom:"50px"}}>Add new itinerary</button>
			

		</div>
  );
}

/*
	The block that shows immediately salient information about a single 
	itinerary to the user on the home page.
*/
function ItinerarySummaryBlock({tripTitle, startDate, endDate}) {
	return (
		<div className="itinerary-box">
			<h2 style={{display: "inline-block", marginRight:"30px"}}>{tripTitle}</h2>
				<NameBubbleNoedit name={"User1"}></NameBubbleNoedit>
				<AddNameBubble/>
			<p>{startDate} to {endDate}</p>
			
			<button className="button" >View Itinerary</button>

		</div>
	);
}



/*
	Shows detail about a single itinerary, allowing the user to add events and manage
	users. 

*/
function ItineraryScreen({itineraryName}) {
	return (
		<div>
			<div>

				{/** The header -- contains a back to home screen button, plus the name */}
				<div className="header-banner">
					<button className="button">Back</button>
					<h1>{itineraryName}</h1>
				</div>

				<UsersBox users={usersArray} />
				
			</div>

			{/** the part which contains all the events */}

			<div className="body-scroll" style={{width:"65%"}}> 

				<ItineraryEvent
					eventName = {"Debby's flight"}
					eventDate = {"March 8th"}
					eventTime = {"15:35"}
					eventText = {"Flight number 1234567891234, seat 23C, landing approx 9pm (George will pickup)"}
					eventUsers = {["Debby"]}
					eventLink = {"https://bobby-tables.com/"}
				/>
				<ItineraryEvent
					eventName = {"Mark's flight"}
					eventDate = {"March 8th"}
					eventTime = {"18:35"}
					eventText = {"Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)"}
					eventUsers = {["Mark"]}
					eventLink = {"https://bobby-tables.com/"}
				/>
				<ItineraryEvent
					eventName = {"event 3"}
					eventDate = {"March 8th"}
					eventTime = {"18:35"}
					eventText = {"Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)"}
					eventUsers = {["Mark"]}
					eventLink = {"https://bobby-tables.com/"}
				/>
				<ItineraryEvent
					eventName = {"event 3"}
					eventDate = {"March 8th"}
					eventTime = {"18:35"}
					eventText = {"Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)"}
					eventUsers = {["Mark"]}
					eventLink = {"https://bobby-tables.com/"}
				/>

				{/** a spacer that lets the scroll look right. make sure the height of this matches the height of the footer.*/}
				<div style={{height:"150px"}}></div>

			</div>

			{/** the footer, containing a button to add new, and a background to make it a little more visible */}
			<div style={{position:"fixed", bottom:"0px", width:"100%", height:"150px", backgroundColor:"#111111aa"}}>
				<button className="new-event-button">Add new event</button>
			</div>

		</div>

	);
}

/**
 * Creates a bubble containing the name, as well as an X to delete it presumably.
 */
function NameBubble({name}) {
	return (
		<div className="name-bubble-not-interactive">
			<p style={{display: "inline-block"}}>{name}</p>
			<button className="x-button">X</button>
		</div>
	);
}


/**
 * Creates a bubble containing the name, but is a display element only. 
 */

function NameBubbleNoedit({name}) {
	return (
		<div className="name-bubble-not-interactive">
			<p style={{display: "inline-block"}}>{name}</p>
		</div>
	);
}

/**
 * Creates a bubble with a little plus, implying that the user can click on it to add
 * a new user. 
 */
function AddNameBubble() {
	return (
		<button className="name-bubble-interactive">
			<p style={{display: "inline-block"}}>+</p>
		</button>
	);
}

/*
	Creates the side box on the Itinerary screen that shows all users and allows you to add new
	ones to the itinerary. 
*/
function UsersBox({users}) {
	// Turns an array of strings into a displayable group of NameBubbles
	const userBubbles = users.map((element, i) =>
	<NameBubble key={i} name={element}></NameBubble> 
	)

	// Display those
return (
	<div className="users-box">
		<h3 style={{padding:"10px"}}>Participants</h3>
		{userBubbles}
		<AddNameBubble/>
	</div>
	
	
);


}

/*
	Creates a simpler array of name bubbles (with X'es), ideal for attaching to an
	event or itinerary to indicate who's already there. 
*/
function NamesToBubbles({users}) {
	// potential: using style = {{background-color: SOMETHING}} to give each user a unique color
	return (
		users.map((element, i) =>
		<NameBubble key={i} name={element}></NameBubble> )
	);
}


/*
	Displays a single event, containing salient information and a link to the rest of the data. 
*/
function ItineraryEvent({eventName, eventDate, eventTime, eventText, eventUsers, eventLink}) {
	return (
		<div className="itinerary-box">

				<h2 style={{display: "inline-block", marginRight:"30px"}}>{eventName}</h2>
				<NamesToBubbles users={eventUsers}/> 
				<AddNameBubble/>
				<p>Starts on {eventDate} at {eventTime}</p>
				<p><i>{eventText}</i></p>
				<p><a href={eventLink} target="_blank">Manage reservation on external website</a></p>

		</div>
	);
}


// Search Screen

function SearchScreen() {
	return (
		<div>
			{/** Header code */}
			<div className="header-banner">
				<h1>Search results</h1>
				<input style={{display:"inline-block", width:"90%", margin:"25px"}}></input>
				<p style={{display:"inline-block", marginRight:"10px"}}>Searching for: </p>
				<select style={{width:"50%"}}>
					<option value="accomodation">Hotel or other accomodation</option>
					<option value="travel">Plane, train, or automobile</option>
					<option value="event">Other event</option>
				</select>
				<p>Filters: </p>
				<NameBubble name="Placeholder for filter1"/>
				<NameBubble name="Placeholder for filter2"/>
				<AddNameBubble/>
				<hr/>
			</div>

			{/** Search results */}

			<div className="body-scroll" style={{marginTop:"225px"}}>
				<SearchResult title="Hotel X" cost="139" site="https://bobby-tables.com/" filters="filter2"/>
				<SearchResult title="Hotel Y" cost="139" site="https://bobby-tables.com/" filters="filter2"/>
				<SearchResult title="Hotel Z" cost="139" site="https://bobby-tables.com/" filters="filter1"/>
				<SearchResult title="Hotel X" cost="139" site="https://bobby-tables.com/" filters="filter2"/>
				<SearchResult title="Hotel Y" cost="139" site="https://bobby-tables.com/" filters="filter2"/>
				<SearchResult title="Hotel Z" cost="139" site="https://bobby-tables.com/" filters="filter1"/>

			</div>

		</div>
	);
}

function SearchResult({title, cost, site, filters}) {
	return (

	<div className="search-box">
		<h3 style={{display:"inline-block", marginRight:"30px"}}>{title}</h3>
		<NameBubbleNoedit name={filters}/>
		<h4>${cost}+ per night</h4>
		<p><a href={site} target="_blank">Visit site</a></p>
	</div>

	);
}

	// New event screen

function NewEventScreen() {
	return (

		<div>
			<h1>Add new event</h1>
			<select>
				<option value="accomodation">Hotel or other accomodation</option>
				<option value="travel">Plane, train, or automobile</option>
				<option value="event">Other event</option>
			</select>

			<p>Date:</p>
			<input type="date"></input>
			<p>End date (optional):</p>
			<input type="date"></input>
			<p>Start time (optional):</p>
			<input type="time"></input>
			<p>End time (optional):</p>
			<input type="time"></input>
			<p>Address/location (optional):</p>
			<input></input>
			<p>Website for managing event (optional):</p>
			<input></input>
			<p>Other notes (optional):</p>
			<textarea></textarea>
		</div>
	);

}
