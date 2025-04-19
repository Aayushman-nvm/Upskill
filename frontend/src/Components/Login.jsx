import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 animate-gradient-move overflow-hidden">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full flex-col flex items-center">
        <h1 className="text-2xl font-bold text-center mb-6 border-[4px] rounded-lg w-fit p-2">Login to UpSkill</h1>
        <p className="text-gray-600 mb-6 text-center">
          Login to access all free learning resources and courses.
        </p>
        
        <div className="space-y-4">
          <Link
            to="https://upskill.up.railway.app/auth/github"
            className="flex items-center justify-center gap-2 w-full bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors"
          >
            <GitHubIcon />
            <span>Login with GitHub</span>
          </Link>
          
          <p className="text-sm text-gray-500 text-center">
          By logging in, you agree to the Terms of Service and Privacy Policies of the content providers and GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}