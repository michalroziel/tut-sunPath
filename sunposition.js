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



function testParseSunposition(){

    const data = [
        {azi: "-90"  , alt: "45" },
        {azi: "0" , alt: "0.0"},
        {azi: "5,78", alt: "45-6"}
    ];

    for (const p of data){

        try{
            const c = parseSunposition(p);
            console.log(c);

        } catch (e) {
            console.error(e.message);
        }
    }


}
