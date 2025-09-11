import { useEffect, useState } from "react";

const Effect = () => {

  let [dependencyA, setDependencyA] = useState(0);
  let [dependencyB, setDependencyB] = useState(0);

  useEffect(() => {
    // এখানে side effect এর কাজ হবে

    console.log("Hello");
  }, [dependencyA, dependencyB])    // dependency array  

  return (
    <div className="pl-5 pt-5">
      <button
        className="btn_shadow p-5 rounded-2xl"
        onClick={() => setDependencyA( dependencyA += 1 )}
      >
        Click A 
      </button>

      <button
        className="btn_shadow p-5 rounded-2xl"
        onClick={() => setDependencyB( dependencyB += 1 )}
      >
        Click A 
      </button>
    </div>
  );
};

export default Effect;


/*
-> Common side effects:
-> API থেকে ডাটা ফেচ করা
-> LocalStorage এ ডাটা রাখা বা পড়া
-> DOM element এর সাথে সরাসরি কাজ করা
-> Event listener attach/remove করা
-> Timer (setTimeout, setInterval) চালানো

-> React এর hook → useEffect side effect গুলোকে handle করার জন্য।
*/