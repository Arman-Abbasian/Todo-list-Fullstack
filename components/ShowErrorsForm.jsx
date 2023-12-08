const ShowErrorsForm = ({message}) => {
    return ( 
          <div className="text-red-700 flex gap-2">
            <p>{message}</p>
          </div>
     );
}
 
export default ShowErrorsForm;