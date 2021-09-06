import React from "react";

import "./App.css";

import { RoutesData } from "./routesData";


export const Routes = () => {

  return (

    <>

      <div className="stock-container">

        {RoutesData.map((data, key) => {

          return (

            <div key={key}>

              {data.id +

                " , " +

                data.routeName +

                " ," +

                data.description +

                ", " +

                data.initialStation.stationName
                 +

                ", " +
                
                data.initialStation.subcity
                 +

                ", " +
                
                data.initialStation.description
                +

               ", " +
               data.initialStation.city
               +

              ", " +
                data.initialStation.region +
                
              ", " +
                data.subStation1.stationName
                +

               ", " +
               
               data.subStation1.subcity
                +

               ", " +
               
               data.subStation1.description
               +

              ", " +
              data.subStation1.city
              +

             ", " +
               data.subStation1.region+
               ", " +
               data.subStation2.stationName
               +

              ", " +
              
              data.subStation2.subcity
               +

              ", " +
              
              data.subStation2.description
              +

             ", " +
             data.subStation2.city
             +

            ", " +
               data.subStation2.region
 +
 
               ", " +
               data.subStation3.stationName
               +

              ", " +
              
              data.subStation3.subcity
               +

              ", " +
              
              data.subStation3.description
              +

             ", " +
             data.subStation3.city
             +

            ", " +
              data.subStation3.region
              
              +
 
              ", " +
              data.finalStation.stationName
              +

             ", " +
             
             data.finalStation.subcity
              +

             ", " +
             
             data.finalStation.description
             +

            ", " +
            data.finalStation.city
            +

           ", " +
             data.finalStation.region

              }

            </div>

          );

        })}

      </div>

    </>

  );

};