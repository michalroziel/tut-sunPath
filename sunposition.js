import {convertCoordination} from "./jpl.js";


document.addEventListener("DOMContentLoaded", () => {




    const okBtn = document.getElementById("ok");

    okBtn.addEventListener("click", () => {

        const azimuth = document.getElementById("azimuth").value;
        const alititude = document.getElementById("altitude").value;
        console.log({azimuth, alititude});

        const v  = {azimuth, alititude};

        const u = {
            "azimuth" : azimuth,
            "altitude": alititude,
        }


    });


    //convertCoordination();

});

