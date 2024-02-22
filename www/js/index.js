/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  document.getElementById('deviceready').classList.add('ready');


 
}

  

  const btn = document.querySelector(".btn");
  btn.addEventListener("click", async function (event) {

    event.preventDefault();

    const inputText = document.querySelector(".inputText");
    if (inputText.value === "V1") {


      const messageContainer = document.createElement("div");
      messageContainer.classList.add("message-container");

      const sms = document.createElement("div");
      sms.classList.add("sms");
      sms.innerText = "vous avez validez";

      const screen = document.querySelector(".screen");

      messageContainer.appendChild(sms)
      screen.appendChild(messageContainer);

      //pour que la réponse apparaisse 
      /** j'utilise d'ailleurs la fonction setTimeout pour qu'elle se lance avec un léger décalage 
       * dans cce cas, je n'appelle pas la fonction. Je suis en train de faire comprendre au programme
       * que la fonction reponse sera éxécuté après l'intervalle de temps donné.
       * c'est pour ça que reponse n'a pas de parenthèse.
       * si j'en avais mis, ça reviendrait à utiliser le résultat de la fonction (dans la mesure ou elle en renvoie un)
       * 
       * voici la doc si besoin
       * https://developer.mozilla.org/fr/docs/Web/API/setTimeout
      */
      setTimeout(reponse,10000);
    }
   
  });


  async function reponse() {

    

  const onSuccess = async function (position) {

    const latitude = position.coords.latitude;
    console.log(latitude);

    const longitude = position.coords.longitude;
    console.log(longitude);

    

    
    const reponseContainer = document.createElement("div");
    reponseContainer.classList.add("reponse-container");

    const rep = document.createElement("div");
    rep.classList.add("rep");

    rep.innerText = `Votre position est : ${latitude} + ${longitude}`;
   


    reponseContainer.appendChild(rep);

    const screen = document.querySelector(".screen");

    screen.appendChild(reponseContainer);
    

  }

  const onError = async function (error) {
    console.log("erreur lors du chargement de la position");
  }

  // on vérifie si la fonction navigator.geolocation est présente
  if ( navigator.geolocation){
    // appel de la fonction
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    console.log("on a reçu la position"); 
  } else {
    console.log("on a pas reçu la position");
  }
  
    
  }

/**
 * pour me docu sur le plugin de géolocalisation
 * https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/index.html
 * 
 */

