import './profile.css'

const Profile = ({datosPersonales,textMessage}) => {


    const handleEventClick = () => {
       location.reload();
    }

    return (
        <div className='profile'>
            <h1>Dates:</h1>
            <div className='profile-dates'>
                <h3>First Name: {datosPersonales.name}</h3>
                <h3>Second Name: {datosPersonales.surname}</h3>
                <h4>Email: {datosPersonales.email}</h4>
                <p>Message: {textMessage}</p>
               
            </div>
            <button onClick={handleEventClick}className='btn-restore'>Restore</button>
        </div>
    )
}

export default Profile;