import PropTypes from 'prop-types';
import { useRef } from 'react';

const Profile = ({fullName, bio, profession, handleName, children}) => {
    const ref = useRef()
    return <form
        style={{display: 'flex', 
        flexDirection: 'column', alignItems: 'center', margin:'100px auto auto auto',
    }}
        onSubmit={e=>{e.preventDefault(); handleName(ref.current.value)}}>
        <input style={{width:'200px', height: '50px',marginBottom:'10px',textAlign:'center',borderRadius:'2px'}} defaultValue={fullName} ref={ref}/>
        <input style={{width:'200px', height: '50px',marginBottom:'10px',textAlign:'center',borderRadius:'2px'}} defaultValue={bio}/>
        <input style={{width:'200px', height: '50px',marginBottom:'10px',textAlign:'center',borderRadius:'2px'}} defaultValue={profession} />
        {children}
        <button 
        style={{background:'#00FF00', width:'200px', height: '50px',borderRadius:'2px'}} 
        >submit</button>
    </form>
}

Profile.defaultProps = {
    fullName: '',
    bio: '',
    profession: '',
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}

export default Profile