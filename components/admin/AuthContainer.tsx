"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function AuthContainer() {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchToSignUp = () => setIsSignUp(true);
  const switchToLogin = () => setIsSignUp(false);

  if (isSignUp) {
    return <SignUpForm onSwitchToLogin={switchToLogin} />;
  }

  return <LoginForm onSwitchToSignUp={switchToSignUp} />;
}