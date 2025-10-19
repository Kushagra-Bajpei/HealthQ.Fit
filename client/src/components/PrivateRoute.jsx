import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  
  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // If user is logged in, show the protected page
  return children;
};

export default PrivateRoute;















// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useAuth();
  
//   // Show loading while checking authentication
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-900">
//         <div className="text-white text-lg">Loading...</div>
//       </div>
//     );
//   }
  
//   // If user is not logged in, redirect to login page
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }
  
//   // If user is logged in, show the protected page
//   return children;
// };

// export default PrivateRoute;