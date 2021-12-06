import React from "react";
const Greeting = () => {
  console.log(`I am Greeings....`);
  return (
    <>
      <div>
        <h2 className="mb-4">Hi i am useCallback Hooks</h2>
      </div>
    </>
  );
};

export default React.memo(Greeting);
