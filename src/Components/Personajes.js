import React, { useState, useEffect } from "react";
import MD5 from "crypto-js/md5";
import { Card } from "./Card";
import "./Personajes.css";

export function Personajes() {
  var [personajes, setPersonajes] = useState([]);

  var message = "message";
  var priv = "";
  var publ = "";

  var concat = MD5(message + priv + publ).toString();

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("personajes") === null) {
        setPersonajes("Loading...");
      } else {
        setPersonajes(JSON.parse(localStorage.getItem("personajes")));
      }
    } else {
      const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=${message}&hash=${concat}&apikey=${publ}`;
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("personajes", JSON.stringify(res.data.results));
          setPersonajes(res.data.results);
        });
    }
  }, []);

  return (
    <>
      <div className="container">
        {personajes &&
          personajes.map((element) => (
            <Card
              description={element.description}
              name={element.name}
              imagen1={element.thumbnail.path}
              imagen2={element.thumbnail.extension}
              key={element.id}
            />
          ))}
      </div>
    </>
  );
}

export default Personajes;
