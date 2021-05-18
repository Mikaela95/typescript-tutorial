// Safer than using any - any is giving up and might as well be writing vanilla JS
let userInput: unknown;
let userName: string;

userInput = 3;
userInput = "mikaela";

// Extra type checking when a value is of type unknown
if (typeof userInput === "string") {
  userName = userInput;
}

// Never type - this function never produces a return value. The inferred type is void but the new-er type never is actually being used. Good to put in, for readability
const generateError = (message: string, code: number): never => {
  // throw cancels the script - never produces a value hence never returns anything
  throw { message: message, errorCode: code };
};

generateError("An error occurred!", 500);
