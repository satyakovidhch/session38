import { useState } from "react"

function Contact(){
    const[formData,setFormData] = useState({
       name:"",
       email:"",
       message:"", 
    })


    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev, [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form Submitted Please Check Console!")
    }

    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow bg-danger-subtle" >
                <h4 className="text-center"> Contact </h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"> Name: </label>
                        <input value={formData.name} onChange={handleChange}
                         type="text" name="name" className="form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"> Email: </label>
                        <input value={formData.email} onChange={handleChange}
                         type="email" name="email" className="form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label"> Message </label>
                        <textarea value={formData.message} onChange={handleChange}
                        name="message" rows="3"
                        className="form-control" required > </textarea> 
                    </div>
                    <button className="btn btn-primary w-100"> Submit </button>
                </form>
            </div>
        </div>
    )
}
export default Contact