import React from "react";

import "./App.css";

import { UsersData } from "./usersData";


export const Users = () => {

  return (

    <>

      <div className="stock-container">

        {UsersData.map((data, key) => {

          return (

            <div key={key}>

              {
                data.userId +

                " ," +

                data.firstName +

                ", " +

                data.middleName
                 +

                ", " +
                
                data.lastName
                 +

                ", " +
                
      
                  
                    data.addresses[0].email
              
                +

               ", " +
               data.addresses[0].phone1
               +

              ", " +
                data.addresses[0].phone2 +
                
              ", " +
                data.addresses[0].houseNumber
                +

               ", " +
               
               data.addresses[0].city
                +

               ", " +
               
               data.addresses[0].country
               +

              ", " +
              data.addresses[0].streetAddress

              }

            </div>

          );

        })}

      </div>

    </>

  );

};