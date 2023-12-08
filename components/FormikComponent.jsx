const FormikComponent = ({label,name,formik,type="text"}) => {
    return ( 
<div className='flex flex-col gap-2'>
<label htmlFor={name} className="text-teal-900">{label}</label>
<input type={type} name={name} id={name}
 className={`formInput ${formik.touched[name] && formik.errors[name] && 'border-red-400 shadow-red-500'}`}
  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values[name]} />
{formik.touched[name] && formik.errors[name] && (
  <span className='text-red-400'>{formik.errors[name]}</span>
)}
</div>
     );
}
 
export default FormikComponent;