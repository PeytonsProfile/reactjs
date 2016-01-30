Sandbox


var aZ = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/130527/bg1.png','https://s3-us-west-2.amazonaws.com/s.cdpn.io/130527/bg2.png'],
    selectAZ = aZ[Math.floor(Math.random() * selectAZ.length)];

document. = 'url(' + selectAZ + ')';


/* paritally working, might need to redo var and arrays, having weird issues,
 I think instead of using 26 char myArrays they all need to be a single array, 
 however this will make adding additions a pain,
  because adding a single name to the array close to its order will push all of the others up,
  not sure if those arrays are needed to be directly identified,
   with randomizer each array item is grabbed by the key and opens the correlated url,
 conclusion is that this will be ok. 

 Nesting arrays, and grabbing the ID at random to open the url is the next attempt, I think this is a code smell.
 Will need to do more testing,
  starting over with nested arrays and then building out the function to be an if else if else statement until the key value is paired, 
  once the key hits the right value the page will open, 
  each layer of the nested array will have to sync with the if else if else statement,
   so that when the key is hit at random a nested function is issued to open the page,
    eventually pages will be static, 
    that will not matter for user time consumption until a large reoccuring population is reached,
     and the Sacred tomes page is added in with SQL anonymous user login, however this will be frustrating to find once found,
      so on the inside there will be a way for them to walk right in the backdoor of the board, 
      however word of mouth could allow too many people to jump in, so it would need to be changed regularly,
       but then people would have to find the page again, so maybe a hidden key combination from say the home page,
        or the sacred tomes introduction page will find the new corridor, and then the key function is inside the site,
         but then the same issue arises of having to change when other people share it online, so really a key to get to the entrance page,
          and each anonymous user is forever given access with a unique token,
           but then they would have to make an account, to stop them from just sharing these access tokens, 
           or the password for the sacred tomes page is always an AA - ZZ pw, that they can manually guess,
            but then anyone has that ability, so set an attempt limit, add the passcodes in a routined cycle,
             so if they have the spreadsheet they'll know which code it is, but then what stops them from sharing that aswell...
              Need to make sure anyone who gets in is 100% verified and authentic, respectable and loyal,
               so no one leaks a way to get in, original way for this part was to only give out the code in person,
                but then that limits user outreach, 
                 So maybe creating a public spreadsheet used to decrypt the password based on its cycle, needs to take time, so if they find the code hidden in essentially a front end encrpytion the code can reset in 24 hours, maybe a week to start with, if they stay loyal then permission access rights through the backdoor url can be passed down, this way tabs can be taken, because the code will not be posted online daily, so.. they will need to decrypt it quickly, and if they keep coming in and keep a daily login rate or something that they are aware of then having to find it online every time won't work.

 */
function aZ(aA, bB, cC, dD, eE, fF, gG, hH, iI, jJ, kK, lL, mM, nN, oO, pP, qQ, rR, sS, tT, uU, vV, wW, xX, yY, zZ) {
    document.getElementById("demo");
    var aToZ = aA + bB + cC + dD + eE + fF + gG + hH + iI + jJ + kK + lL + mM + nN + oO + pP + qQ + rR + sS + tT + uU + vV + wW + xX + yY + zZ;

    var myArrayAA = [1, 'Alluring Aura', 'Alpha Aligned', 2];
    aA = myArrayAA;
    var myArrayBB = [1, 'Bright Beacon', 'Bask in Brim', 2];
    bB = myArrayBB;
    var myArrayCC = [1, 'Cosmic Concoction', 'Conjunctioned Cataclysm', 2];
    cC = myArrayCC;
    var myArrayDD = [1, 'Dim Dawn', 'Dark Daze', 2, 'Diluted Demension', 3];
    dD = myArrayDD;
    var myArrayEE = [1, 'Elemental Enchantment', 'Enchanthem', 2];
    eE = myArrayEE;
    var myArrayFF = [1, 'Frequent Form', 'Faded Finish', 2];
    fF = myArrayFF;
    var myArrayGG = [1, 'Golden Grove', '', 2];
    gG = myArrayGG;
    var myArrayHH = [1, 'Hollow Hum', 'Hallowing Harrow', 2];
    hH = myArrayHH;
    var myArrayII = [1, 'Incognitive Inception', 'Infinite Insight', 2];
    iI = myArrayII;
    var myArrayJJ = [1, '', '', 2];
    jJ = myArrayJJ;
    var myArrayKK = [1, 'Keen_Kindness', '', 2];
    kK = myArrayKK;
    var myArrayLL = [1, 'Lucid Levitation', '', 2];
    lL = myArrayLL;
    var myArrayMM = [1, 'Mellow Mantra', '', 2];
    mM = myArrayMM;
    var myArrayNN = [1, '', '', 2];
    nN = myArrayNN;
    var myArrayOO = [1, 'Optimal Opacity', 'Octave Output', 2];
    oO = myArrayOO;
    var myArrayPP = [1, 'Polar Purge', '', 2];
    pP = myArrayPP;
    var myArrayQQ = [1, 'Liquid Quartz', 'Quantum Quake', 2];
    qQ = myArrayQQ;
    var myArrayRR = [1, 'Rightful Reign', '', 2];
    rR = myArrayRR;
    var myArraySS = [1, 'Selective Salvations', '', 2];
    sS = myArraySS;
    var myArrayTT = [1, 'Toxic to the Touch', '', 2];
    tT = myArrayTT;
    var myArrayUU = [1, '', '', 2];
    uU = myArrayUU;
    var myArrayVV = [1, 'Vivid Visions', '', 2];
    vV = myArrayVV;
    var myArrayWW = [1, '', '', 2];
    wW = myArrayWW;
    var myArrayXX = [1, 'External Extant', '', 2];
    xX = myArrayXX;
    var myArrayYY = [1, 'Yen Yes', 'Yuletide Yogi', 2];
    yY = myArrayYY;
    var myArrayZZ = [1, 'Zen Zeal', '', 2];
    zZ = myArrayZZ;
  
    console.log(0);
}






/* issues with jslint ES2015 and statement / expression errors

function aZ(aA, bB, cC, dD, eE, fF, gG, hH, iI, jJ, kK, lL, mM, nN, oO, pP, qQ, rR, sS, tT, uU, vV, wW, xX, yY, zZ) {
    "use strict";
    document.getElementById("demo");

    var aToZ = aA + bB + cC + dD + eE + fF + gG + hH + iI + jJ + kK + lL + mM + nN + oO + pP + qQ + rR + sS + tT + uU + vV + wW + xX + yY + zZ;

    var myArrayAA = [1, 'Alluring Aura', 'Alpha Aligned', 2];
    aA = myArrayAA;
    var myArrayBB = [1, 'Bright Beacon', 'Bask in Brim', 2];
    bB = myArrayBB;
    var myArrayCC = [1, 'Cosmic Concoction', 'Conjunctioned Cataclysm', 2];
    cC = myArrayCC;
    var myArrayDD = [1, 'Dim Dawn', 'Dark Daze', 2, 'Diluted Demension', 3];
    dD = myArrayDD;
    var myArrayEE = [1, 'Elemental Enchantment', 'Enchanthem', 2];
    eE = myArrayEE;
    var myArrayFF = [1, 'Frequent Form', 'Faded Finish', 2];
    fF = myArrayFF;
    var myArrayGG = [1, 'Golden Grove', '', 2];
    gG = myArrayGG;
    var myArrayHH = [1, 'Hollow Hum', 'Hallowing Harrow', 2];
    hH = myArrayHH;
    var myArrayII = [1, 'Incognitive Inception', 'Infinite Insight', 2];
    iI = myArrayII;
    var myArrayJJ = [1, '', '', 2];
    jJ = myArrayJJ;
    var myArrayKK = [1, 'Keen_Kindness', '', 2];
    kK = myArrayKK;
    var myArrayLL = [1, 'Lucid Levitation', '', 2];
    lL = myArrayLL;
    var myArrayMM = [1, 'Mellow Mantra', '', 2];
    mM = myArrayMM;
    var myArrayNN = [1, '', '', 2];
    nN = myArrayNN;
    var myArrayOO = [1, 'Optimal Opacity', 'Octave Output', 2];
    oO = myArrayOO;
    var myArrayPP = [1, 'Polar Purge', '', 2];
    pP = myArrayPP;
    var myArrayQQ = [1, 'Liquid Quartz', 'Quantum Quake', 2];
    qQ = myArrayQQ;
    var myArrayRR = [1, 'Rightful Reign', '', 2];
    rR = myArrayRR;
    var myArraySS = [1, 'Selective Salvations', '', 2];
    sS = myArraySS;
    var myArrayTT = [1, 'Toxic to the Touch', '', 2];
    tT = myArrayTT;
    var myArrayUU = [1, '', '', 2];
    uU = myArrayUU;
    var myArrayVV = [1, 'Vivid Visions', '', 2];
    vV = myArrayVV;
    var myArrayWW = [1, '', '', 2];
    wW = myArrayWW;
    var myArrayXX = [1, 'External Extant', '', 2];
    xX = myArrayXX;
    var myArrayYY = [1, 'Yen Yes', 'Yuletide Yogi', 2];
    yY = myArrayYY;
    var myArrayZZ = [1, 'Zen Zeal', '', 2];
    zZ = myArrayZZ;
    var msg;

    if (aToZ) { document.getElementById("demo").innerHTML = "Hello Dolly."; {
        msg = 'hey';
        msg += 'next line';
    }} else{
        aToZ{ document.getElementById("demo").innerHTML = "Hello Dolly."; {
        msg = 'imfly';
        msg += 'yourfly';
    }
}

var el = document.getElementById('demo');
el.textContent = msg;  */


