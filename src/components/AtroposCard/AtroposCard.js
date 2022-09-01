import {Atropos} from "atropos/react";
import React from 'react'
import "atropos/atropos.css";
import "./atroposCard.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import Box from "../box/Box";

export default function AtrposCard() {

  const navigate = useNavigate();

  return (
    <div className="flex m-auto 
    w-full max-w-xl h-screen max-h-[50vh] relative">
    <Atropos
    // commonOrigin={false}
      className="w-full h-full relative"
      // highlight={false}
      // onEnter={() => console.log("enter")}
    >
      
      <Box 
      p="p-[22px] pb-6"
        boxType={2} 
        className="w-full h-full "
      />

      <img
        data-atropos-offset="2"
        className="absolute h-[80%] top-0 left-0 object-cover rounded-xl"
        src="/assets/img/moonlight_desert.jpg"
        alt="background_for_world_seekers"
      />

      <img
        data-atropos-offset="6"
        className="absolute top-[20%] right-[10%] 
        w-[120px] h-[120px] md:w-[180px] md:h-[180px] 
        object-cover rounded-full"
        src="/assets/img/BackgroundCard1.png" 
        alt="background_for_world_seekers"
      />

      <img
        data-atropos-offset="8"
        className="absolute h-[60%] bottom-1/4 right-[10%] max-w-full max-h-full object-cover rounded-xl"
        src="/assets/img/dev_party_illustration.png" 
        alt="background_for_world_seekers"
      />

      <img
        data-atropos-offset="4"
        className="absolute h-[100%] top-0 -left-[10%] max-w-full max-h-full object-cover rounded-xl"
        src="/assets/img/fungi_mage_final.png" 
        alt="background_for_world_seekers"
      />

      <Button
        onClick={() => navigate("/projects")}
        data-atropos-offset="10"
        className="absolute bottom-4 preserve3d"
      >
        Ver proyectos
      </Button>
      
      </Atropos>
    </div>
  )
}
