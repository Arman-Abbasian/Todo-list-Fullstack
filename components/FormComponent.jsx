const FormComponent = ({label,name,onChange,value,type="text"}) => {
    return ( 
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-teal-900">{label}</label>
            <input type={type} name={name} id={name} className="formInput" onChange={onChange} value={value} />
        </div>
     );
}
 
export default FormComponent;