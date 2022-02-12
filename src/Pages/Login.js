import { useForm } from "react-hook-form";
import { login } from "../Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Authenticated from "../HOC/Authenticated";

const Login = () => {

    const navigate = useNavigate();
    
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = async values => {
        try {
            await login(values).then(res => {
                if(res.ok) {
                    localStorage.setItem("token",res.result.access_token)
                    toast.success("login successfully")
                    navigate('/dashboard');
                } else {
                    toast.warning("its wrong..!")
                }
            }).catch(error => {
                toast.warning(error.response.data.result[0].message)
            });
        } catch(error) {
            toast.warning("its wrong..!")
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 content-center-h">
                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">username :</label>
                            <input 
                                type="text"
                                {...register("username", {required: true})} 
                                className="form-control"
                                id="username" 
                                placeholder="enter username"
                            />
                            {errors?.username?.type === "required" && <p>the username is required.</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">password :</label>
                            <input 
                                type="password" 
                                {...register("password", {required : true})}
                                className="form-control" 
                                id="password" 
                                placeholder="enter password"
                            />
                            {errors?.password?.type === "required" && <p>the password is required.</p>}
                        </div>
                        <div className="mb-2 mt-4 d-flex justify-content-center">
                            <input type="submit" className="btn btn-primary" value="login"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Authenticated(Login);