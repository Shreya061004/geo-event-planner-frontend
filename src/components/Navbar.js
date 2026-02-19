// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../firebase/firebaseConfig'; // Ensure this path is correct
// import { signOut } from 'firebase/auth';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Listen for authentication state changes
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe(); // Clean up the subscription
//   }, []);

//   // Handle logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null); // Clear the user after sign out
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         {/* Left-aligned brand name */}
//         <Link className="navbar-brand" to="/">Event Planner</Link>

//         {/* Toggle button for mobile responsiveness */}
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           {/* Right-aligned links using ms-auto */}
//           <ul className="navbar-nav ms-auto">
//             {!user ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/signup">Signup</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/create-event">Create Event</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/event-details">Event Details</Link>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-outline-secondary" onClick={handleLogout}>Logout</button>
//                 </li>
//                 <li className="nav-item">
//                   {/* User Profile Rounded Icon */}
//                   <div className="user-profile-icon">
//                     <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
//                   </div>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Event Planner</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">User Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create-event">Create Event</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/event-details">Event Details</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-link nav-link" onClick={onLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Sign Up</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
