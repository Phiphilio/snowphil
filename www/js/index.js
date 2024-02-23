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

// pour afficher le temps à côté des messages

function time() {
  /**
   * utilisation de la class data(), source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
   * la methode getHours(), source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
   * les autres methodes s'utilisent de la même manière.
   * .padStart(2, '0') : C'est une méthode de chaîne de caractères qui ajoute des caractères au début de la chaîne jusqu'à ce qu'elle atteigne la longueur spécifiée.
   *  Dans ce cas, elle ajoute des zéros au début de la chaîne jusqu'à ce qu'elle ait une longueur de 2 caractères.
   *  Cela garantit que l'heure est toujours représentée par deux chiffres, même si elle est inférieure à 10. Par exemple, si l'heure actuelle est 9 heures, cela renverra '09'. 
   * Si l'heure est supérieure à 9, il ne fait rien.
   */
  const date = new Date();
  const hour = date.getHours().toString().padStart(1, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  return `${hour}:${minutes}:${second}`;
}

async function displayTime() {
  // Récupérer les div qui vont recevoir les durées
  const sms = document.querySelectorAll(".sms");
  const rep = document.querySelectorAll(".rep");

  // Boucle à travers les éléments .sms
  for (const smsElement of sms) {
    // Créer la section qui va recevoir l'heure
    const displayMessage = document.createElement("span");
    displayMessage.classList.add("zoneHeure");

    // Vérifier si l'élément existe
    if (smsElement) {
      // Afficher l'heure actuelle
      displayMessage.innerText = time();
      console.log(time());

      // Ajouter l'heure à l'élément .sms
      smsElement.appendChild(displayMessage);
    }
  }

  // Boucle à travers les éléments .rep
  for (const repElement of rep) {
    // Créer une nouvelle section pour chaque élément .rep
    const displayMessage = document.createElement("span");
    displayMessage.classList.add("zoneHeure");

    // Vérifier si l'élément existe
    if (repElement) {
      // Afficher l'heure actuelle
      displayMessage.innerText = time();
      console.log(time());

      // Ajouter l'heure à l'élément .rep
      repElement.appendChild(displayMessage);
    }
  }
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
    sms.innerText = "V1";

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
    setTimeout(reponse, 10000);

    // pour que l'heure s'affiche dans le message que j'envoie
    displayTime();
  }

});


async function reponse() {



  const onSuccess = async function (position) {

    const latitude = position.coords.latitude;

    const longitude = position.coords.longitude;

    const reponseContainer = document.createElement("div");
    reponseContainer.classList.add("reponse-container");

    const rep = document.createElement("div");
    rep.classList.add("rep");

    rep.innerText = `Votre position est : ${latitude} + ${longitude}`;



    reponseContainer.appendChild(rep);

    const screen = document.querySelector(".screen");

    screen.appendChild(reponseContainer);

    /**
     * grâce ou à cause de la fonction setTimeout, j'ai appelé 2 fois displayTime()
     * comme ça, je suis sûr que l'heure s'affiche ici*/
    displayTime();

  }

  const onError = async function (error) {
    console.log("erreur lors du chargement de la position");
  }

  // on vérifie si la fonction navigator.geolocation est présente
  if (navigator.geolocation) {
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

