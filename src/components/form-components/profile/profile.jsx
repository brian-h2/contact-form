const Profile = ({datosPersonales, options,textMessage}) => {

    return (
        <>
            <h1>Profile</h1>
            <h2>First Name: {datosPersonales.name}</h2>
            <h3>Second Name: {datosPersonales.surname}</h3>
            <h4>Email: {datosPersonales.email}</h4>
            <p>Mensaje: {textMessage}</p>
        
            
        </>
    )
}

export default Profile;