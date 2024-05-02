import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const [theme, setTheme] = useState(false);

const handleTheme = () => {
  setTheme(!theme);
};

<div className="navbar-end">
  <label className="swap swap-rotate">
    <input type="checkbox" onChange={handleTheme} />
    <BsSunFill className="swap-on h-4 w-4" />
    <BsMoonFill className="swap-off h-4 w-4" />
  </label>
</div>;
