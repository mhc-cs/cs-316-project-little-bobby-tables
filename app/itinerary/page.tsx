'use client';

import '../style.css';

import {use, useState} from 'react';

import {useRouter} from 'next/navigation';

var participantsArray = ["Joe", "Dave", "Carlos", "John"];


export default function Page() {
	return (	
		<ItineraryScreen itineraryName={"Joe's BBQ Bash"}/>
	
  );
	
	//<HomeScreen/>    <SearchScreen/>		<ItineraryScreen itineraryName={"Joe's BBQ Bash"}/>  <NewEventScreen/>

}


/* ------------
ITINERARY FOCUS
--------------- */

/*
	Shows detail about a single itinerary, allowing the user to add events and manage
	participants. 

*/
function ItineraryScreen({itineraryName}) {
	const router = useRouter();
	return (
		<div>
			<div>

				{/** The header -- contains a back to home screen button, plus the name */}
				<div className="header-banner">
					<button className="button"
						onClick={() => router.push("/home")}
						>Back</button>
					<h1>{itineraryName}</h1>
				</div>

				<ParticipantsBox participants={participantsArray} />
				
			</div>

			{/** the part which contains all the events */}

			<div className="body-scroll" style={{width:"65%"}}> 

				<TripEvent
					eventName = {"Debby's flight"}
					eventDate = {"March 8th"}
					eventTime = {"15:35"}
					eventText = {"Flight number 1234567891234, seat 23C, landing approx 9pm (George will pickup)"}
					eventParticipants = {["Debby"]}
					eventLink = {"https://bobby-tables.com/"}
				/>
				<TripEvent
					eventName = {"Mark's flight"}
					eventDate = {"March 8th"}
					eventTime = {"18:35"}
					eventText = {"Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)"}
					eventParticipants = {["Mark"]}
					eventLink = {"https://bobby-tables.com/"}
				/>
				<TripEvent
					eventName = {"event 3"}
					eventDate = {"March 8th"}
					eventTime = {"18:35"}
					eventText = {"Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)"}
					eventParticipants = {["Mark"]}
					eventLink = {"https://bobby-tables.com/"}
				/>
				<TripEvent
					eventName = {"event 3"}
					eventDate = {"March 8th"}
					eventTime = {"18:35"}
					eventText = {"Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)Flight number 13257451234, seat 23C, landing approx 9pm (George will pickup)"}
					eventParticipants = {["Mark"]}
					eventLink = {"https://bobby-tables.com/"}
				/>

				{/** a spacer that lets the scroll look right. make sure the height of this matches the height of the footer.*/}
				<div style={{height:"150px"}}></div>

			</div>

			{/** the footer, containing a button to add new, and a background to make it a little more visible */}
			<div style={{position:"fixed", bottom:"0px", width:"100%", height:"150px", backgroundColor:"#111111aa"}}>
				<button className="new-event-button"
					onClick={() => router.push("/itinerary/new-event")}
					>Add new event</button>
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


/*
	Creates the side box on the Itinerary screen that shows all participants and allows you to add new
	ones to the itinerary. 
*/
function ParticipantsBox({participants}) {
	// Turns an array of strings into a displayable group of NameBubbles
	const [isAddingParticipants, setIsAddingParticipants] = useState(false);
	let addButton = <AddNameBubble onButtonClick={() => setIsAddingParticipants(true)}/>;
	let selectionBox = <ParticipantSelection pool={participantsArray} onButtonClick={() => setIsAddingParticipants(false)}/>;


	const participantBubbles = participants.map((element, i) =>
	<NameBubble key={i} name={element}></NameBubble> 
	)

	// Display those
return (
	<div className="users-box">
		<h3 style={{padding:"10px"}}>Participants</h3>
		{participantBubbles}
		
		<div>
		{isAddingParticipants ?  selectionBox : addButton}
		</div>

	</div>
	
	
);


}

/*
	Creates a simpler array of name bubbles (with X'es), ideal for attaching to an
	event or itinerary to indicate who's already there. 
*/
function NamesToBubbles({participants}) {
	// potential: using style = {{background-color: SOMETHING}} to give each participant a unique color
	return (
		participants.map((element, i) =>
		<NameBubble key={i} name={element}></NameBubble> )
	);
}

/*

Manages and displays the participants for a particular event.
Controls the addition of new participants, the deletion of old participants.
TODO: Currently displayed participants should probably be a state.

*/
function EventParticipantsManager({eventParticipants}) {
	const [isAddingParticipants, setIsAddingParticipants] = useState(false);
	let addButton = <AddNameBubble onButtonClick={() => setIsAddingParticipants(true)}/>;
	let selectionBox = <ParticipantSelection pool={participantsArray} onButtonClick={() => setIsAddingParticipants(false)}/>;

	
	// isActive={activeIndex === 0}
	// onButtonClick={() => setIsAddingParticipants(true)}

	// {cond ? <A /> : <B />}

	return (
		<span>
			<NamesToBubbles participants={eventParticipants}/> 
			{isAddingParticipants ?  selectionBox : addButton}
		</span>

	);

}

/**
 * Creates a bubble with a little plus, implying that the user can click on it to add
 * a new participant. 
 */
function AddNameBubble({onButtonClick}) {
	return (
		<button className="name-bubble-interactive" onClick={onButtonClick}>
			<p style={{display: "inline-block"}}>+</p>
		</button>
	);
}


/*
	Renders a selection box containing all participants in the unselected pool, 
	as well as an OK button to add a selected participant to the pool for that event.
*/
function ParticipantSelection({pool, onButtonClick}) {
	// Maps the pool of unselected users to selection boxes.
	const selectionValues = pool.map(
		(element, i) =>
		<option  className="name-bubble-not-interactive" key={i} value={element}>{element}</option> 
	)
	return (
		<div style={{display: "inline-block"}}>

			<select>
				<option value="none"></option>
				{selectionValues}
			</select>

			<button className="name-bubble-interactive" onClick={onButtonClick}>
				<p style={{display: "inline-block"}}>OK</p>
			</button>
			
		</div>
	)
}



/*
	Displays a single event, containing salient information and a link to the rest of the data. 
	The client can also manage participants. 
*/
function TripEvent({eventName, eventDate, eventTime, eventText, eventParticipants, eventLink}) {

	return (
		<div className="itinerary-box">

				<h2 style={{display: "inline-block", marginRight:"30px"}}>{eventName}</h2>
				
				{/** Displays the participants, and allows the client to manage users */}
				<EventParticipantsManager eventParticipants={eventParticipants}/>

				<p>Starts on {eventDate} at {eventTime}</p>
				<p><i>{eventText}</i></p>
				{/** Opens the link to the reservation, in a new tab */}
				<p><a href={eventLink} target="_blank">Manage reservation on external website</a></p>

		</div>
	);
}



	// New event screen

// Avoid caching, so that hot updates work as expected
export const dynamic = 'force-dynamic'
// Get the language data from the database.
// Returns a json object.
async function getData() {
    try {
        const res = await fetch(
			'http://cs-vm-02.cs.mtholyoke.edu:31600/api'
			//'http://localhost:31600/api'
			);
        console.log('Frontend Fetch: Response status:', res.status);
        const data = await res.json();
        console.log('Frontend Fetch: Data from server:', data);
        return data;
    } catch (error) {
        console.error('Frontend Fetch: Error fetching data:', error);
        throw error;
    }

}
