import React from "react";

import "./App.css";

import { StationsData } from "./stationsData";


export const Stations = () => {

  return (

    <>

      <div className="stock-container">

        {StationsData.map((data, key) => {

          return (

            <div key={key}>

              {data.id +

                " , " +

                data.stationName +

                " ," +

                data.description +

                ", " +

                
                data.subcity
                 +

                ", " +
                
                data.description
                +

               ", " +
               data.city
               +

              ", " +


                data.region}

            </div>

          );

        })}

      </div>

    </>

  );

};