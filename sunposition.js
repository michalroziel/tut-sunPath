import {convertCoordination, parseSunposition} from "./jpl.js";


document.addEventListener("DOMContentLoaded", () => {

    convertCoordination();


    const okBtn = document.getElementById("ok");

    okBtn.addEventListener("click", () => {

        const azimuth = document.getElementById("azimuth").value;
        const alititude = document.getElementById("altitude").value;

        const coordinate = parseSunposition( { azi :azimuth, alt : alititude  });


        console.log({azimuth, alititude});




        console.log(coordinate);

    });


    //convertCoordination();

});

