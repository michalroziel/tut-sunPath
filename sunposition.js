import {convertCoordination} from "./jpl.js";


document.addEventListener("DOMContentLoaded", () => {

    const azimuthInput = document.getElementById("azimuth").value;
    console.log(azimuthInput);



    convertCoordination();

});

