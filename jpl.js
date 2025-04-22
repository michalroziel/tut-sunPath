
export function convertCoordination(){

    const toRad = (degree) => degree * Math.PI / 180;

    const toDeg = (rad) => rad * 180 / Math.PI;

    console.log("Hello World");
}

export function parseSunposition( {azi, alt } ){

    const azimuth = Number(azi);
    const altitude = Number(alt);

    if (Number.isNaN(azimuth) || Number.isNaN(altitude) ){

        throw RangeError("Invalid input");
    }


    return {

        // literale objekt zurückgeben
        altitude, azimuth

    };


}