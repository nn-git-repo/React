import React, { useState, useEffect } from "react";

const UpdateTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h2>Update Title Example (useEffect)</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default UpdateTitle;
