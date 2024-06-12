"use client";
// necessary bc of click event (user interaction) on retry button
import React from "react";

// catches any error on any page of the application
// *important note- in this file, we can't capture errors that happen in the app/layout.tsx file...
// in more complex applications, we would want to creat global-error.tsx in app directory to account for this

interface Props {
  error: Error;
  reset: () => void;
  // sometimes errors are temporary so in certain parts of the app we may want to give users a chance to retry...
  // to do this we add the property reset, a fxn that returns void
  // next.js will automatically pass the reset fxn to our component
}
// to access error that occurred...
// next.js will automatically pass the error obj to this component

// best practice to use an error logging service (like Sentry) to log error rather than console logging which will only be visible to client...
// to log it somewhere permanent so we can identify the issues in our app

const error = ({ error, reset }: Props) => {
  <>
    return <div>An unexpected error has occurred.</div>;
    <button className="btn" onClick={() => reset()}>
      Retry
    </button>
    {/* giving the user a chance to retry */}
  </>;
};

export default error;
