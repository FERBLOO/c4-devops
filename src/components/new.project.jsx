// vendors
import React from "react";
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const NewProject = () => {
  const token = sessionStorage.getItem('token');
  const user = jwt.decode(token)?.user;

  // Other material In
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.info.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
      theme.palette.info.dark,
      0.24
    )} 100%)`
  }));

// ----------------------------------------------------------------------

export default function AppNewProjects() {
    return (
      <RootStyle>
        <Link to="/project" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <IconWrapperStyle>
            <Icon icon="simple-icons:diagramsdotnet" width={24} height={24} />
          </IconWrapperStyle>
          <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
            Projects
          </Typography>
        </Link>
      </RootStyle>
    );
  }


// other material out


//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">{'Inicio'}</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/projects">{'Proyectos'}</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/users">{'Usuarios'}</Link>
//             </li>
//           </ul>
//           <ul className="navbar-nav justify-content-end">
//             {token ? <>Hola, {user.fullName}</> : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/users/login">{'Ingresa'}</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/users/login">{'Regístrate'}</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
 };

export default NewProject;
