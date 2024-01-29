import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";

export default function SignIn() {

  const {googleSignIn} = UserAuth()
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="content">
      <h1>Sign In Here</h1>
      <GoogleButton onClick={handleGoogleSignIn}/>
    </div>
  );
}
