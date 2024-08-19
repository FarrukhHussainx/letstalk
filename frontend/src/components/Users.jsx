import React from "react";

const Users = () => {
  return (
    <div className="flex items-center justify-between m-2">
      <div className="flex items-center justify-center gap-2">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1>Farrukh Hussain</h1>
        </div>
      </div>
      <div>
        <span>🎃</span>
      </div>
    </div>
  );
};

export default Users;
