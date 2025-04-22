
export function convertCoordination(){

    const toRad = (degree) => degree * Math.PI / 180;

    const toDeg = (rad) => rad * 180 / Math.PI;

}

export function parseSunposition(azi, alt){

    const azimuth = Number.parseFloat(azi);
    const altitude = Number.parseFloat(alt);

    if (Number.isNaN(azimuth) || Number.isNaN(altitude) ){

        throw RangeError("Invalid input");
    }


    return {

        azimuth, altitude

    };


}