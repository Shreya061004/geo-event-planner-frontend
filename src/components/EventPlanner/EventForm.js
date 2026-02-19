// import React, { useState, useRef } from 'react';
// import { GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../../styles/EventForm.css'


// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// const EventForm = () => {
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [mapLocation, setMapLocation] = useState(center);
//   const autocompleteRef = useRef(null);
//   const navigate = useNavigate();

//   const handlePlaceChanged = () => {
//     const place = autocompleteRef.current.getPlace();
//     if (place && place.geometry) {
//       setMapLocation({
//         lat: place.geometry.location.lat(),
//         lng: place.geometry.location.lng(),
//       });
//       setEventLocation(place.formatted_address);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (eventName && eventDate && eventLocation && eventDescription) {
//       try {
//         const response = await axios.post('http://localhost:5000/api/events/events', {
//           title: eventName,
//           description: eventDescription,
//           location: eventLocation,
//           date: eventDate,
//         });

//         if (response.data.success) {
//           setSuccessMessage(`Event "${eventName}" created successfully!`);
//           setErrorMessage('');

//           // Reset form fields
//           setEventName('');
//           setEventDate('');
//           setEventLocation('');
//           setEventDescription('');
//           setMapLocation(center);

//           // Redirect to the home2 page after 2 seconds
//           setTimeout(() => {
//             navigate('/home2');
//           }, 2000);
//         }
//       } catch (err) {
//         setErrorMessage(err.response?.data?.message || 'Error creating event');
//       }
//     } else {
//       setErrorMessage('Please fill all fields!');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <form className='container' onSubmit={handleSubmit}>
//       <h2 className='container'>Create Event</h2>
//       {successMessage && <p>{successMessage}</p>}
//       {errorMessage && <p>{errorMessage}</p>}

//       <label><strong>Event Name</strong></label>
//       <input
//         type="text"
//         placeholder="Enter event name"
//         value={eventName}
//         onChange={(e) => setEventName(e.target.value)}
//         required
//       />
//       <label><strong>Description</strong></label>
//       <textarea
//         placeholder="Enter event description"
//         value={eventDescription}
//         onChange={(e) => setEventDescription(e.target.value)}
//         required
//       ></textarea>

//       <label><strong>Event Date</strong></label>
//       <input
//         type="date"
//         value={eventDate}
//         onChange={(e) => setEventDate(e.target.value)}
//         required
//       />

//       <label><strong>Location</strong></label>
//       <Autocomplete
//         onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
//         onPlaceChanged={handlePlaceChanged}
//       >
//         <input
//           type="text"
//           placeholder="Enter location"
//           value={eventLocation}
//           onChange={(e) => setEventLocation(e.target.value)}
//           required
//         />
//       </Autocomplete>

      

//       <GoogleMap mapContainerStyle={containerStyle} center={mapLocation} zoom={15}>
//         <Marker position={mapLocation} />
//       </GoogleMap>

//       <button 
//   type="submit" 
//   style={{
//     backgroundColor: '#4CAF50', // Green background
//     color: 'white', // White text color
//     padding: '10px 20px', // Padding
//     border: 'none', // No border
//     borderRadius: '5px', // Rounded corners
//     cursor: 'pointer', // Pointer cursor on hover
//     fontSize: '16px', // Font size
//     marginRight: '10px', // Space between buttons
//     transition: 'background-color 0.3s' // Transition effect
//   }}
//   onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'} // Darker green on hover
//   onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'} // Reset to original on mouse out
// >
//   Create Event
// </button>
// <button 
//   type="button" 
//   style={{
//     backgroundColor: '#f44336', // Red background
//     color: 'white', // White text color
//     padding: '10px 20px', // Padding
//     border: 'none', // No border
//     borderRadius: '5px', // Rounded corners
//     cursor: 'pointer', // Pointer cursor on hover
//     fontSize: '16px', // Font size
//     transition: 'background-color 0.3s' // Transition effect
//   }}
//   onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e53935'} // Darker red on hover
//   onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f44336'} // Reset to original on mouse out
//   onClick={() => navigate('/home2')}
// >
//   Back
// </button>

//     </form>
//   );
// };

// export default EventForm;

import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/EventForm.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [mapLocation, setMapLocation] = useState(center);
  const autocompleteRef = useRef(null);
  const navigate = useNavigate();

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.geometry) {
      setMapLocation({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      setEventLocation(place.formatted_address);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (eventName && eventDate && eventLocation && eventDescription) {
      try {
        const response = await axios.post('http://localhost:5000/api/events/events', {
          title: eventName,
          description: eventDescription,
          location: eventLocation,
          date: eventDate,
        });

        if (response.data.success) {
          setSuccessMessage(`Event "${eventName}" created successfully!`);
          setErrorMessage('');

          // Reset form fields
          setEventName('');
          setEventDate('');
          setEventLocation('');
          setEventDescription('');
          setMapLocation(center);

          // Redirect to the home2 page after 2 seconds
          setTimeout(() => {
            navigate('/home2');
          }, 2000);
        }
      } catch (err) {
        setErrorMessage(err.response?.data?.message || 'Error creating event');
      }
    } else {
      setErrorMessage('Please fill all fields!');
      setSuccessMessage('');
    }
  };

  return (
    <form className='container' onSubmit={handleSubmit}>
      <h2 className='container'>Create Event</h2>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <h2>Create & Schedule Events.</h2>

      <label>Event Name</label>
      <input
        type="text"
        placeholder="Enter event name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        required
      />
      <label>Description</label>
      <textarea
        placeholder="Enter event description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        required
      ></textarea>

      <label>Event Date</label>
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        required
      />

      <label>Location</label>
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          type="text"
          placeholder="Enter location"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />
      </Autocomplete>

      <GoogleMap mapContainerStyle={containerStyle} center={mapLocation} zoom={15}>
        <Marker position={mapLocation} />
      </GoogleMap>

      {/* Button Container */}
      <div style={{
        display: 'flex',
        justifyContent: 'center', // Center the buttons
        marginTop: '20px', // Add space above the buttons
      }}>
        <button 
          type="submit" 
          style={{
            backgroundColor: '#4CAF50', // Green background
            color: 'white', // White text color
            padding: '10px 20px', // Padding
            border: 'none', // No border
            borderRadius: '5px', // Rounded corners
            cursor: 'pointer', // Pointer cursor on hover
            fontSize: '16px', // Font size
            marginRight: '10px', // Space between buttons
            transition: 'background-color 0.3s' // Transition effect
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'} // Darker green on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'} // Reset to original on mouse out
        >
          Create Event
        </button>
        <button 
          type="button" 
          style={{
            backgroundColor: '#f44336', // Red background
            color: 'white', // White text color
            padding: '10px 20px', // Padding
            border: 'none', // No border
            borderRadius: '5px', // Rounded corners
            cursor: 'pointer', // Pointer cursor on hover
            fontSize: '16px', // Font size
            transition: 'background-color 0.3s' // Transition effect
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e53935'} // Darker red on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f44336'} // Reset to original on mouse out
          onClick={() => navigate('/home2')}
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default EventForm;
