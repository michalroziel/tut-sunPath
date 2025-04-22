

export function convertCoordination(  { azimuth, altitude }  ){


    const toRad = (degree) => degree * Math.PI / 180;
    const toDeg = (rad) => rad * 180 / Math.PI;

    const convertedAzi = toRad(90-azimuth);
    const convertedAlt = toRad(altitude);

    const s = Math.cos(convertedAlt)
    const y =  s *  Math.sin(convertedAzi);

    const x =  s *  Math.cos(convertedAzi);


    return {   x  ,   y   }

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