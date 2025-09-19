import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Mail, Phone, Eye, EyeOff } from "lucide-react";

const LoginPage = ({ onClose, onSwitchToSignup }) => {
  const [loginMethod, setLoginMethod] = useState("email"); // 'email', 'phone', 'google'
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", { method: loginMethod, data: formData });
      setIsLoading(false);
      // Handle successful login here
      alert("Login functionality would be implemented here!");
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate Google OAuth
    setTimeout(() => {
      console.log("Google login attempted");
      setIsLoading(false);
      alert("Google login would be implemented here!");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-orange-100">Continue your learning journey</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Login Method Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setLoginMethod("email")}
              className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                loginMethod === "email"
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </button>
            <button
              onClick={() => setLoginMethod("phone")}
              className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                loginMethod === "phone"
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Phone
            </button>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full mb-6 p-3 border-2 border-gray-200 rounded-2xl hover:border-gray-300 transition-all duration-200 flex items-center justify-center gap-3 group disabled:opacity-50"
          >
            <div className="w-5 h-5 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="font-medium text-gray-700 group-hover:text-gray-900">
              {isLoading ? "Connecting..." : "Continue with Google"}
            </span>
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email/Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {loginMethod === "email" ? "Email Address" : "Phone Number"}
              </label>
              <input
                type={loginMethod === "email" ? "email" : "tel"}
                name={loginMethod}
                value={formData[loginMethod]}
                onChange={handleInputChange}
                placeholder={
                  loginMethod === "email" 
                    ? "Enter your email" 
                    : "Enter your phone number"
                }
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full p-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition-all disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Switch to Signup */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={onSwitchToSignup}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;