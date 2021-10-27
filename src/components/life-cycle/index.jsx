import ParentComp from "./mounting/parentComp";

import ChildrenComp from "./mounting/children";
import GrandChildren from "./mounting/grandchildren";

const LifeCycle = () => {
  return (
    <>
      <div>
        <ParentComp />
        <ChildrenComp />
        <GrandChildren />
      </div>
    </>
  );
};

export default LifeCycle;
