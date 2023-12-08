const TodosDetail = ({all,finished,unfinished}) => {
    return ( 
        <div>
            <p>َAll todos:{all}</p>
            <p>Finished todos:{finished}</p>
            <p>Unfinished todos: {unfinished}</p>
        </div>
     );
}
 
export default TodosDetail;