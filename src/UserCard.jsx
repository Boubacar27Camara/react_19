import { UserInfo } from "./UserInfo";

export const UserCard = ({ id, ...rest }) => {
    return ( 
        <>
         <h2>User {id} Details</h2>
         <UserInfo {...rest} />
         {/* <UserInfo name={name} age={age} city={city} email={email} /> */}
        </>
     );
}
 
