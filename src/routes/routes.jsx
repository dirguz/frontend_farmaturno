import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PageNewAppointment from '../pages/PageNewAppointment/PageNewAppointment';
import PageTurno from '../pages/pageTurno/PageTurno';
import Home from '../pages/Home/Home';
import NoAppointmentPrueba from '../pages/noAppointment/NoAppointmentprueba';
import { Confirmation } from '../pages/Confirmation/Confirmation';
import PageHomeFarmacia from '../pages/pagePerfilFarmaceutico/PageHomeFarmacia';
import PharmacyPlans from '../pages/pharmacyPlans/PharmacyPlans';
import SignUpPharmacy from '../pages/signUpPharmacy/SignUpPharmacy';
import PharmacyProvider from '../pages/signUpPharmacy/context/PharmacyProvider';
import LoginPharmacy from '../pages/logInPharmacy/LoginPharmacy';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'nuevoTurno', element: <PageNewAppointment /> },
      { path: 'miTurno', element: <PageTurno /> },
      {
        path: 'no_appointment',
        element: <NoAppointmentPrueba />,
      },
      {
        path: 'pharmacy',
        element: <PharmacyPlans />,
      },
      {
        path: 'pharmacy/signUp/adminitration_allowed',
        element: <LoginPharmacy />,
      },

      { path: 'no_appointment', element: <NoAppointmentPrueba /> },
      {
        path: 'confirmacion_turno',
        element: <Confirmation />,
      },
      { path: 'pharmacy/profile', element: <PageHomeFarmacia /> },

      {
        path: 'pharmacy/signUp',
        element: (
          <PharmacyProvider>
            <SignUpPharmacy />
          </PharmacyProvider>
        ),
        children: [{}],
      },
    ],
  },
]);