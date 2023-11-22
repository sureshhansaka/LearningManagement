import React from "react";
import ButtonCustom from "../components/ButtonCustom";
import ModuleCard from "../components/ModuleCard";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Modules = () => {
  const navigation = useNavigate();

  const handleCreateClick = () => {
    console.log("Create Module clicked");
    navigation("/create-module");
  };

  return (
    <div className="modulePage">
      <h1 className="Moduleheading">Modules</h1>
      <ButtonCustom
        label="+ Create Module"
        height="50px"
        width="228px"
        onClick={handleCreateClick}
      />
      <div className="moduleCards">
        <ModuleCard moduleId="655c49756723559f1e822166" />
        <ModuleCard moduleId="655c49756723559f1e822166" />
        <ModuleCard moduleId="655c49756723559f1e822166" />
      </div>
    </div>
  );
};

export default Modules;
