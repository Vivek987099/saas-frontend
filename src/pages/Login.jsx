import { ArrowRight, Lock, Mail, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../feature/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLogin } from "../feature/auth/authSlice";

function Login() {
  const [login,{isLoading}] = useLoginMutation();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await login(data).unwrap();
      if(result.status){
        toast.success(result?.message)
        dispatch(setLogin({
          user: result?.user,
          accessToken:result?.access_token
        }))
        navigate("/admin")
      }
    } catch (error) {
        if(error.status === 401){
          toast.error(error?.data?.message)
        }
        if(error?.status === "FETCH_ERROR"){
            toast.error(error?.error)
        }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 selection:bg-indigo-500 selection:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.15),transparent_50%)]"></div>

      <div className="max-w-md w-full bg-slate-900/80 border border-slate-800 p-8 rounded-2xl shadow-2xl backdrop-blur-xl relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex w-12 h-12 bg-indigo-600 rounded-xl items-center justify-center shadow-lg shadow-indigo-500/30 mb-3">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Welcome back to DevPulse AI
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Sign in to access your dashboard & metrics
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="example@gmail.com"
                {...register("email", { required: "Email is required" })}
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                placeholder="xxxxxxxx"
                {...register("password", { required: "Password is required" })}
                className="w-full bg-slate-950/60 border border-slate-800  rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all mt-6"
          >
            <span className="mx-5">{(isLoading)?'Logging in':'Login'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
