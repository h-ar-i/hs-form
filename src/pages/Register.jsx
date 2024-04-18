import React, { useState } from 'react';
import { registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
});
console.log(formData);
const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async(e) => {
    e.preventDefault();
    
if(formData.name && formData.address &&formData.mobile &&formData.email &&formData.gender &&formData.dob &&formData.course){
    try{
        const result = await registerAPI
        (formData)
        console.log(result);
        if(result.status==200){
            toast.success("welcome")
            setFormData({ name: '',
            address: '',
            mobile: '',
            email: '',
            gender: '',
            dob: '',
            course: ''})
            setTimeout(()=>{
                navigate('/dashboard')
            },2000);
        }else{
            alert("result.response.data")
            setTimeout(()=>{
                setFormData({ name: '',
                address: '',
                mobile: '',
                email: '',
                gender: '',
                dob: '',
                course: ''})

            },2000)
        }

  }catch(err){
    console.log(err);
  }
}else{
toast.warning("please fill form")
}
};

const handleCancel = () => {
   setFormData ({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: ''
    });
    toast.warning("Registration Cancelled.");
};

  return (
    <>
          <div style={{ width: '100%', height: '60px', backgroundColor: 'blue', color: 'white' }} className='d-flex justify-content-between'>
        <h3>  <i className="fa-solid fa-graduation-cap"></i> Education</h3>
        <div>Home</div>
        <div>service</div>
        <div>About Us</div>
        <div>Login</div>
      </div>

     <div className="container">
    <h1 className="mt-4 mb-4"><u>Higher Secondary Admission Registration</u></h1>
    <div className="row">
        <div className="col-lg-4 border border-primary border-2">
        <img style={{height:'300px'}} className='mt-2 p-3' src="https://i.pinimg.com/originals/92/73/08/927308edb73d0d73e86fef57c4a6c1ce.jpg" alt="" />
            <div className='w-100 d-flex justify-content-center align-items-center rounded'>
              <h1 style={{color:'green'}}>Welcome</h1>
            </div>
            <p className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis consequatur incidunt rem sunt vel eveniet, nesciunt neque mollitia minus! Fugit nostrum debitis dolorem soluta placeat nisi omnis, consequuntur est ab.</p>
            <button className='btn btn-primary ms-5'>BACK</button>

        </div>
        <div style={{backgroundColor:'blue'}} className="col-lg-8">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile:</label>
            <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="form-select" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="course" className="form-label">Course:</label>
            <select id="course" name="course" value={formData.course} onChange={handleChange} className="form-select" required>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
            </select>
        </div>
        <div className="mb-3">
            <button type="submit" className="btn btn-success me-2">Register</button>
            <button type="button" onClick={handleCancel} className="btn btn-danger">Cancel</button>
        </div>
    </form>
        </div>
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={3000} />
  
</div>

</>
  )
}

export default Register