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


  navigator.geolocation.getCurrentPosition( onSuccess, onError );

  
const onSuccess = async function (position) {

  const latitude = position.coords.latitude;

  const longitude = position.coords.longitude;

}



const onError = async function (error){
  console.log("erreur lors du chargement de la position");
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
  }
  console.log("message envoyé")
});

}
/**
 * pour me docu sur le plugin de géolocalisation
 * https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/index.html
 * 
 */

