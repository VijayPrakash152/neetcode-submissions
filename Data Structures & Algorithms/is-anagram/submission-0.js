class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(!s || !t) return false;
        if(s.length != t.length){
            return false;
        }

        const freqMapS = new Map();
        const freqMapT = new Map();

        const strLen = s.length;

        for(let i=0; i< strLen; i++){
            let charS = s.charAt(i);
            let charT = t.charAt(i);

            if(freqMapS.has(charS)){
                let currFreq = freqMapS.get(charS);
                freqMapS.set(charS, currFreq + 1);
            }else{
                freqMapS.set(charS,1);
            }

            if(freqMapT.has(charT)){
                let currFreq = freqMapT.get(charT);
                freqMapT.set(charT, currFreq + 1);
            }else{
                freqMapT.set(charT,1);
            }
        }
        console.log(freqMapS);
        console.log(freqMapT);

        for(let i=0; i< strLen; i++){
            let charS = s.charAt(i);
            

            const freqSMap = freqMapS.get(charS);
            const freqTMap = freqMapT.get(charS);

            if(freqSMap !== freqTMap){
                return false;
            }
        }

        return true;
    }
}
