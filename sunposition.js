import {convertCoordination, parseSunposition} from "./jpl.js";


document.addEventListener("DOMContentLoaded", () => {

    const okBtn = document.getElementById("ok");

    okBtn.addEventListener("click", () => {

        const azimuth = document.getElementById("azimuth").value;
        const altitude = document.getElementById("altitude").value;
        const coordinate = parseSunposition( { azi :azimuth, alt : altitude  });
      //  console.log({azimuth, alititude});

        const { x, y } = convertCoordination( coordinate);

        const el = document.getElementById("result");
        el.textContent = `${x}, ${y}`;

        //console.log(coordinate);

    });


   // testParseSunposition();

    testConvertCoordination();


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
            console.error(e);
        }
    }




}

function testConvertCoordination(){


    const data = [
        {azi: 45  , alt: 60 },
        {azi: 0 , alt: -5 },
        {azi: 9900, alt: 45-6 }
    ];

    /*

*/
    for (const q of data){

        try {

            const c = convertCoordination(q);


            console.log(c);


        } catch (e) {
            console.error(e);
        }


    }




}

