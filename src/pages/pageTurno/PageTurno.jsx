import { useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import {
  useGetTurnsQuery,
  useDeleteTurnMutation,
} from '../../redux/turnSlices';
import Table from 'react-bootstrap/Table';
import './PageTurnoStyle.css';
import moment from 'moment';
import Swal from 'sweetalert2';

const Turno = () => {
 const [deleteTurn] = useDeleteTurnMutation();
  const identificationNumber = useSelector(
    (state) => state.user.identificationNumber,
  );
  console.log(identificationNumber);
  // useEffect(() => {
  // if (data) {
  // Filtra los customers por identificationNumber
  //   const filteredCustomers = data.filter((item) => item.customer.identificationNumber === identificationNumber);
  //   users.push(filteredCustomers)
  // Aquí puedes guardar los customers filtrados en el estado de Redux, si es necesario
  // }
  //   }, [data, identificationNumber]);

  const formatDate = (dateString) => {
    const date = moment(dateString, 'MMMM Do YYYY, h:mm:ss a');
    return date.format('DD/MM/YY');
  };


  const { data, isError, isLoading, error } = useGetTurnsQuery(); //ME PUEDO DVOLVER LA DATA, EL ERROR(TRUE FALSE), PROPIEDAD IS LOADING (TRUEFALSE), ERROR CUAL ES EL ERROR
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error}</div>;
  console.log(data);
  const users =
    
    data.filter(
      (item) => item.customer.identificationNumber === identificationNumber,
    );

  console.log(users);
//   const borrarTurn = useCallback(() => {
// 	Swal.fire({
// 		title: "Estas seguro?",
// 		text: "No se podra revertir!",
// 		icon: "warning",
// 		showCancelButton: true,
// 		confirmButtonColor: "#E95821",
// 		cancelButtonColor: "#5B5B5B",
// 		confirmButtonText: "Si, borrar!",
// 	}).then((result) => {
// 		if (result.isConfirmed) {
// 			deleteTurn(identificationNumber);
// 			Swal.fire({
// 				icon: "success",
// 				title: "Producto borrado!",
// 				showConfirmButton: false,
// 				timer: 1500,
// 			});
// 			setShow(false);
// 		}
// 	});
// }, []);
  return(
  <div className="general">
    <div>
      <h1>Consulta tu turno</h1>
      <p className="parrafo">
        Puedes revisar la información detallada del último turno que
        solicitaste, junto al historial guardado en nuestro sistema.
      </p>
    </div>
    <Table className="table" borderless hover>
      <thead className="encabezado">
        <tr>
          <th>Datos Personales</th>
		  
          <th>Fecha y hora</th>
		  
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <>
            <tr className='body' key={user._id}>
              <td>
                {user.customer.name} {user.customer.surName}    email: {user.customer.customerEmail}
                
              </td>

              <td>
                {formatDate(user.date)} {user.timeSlot}
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </Table>
    <p className="parrafo">
      Haz click{' '}
      <a href="#" 
		onClick={(e)=>borrarTurn()}
	  >
        aqui
      </a>{' '}
      para eliminar tu historial de turnos datos personales
    </p>
  </div>
  )
};

export default Turno;
