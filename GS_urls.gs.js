/* Encode urls */
function encodeURIC( r ) {
	if( r.constructor == Array ) {
		var out = r.slice();
		for( i=0; i< r.length; i++){
			for( j=0; j< r[i].length; j++){
			out[i][j] = encodeURIComponent(r[i][j].toString() ) ;
			}
		}
		return out ;
	}
	else{ 
		return encodeURIComponent(r.toString() )
	} 
}