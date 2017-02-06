function random300() {
    return Math.ceil( Math.random() * 300 )
}
function gougu( a, b ) {
    return Math.sqrt( Math.pow( a, 2 ) + Math.pow( b, 2 ) )
}
module.exports.R = random300;
exports.M = gougu;