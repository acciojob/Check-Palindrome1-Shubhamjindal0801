// complete the given function

function palindrome(str){
	var len  = str.length;
	for(var i=0;i<len/2;i++){
		if(str[i] !=str[len-i-1])
			return false;
	}
	return true;
}
module.exports = palindrome("Racecar")
