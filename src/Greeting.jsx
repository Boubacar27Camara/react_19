
const Greeting = ({ name = "Guest", message = "Hello"}) => {
    return ( 
        <div>
            <h2>{message}, {name}</h2>
        </div>
     );
}
 
export default Greeting;