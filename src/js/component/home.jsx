import React, {useState} from "react";
const Home = () => {
	const [selectedColor, setSelectedColor]= useState("red")
  return (
    <div className="text-center">
      <div className="cable mx-auto"></div>
      <div className="light-box mx-auto">
		<div className={selectedColor=="red"?"light red selected":"light red"} onClick={()=>{setSelectedColor("red")}}>
		</div>
		<div className={selectedColor=="yellow"?"light yellow selected":"light yellow"} onClick={()=>{setSelectedColor("yellow")}}></div>
		<div className={selectedColor=="green"?"light green selected":"light green"} onClick={()=>{setSelectedColor("green")}}></div>
	  </div>
	
    </div>
  );
};

export default Home;
