import {convertCoordination, parseSunposition} from "./jpl.js";


document.addEventListener("DOMContentLoaded", () => {




    const okBtn = document.getElementById("ok");

    okBtn.addEventListener("click", () => {

        const azimuth = document.getElementById("azimuth").value;
        const alititude = document.getElementById("altitude").value;
        console.log({azimuth, alititude});


        const coordinate = parseSunposition(azimuth, alititude);
        console.log(coordinate);

    });


    //convertCoordination();

});

