import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu, { MenuItem } from "../../components/utils/Menu";
import { changeButtonStyles } from "./buttonSlice";

const ButtonEditor = () => {
  const { styles } = useSelector((state) => state.button);
  const [activeMenu, setActiveMenu] = useState("Text");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name: property, value } = e.target;
    dispatch(changeButtonStyles({ property, value }));
  };

  return (
    <div className="w-full flex flex-col gap-2 ">
      {/* text */}
      <Menu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        title={"Text"}
      >
        <MenuItem
          label={"font-weight"}
          name="font weight"
          value={styles["font-weight"]}
        >
          <select name="font-weight" id="font-weight" onChange={handleChange}>
            <option value="400">normal</option>
            <option value="300">light</option>
            <option value="700">bold</option>
          </select>
        </MenuItem>

        <MenuItem
          label={"font-size"}
          name="font size"
          value={styles["font-size"]}
        >
          <select name="font-size" id="font-size" onChange={handleChange}>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="32">32</option>
            <option value="40">40</option>
            <option value="48">48</option>
          </select>
        </MenuItem>
      </Menu>
      {/* padding */}

      <Menu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        title={"Padding"}
      >
        <MenuItem name={"paddingX"} label="paddingX" value={styles["paddingX"]}>
          <input
            type="range"
            value={styles["paddingX"]}
            name="paddingX"
            id="paddingX"
            onChange={handleChange}
          />
        </MenuItem>

        <MenuItem name={"paddingY"} label="paddingY" value={styles["paddingY"]}>
          <input
            type="range"
            value={styles["paddingY"]}
            name="paddingY"
            id="paddingY"
            onChange={handleChange}
          />
        </MenuItem>
      </Menu>

      {/* colors */}
      <Menu
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        title={"Colors"}
      >
        <MenuItem
          name="color"
          label={"color"}
          value={styles.color}
          className=""
        >
          <input
            type="color"
            id="color"
            name="color"
            value={styles["color"]}
            onChange={handleChange}
          />
        </MenuItem>
        <MenuItem
          name="background color"
          value={styles["background-color"]}
          label={"background-color"}
        >
          <input
            id="background-color"
            type="color"
            name="background-color"
            value={styles["background-color"]}
            onChange={handleChange}
          />
        </MenuItem>
      </Menu>
      {/* border */}

      <Menu
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        title={"Border"}
      >
        <MenuItem
          name="border color"
          label="border-color"
          value={styles["border-color"]}
        >
          <input
            type="color"
            id="border-color"
            name="border-color"
            value={styles["border-color"]}
            onChange={handleChange}
          />
        </MenuItem>
        <MenuItem
          label={"border-width"}
          name={"border-width"}
          value={styles["border-width"]}
        >
          <input
            id="border-width"
            type="range"
            max="10"
            name="border-width"
            value={styles["border-width"]}
            onChange={handleChange}
          />
        </MenuItem>

        <MenuItem
          label={"border-type"}
          name="border type"
          value={styles["border-type"]}
        >
          <select name="border-type" onChange={handleChange} id="border-type">
            <option value="solid">Solid</option>
            <option value="dotted">Dotted</option>
            <option value="dashed">Dashed</option>
          </select>
        </MenuItem>
        <div>
          <label htmlFor="border-radius">
            border-radius: {styles["border-radius"]}
          </label>
          <input
            id="border-radius"
            type="range"
            max="60"
            name="border-radius"
            value={styles["border-radius"]}
            onChange={handleChange}
          />
        </div>
      </Menu>
    </div>
  );
};

export default ButtonEditor;
