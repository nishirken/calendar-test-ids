import { makeTestIdSelectors } from "test-ids";

export type AuthFormElement =
  | "root"
  | "emailInput"
  | "emailError"
  | "passwordInput"
  | "passwordError"
  | "sumbitButton";

export type AuthFormTestIds = Record<AuthFormElement, string>;

export const signupFormTestIds: AuthFormTestIds = {
  root: "signup-form",
  emailInput: "signup-form-email-input",
  emailError: "signup-form-email-error",
  passwordInput: "signup-form-password-input",
  passwordError: "signup-form-password-error",
  sumbitButton: "signup-form-submit-button",
};

export const signupFormTestIdSelectors = makeTestIdSelectors(signupFormTestIds);

export const signinFormTestIds: AuthFormTestIds = {
  root: "signin-form",
  emailInput: "signin-form-email-input",
  emailError: "signin-form-email-error",
  passwordInput: "signin-form-password-input",
  passwordError: "signin-form-password-error",
  sumbitButton: "signin-form-submit-button",
};

export const signinFormTestIdSelectors = makeTestIdSelectors(signinFormTestIds);
