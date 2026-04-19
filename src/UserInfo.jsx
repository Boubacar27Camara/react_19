
export const UserInfo = ({name, age, city, email}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age : {age}</p>
            <p>City : {city}</p>
            <p>Email : {email}</p>
        </div>
    )
}