function writeHaiku() {
  //two dimensional arrays to store word objects sorted by number of syllables
  let oneSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let twoSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let threeSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let fourSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let fiveSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping,nounLinkingSecondSingular, nounLinkingSecondPlural


  //populate with words
  populateDictionary(oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable);
  //getAllWords();
  //grab lines
  // let onesybwords = "";
  // for (i=0;i < oneSyllable.length; i++) {
  //   for (j=0; j<oneSyllable[i].length; j++) {
  //     onesybwords += oneSyllable[i][j].writtenWord + "     ";
  //   }
  // }
  let firstLine = getLine(5, oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable);
  let secondLine = getLine(7,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable);
  let thirdLine = getLine(5,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable);
  // let haiku = "<br><br>" + firstLine + "<br>" + secondLine + "<br>" + thirdLine + "<br><br>"
  //piece together poem
  //document.getElementById("poem").innerHTML = haiku
  document.getElementById("poem").innerHTML = firstLine + "<br>" + secondLine + "<br>" + thirdLine;
}


    //populate
    /* Template key words
            aOrAn
            verbSingular
            verbPlural
            nounSingular
            nounSingularAOrAn
            nounPlural
            adjective
            adjectiveAOrAn
            adverb
            wordOfGrouping
            wordOfGroupingAOrAn
            any
            NEW = nounLinkingSecondSingular
            NEW = nounLinkingSecondPlural

        // modern, retro, dark, bohemian, all
         comfy, industrial, intimate, bohemian, all
        */
  function populateDictionary(oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
    //add a bunch of words to the dictionary
          //SINGULAR VERBS
          //1 syllables
          let word ={writtenWord:"dunks",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word ={writtenWord:"delves",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word ={writtenWord:"chunks",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"glides",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"slips",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"welds",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"clasps",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"grasps",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"melts",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"twists",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"dips",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"creeps",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"streams",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"pours",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"pouts",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"ebbs",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"sips",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"streams",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"slinks",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"wanes",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"prays",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"purrs",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"brews",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"foams",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"blooms",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"quells",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"coos",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"churns",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"dupes",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"dwells",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"tilts",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"tips",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"basks",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          //2 syllables
          word = {writtenWord:"dabbles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"squishes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"merges",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"fetches",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"grazes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"stumbles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"obsolves",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"dazzles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"drizzles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"fulfills",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"transcends",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"brushes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"ogles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"tangles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"tussels",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"plasters",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"washes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"purges",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"courses",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"toggles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"babbles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"huddles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"revels",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"indulges",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"persists",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"endures",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"curates",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"concocts",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"envies",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"alludes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"provokes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"mingles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"coaxes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"puckers",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"laces",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"blossoms",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"beholds",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"debugs",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"debunks",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"cajoles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"trembles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"muddles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"wobbles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"crumbles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"slumbers",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"lingers",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          //3 syllables
          word = {writtenWord:"magnifies",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"envelopes",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"encases",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"tessalates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"bombinates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"divulges",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"satiates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"bemuses",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          //4 syllables
          word = {writtenWord:"evaporates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"illuminates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"enumerates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"electrifies",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"rejuvenates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          //5 syllables
          word = {writtenWord:"ameliorates",type:"verbSingular",syllables:5,style:"all"};
          fiveSyllable[0].push(word);
          word = {writtenWord:"disorientates",type:"verbSingular",syllables:5,style:"all"};
          fiveSyllable[0].push(word);
          word = {writtenWord:"caramelizes",type:"verbSingular",syllables:5,style:"all"};
          fiveSyllable[0].push(word);

          //PLURAL VERBS
          //1 syllables
          word = {writtenWord:"dunk",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"delve",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"chunk",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"glide",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"slip",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"glaze",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"fetch",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"merge",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"weld",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"squish",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"clasp",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"grasp",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"graze",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"melt",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"brush",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"creep",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"twist",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"dip",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"pour",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"pout",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"ebb",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"sip",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"wash",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"purge",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"course",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"stream",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"slink",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"wane",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"pray",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"purr",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"brew",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"coax",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"lace",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"foam",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"bloom",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"quell",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"coo",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"churn",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"dupe",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"dwell",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"tilt",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"tip",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"bask",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          //2 syllables
          word = {writtenWord:"dabble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"stumble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"obsolve",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"dazzle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"drizzle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"fulfill",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"transcend",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"ogle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"tangle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"tussel",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"plaster",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"encase",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"toggle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"babble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"huddle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"revel",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"indulge",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"persist",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"endure",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"curate",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"concoct",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"envy",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"allude",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"provoke",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"mingle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"pucker",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"blossom",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"behold",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"debug",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"debunk",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"cajole",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"divulge",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"tremble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"muddle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"wobble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"crumble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"bemuse",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"linger",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"slumber",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          //3 syllables
          word = {writtenWord:"magnify",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"envelope",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"tessalate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"bombinate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"satiate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          //4 syllables
          word = {writtenWord:"evaporate",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"illuminate",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"inconvenience",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"alienate",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"overindulge",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"enumerate",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"electrify",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"rejuvenate",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"caramelize",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          //5 syllables
          word = {writtenWord:"americanize",type:"verbPlural",syllables:5,style:"all"};
          fiveSyllable[1].push(word);
          word = {writtenWord:"derequisition",type:"verbPlural",syllables:5,style:"all"};
          fiveSyllable[1].push(word);
          word = {writtenWord:"familiarize",type:"verbPlural",syllables:5,style:"all"};
          fiveSyllable[1].push(word);
          word = {writtenWord:"underestimate",type:"verbPlural",syllables:5,style:"all"};
          fiveSyllable[1].push(word);
          word = {writtenWord:"ameliorate",type:"verbPlural",syllables:5,style:"all"};
          fiveSyllable[1].push(word);



          //ADVERBS
          //1 syllables
          word = {writtenWord:"high",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          word = {writtenWord:"fast",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          //2 syllables
          word = {writtenWord:"fully",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"gently",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"lightly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"smoothly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"suavely",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"sweetly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"sometimes",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"often",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"seldom",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"never",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"nunca",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"casi",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"coolly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"bodly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          //3 syllables
          word = {writtenWord:"gracefully",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"jovially",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"kookily",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"zestily",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"siempre",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"gingerly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"bashfully",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"groggily",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"coaxingly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"cleverly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"fatally",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"fervently",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"foolishly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          //4 syllables
          word = {writtenWord:"jubilantly",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"seductively",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"lentamente",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"brevemente",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word =  {writtenWord:"a menudo",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"todavia",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"elegantly",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          //5 syllables
          word = {writtenWord:"completamente",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"rapidamente",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"alegremente",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"todos los dias",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);



          //SINGULAR NOUNS
          //1 syllables
          word = {writtenWord:"globe",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"chunk",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"oil",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"glaze",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"gloss",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"wick",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"web",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"root",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"stem",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"branch",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"plume",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"cloak",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"cove",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"brew",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"muse",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"flame",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"queen",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"tang",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"quilt",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"mud",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"cake",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"blush",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"pyre",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"pie",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"charm",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"tea",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"dame",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"throne",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"purr",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"sylph",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"fern",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"mu",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"slope",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"jam",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"loop",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"lull",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"zeal",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"dough",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"freud",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"peach",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"roast",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"mood",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"hem",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"luz",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"flor",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"mar",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"hip",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"scoop",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"dose",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"mauve",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"plum",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"silk",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"milk",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"spice",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"om",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"s'more",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"muse",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"grove",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"loom",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"stone",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          //2 syllables
          word = {writtenWord:"jungle",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"goblet",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"silver",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"easel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"canvas",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"decour",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cocoa",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"petal",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lapel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cowlick",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"alter",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"dollop",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"barrage",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"marble",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tangent",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tassel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lagoon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"poison",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"forest",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"kettle",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"empress",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"basil",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lava",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"abyss",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"dimple",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"freckle",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"temptress",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"kingdom",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"funnel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"milieu",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"crony",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"landscape",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mayhem",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"priestess",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"poodle",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"dojo",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"arcade",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bubble",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"noodle",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"waffle",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tunic",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"alcove",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cherub",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"musing",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"gnocci",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"rhubarb",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"alpha",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"beta",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"nectar",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"genome",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"fondue",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"scuba",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"caesar",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"hula",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"puddle",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cider",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mischief",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pucker",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tyrant",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"butter",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"fissure",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"fusion",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"teaspoon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"damsel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"fuego",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"july",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"temple",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"gospel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cosmo",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"septa",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lady",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"zephyr",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"geisha",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mai tai",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"victress",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"doyenne",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"duenna",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"coquette",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"croquet",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"yenta",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"epoch",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bedlam",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"gambit",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"orchard",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"prowess",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cocoon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"laurel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"theorem",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lemma",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"quotient",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"toddy",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"champagne",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"palate",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"purist",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"big o",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"deadlock",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"modem",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"qwerty",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"august",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"aura",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"folly",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"hubris",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mu mu",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bubbly",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cocktail",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lover",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"liqueor",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"libra",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"yuzu",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"brioche",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"omelet",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"coven",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tipple",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"nipple",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bourbon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"curfew",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"yoga",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"yogi",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tavern",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"goji",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pillow",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bed post",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"hathor",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cream cheese",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"aset",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sencha",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"matcha",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"clover",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"dark roast",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mocha",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"peplum",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"loafer",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sangre",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"beso",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"noche",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"reloj",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"waning",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"nepal",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lemon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bombshell",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"fauna",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"flora",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sundae",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"soiree",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sweater",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"velvet",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lilac",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"linen",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"ginger",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"merlot",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"brunette",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"xylem",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cashmere",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"karma",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"july",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"leo",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"virgo",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pascal",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"vodka",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"chiffon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"honey",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"miel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"iris",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"dumpling",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"shakti",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tapa",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"chakra",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"dalia",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"blue moon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pale ale",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tulip",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bonfire",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"turquoise",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"trollop",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"circe",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"hera",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"solstice",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"summer",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"autumn",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"voodoo",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"juju",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"midnight",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mango",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"neptune",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tonic",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pluto",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          //3 syllables
          word = {writtenWord:"petichor",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"succulent",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tentacle",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"fandango",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"sugar cane",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"vanilla",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"margarine",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"shortening",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chemical",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"osmosis",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"barista",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"dalliance",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chameleon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"gossamer",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"mosaic",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"high priestess",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chamomille",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"peppermint",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"rosemary",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"electron",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"universe",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"temptation",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"ritual",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"collusion",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"mannequin",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"masquerade",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"conundrum",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"mimosa",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"sangria",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"deity",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"concoction",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"armada",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"lechuga",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"falafel",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pantheon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"alchemy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"alchemist",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"vendetta",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"caprese",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"formula",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"omega",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"valentine",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"phonetic",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"dialogue",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"enigma",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"bemusement",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"adobe",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"marshmallow",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"flamingo",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"rosary",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"stiletto",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"silhouette",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"abacus",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"medicine",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pharmacy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"psychosis",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"honeydew",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"bungalow",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"gondola",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"flirtation",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tyranny",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"filament",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"symmetry",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tabata",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"gentleman",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"goodfellow",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"cardigan",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"sacrosanct",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"paragon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"purveyor",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"virago",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"mint julep",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"kahlua",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"mavourneen",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"godiva",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"demoiselle",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"bellibone",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"limerence",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"aurora",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"syzygy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"vellichor",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"eloquence",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"cromulent",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"spaghetti",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"periscope",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"lioness",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"calypso",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"opera",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"illiad",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"bonhomie",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"congruence",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"calculus",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"trapezoid",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"quartile",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tattersall",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"aquavit",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"paloma",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"aroma",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"semaphore",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"boolean",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"encryption",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"gigabyte",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"megabyte",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"mother board",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"parity",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"acumen",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"apathy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"charlatan",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"eulogy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"gallantry",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"heresy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"amethyst",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pagoda",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"lingerie",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"marmalade",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"ginger beer",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"libation",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"half and half",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tequila",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"biscotti",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"agave",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"fahrenheit",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"prosecco",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"peyote",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pillow talk",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"cantaloupe",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"amazon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"toalla",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"manzana",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"connoisseur",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"espresso",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"gelato",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"filigree",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"piruli",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"besito",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"corazon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"cielo",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"naranja",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"palabra",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"abrazo",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"azucar",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"helado",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"panqueque",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"carino",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tortuga",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"maraca",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"honeycomb",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"hibiscus",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"daffodil",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"macaroon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"coconut",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"butterscotch",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"gingerbread",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tangerine",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"marigold",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"lavender",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"nectarine",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"juniper",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"xylophone",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"charisma",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"capricorn",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"scorpio",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"femme fatale",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"vinyasa",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"asana",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"ananda",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"delilah",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"artemis",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"butterbeer",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"jezebel",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"sultana",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"athena",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"honeymoon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"nostalgia",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"nutella",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chocolate",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"equinox",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"horoscope",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"milky way",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chemistry",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          //4 syllables
          word = {writtenWord:"maple syrup",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"euphoria",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"panacea",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"portfolio",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"constellation",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"calligraphy",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"menagerie",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"laboratory",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"dichotomy",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"fidelity",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"rutabaga",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"ghirardelli",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"persephone",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"cerebellum",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"amygdala",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"aphrodite",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"bellagio",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"fellagio",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"cowabunga",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"barracuda",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"apocalypse",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"leinenkugel",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"interrobang",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"collegiette",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"belladonna",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"luminescence",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"incandescence",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"effervescence",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"venenoso",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"kama sutra",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"parabola",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"bernoulli",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"arpeggio",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"logarithm",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"polyhedron",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"tetrahedron",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"botanical",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"cryptography",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"batch processing",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"peripheral",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"virtuoso",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"obsidian",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"patron xo",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"xoxo",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"zanahoria",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"affogato",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"macchiato",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"balaclava",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"mariposa",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"aguacate",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"izquierda",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"mantequilla",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"esperanza",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"palomita",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"banana split",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"cleopatra",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"eucalyptus",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"savasana",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"calendar girl",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"chaturanga",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"magnolia",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"delphinium",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"affinity",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          //5 syllables
          word = {writtenWord:"abracadabra",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"electricity",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"ideology",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"individual",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"incredulity",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"extravaganza",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"trigonometry",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"pandemonium",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"perpetuity",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"apothecary",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"infatuation",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"equilibrium",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"animosity",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"sagittarius",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"equivocation",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"rejuvenation",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"amortization",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"aphrodisiac",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"feminization",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"hallucinogen",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"cosmopolitan",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"academia",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"illumination",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"cornucopia",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"michelangelo",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"archeologist",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"precipitation",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"archipelago",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"polynomial",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"parallelogram",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"triangulation",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"americano",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"sagittarius",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"neopolitan",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);



          //PLURAL NOUNS
          //1 syllables
          word = {writtenWord:"lips",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"globes",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"chunks",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"oils",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"wicks",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"webs",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"roots",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"stems",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"plumes",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"cloaks",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"coves",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"brews",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"flames",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"queens",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"quilts",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"cakes",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"pyres",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"pies",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"charms",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"teas",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"dames",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"thrones",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"purrs",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"sylphes",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"ferns",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"slopes",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"jams",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"loops",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"lulls",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"doughs",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"moods",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"hems",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"hips",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"scoops",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"plums",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"silks",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"milks",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"s'mores",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"groves",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"looms",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"stones",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          //2 syllables
          word = {writtenWord:"curves",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"muses",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"spices",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"doses",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"branches",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"glosses",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"glazes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"blushes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"peaches",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"flores",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"jungles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"goblets",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"silvers",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"easels",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cocoas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"petals",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"lapels",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cowlicks",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"alters",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"dollops",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"marbles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tangents",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tassels",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"lagoons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"poisons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"forests",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"kettles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"dimples",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"freckles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"kingdoms",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"funnels",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"milieus",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"landscapes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"poodles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"dojos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"arcades",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bubbles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"noodles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"waffles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tunics",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"alcoves",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cherubs",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"musings",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"alphas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"betas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"nectars",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"genomes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"fondues",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"puddles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"ciders",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tyrants",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"butters",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"fissures",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"fusions",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"teaspoons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"damsels",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"fuegos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"julys",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"temples",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"gospels",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cosmos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"septas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"ladies",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"zephyrs",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"geishas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"mai tais",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"doyennes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"duennas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"coquettes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"yentas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"epochs",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bedlams",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"gambits",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"orchards",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cocoons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"laurels",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"theorems",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"lemmas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"quotients",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"toddies",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"champagnes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"palates",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"purists",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"modems",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"augusts",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"auras",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"follies",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"mu mus",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bubblies",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cocktails",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"lovers",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"liqueors",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"libras",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"yuzus",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"omelets",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"covens",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tipples",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"nipples",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bourbons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"curfews",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"yogas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"yogis",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"taverns",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"gojis",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"pillows",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bed posts",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"hathors",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"asets",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"clovers",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"dark roasts",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"mochas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"peplums",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"loafers",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"besos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"wanings",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"lemons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bombshells",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"faunas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"sundaes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"soirees",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"sweaters",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"velvets",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"lilacs",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"linens",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"gingers",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"merlots",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"brunettes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cashmeres",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"julys",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"leos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"virgos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"pascals",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"vodkas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"chiffons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"honeys",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"dumplings",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tapas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"chakras",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"dalias",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"blue moons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"pale ales",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tulips",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bonfires",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"trollops",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"circes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"heras",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"summers",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"autumns",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"voodoos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"jujus",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"midnights",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"mangos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tonics",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"plutos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          //3 syllables
          word = {writtenWord:"cojones",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"abysses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"empresses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"temptresses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"priestesses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"victresses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"solstices",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"barrages",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"canvases",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"succulents",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"tentacles",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"fandangos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"vanillas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"chemicals",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"baristas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"chameleons",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mosaics",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"chamomilles",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"peppermints",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"electrons",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"temptations",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"rituals",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"collusions",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mannequins",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"masquerades",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"conundrums",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mimosas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"sangrias",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"deities",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"concoctions",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"armadas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pantheons",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"alchemies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"alchemists",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"vendettas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"formulas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"omegas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"valentines",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"phonetics",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"dialogues",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"enigmas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"bemusements",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"marshmallows",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"flamingos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"rosaries",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"stilettos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"silhouettes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"medicines",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pharmacies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"honeydews",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"bungalows",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"gondolas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"flirtations",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"tyrannies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"filaments",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"tabata",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"gentlemen",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"goodfellow",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"cardigans",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"paragons",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"purveyors",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"viragos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mint juleps",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"kahluas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mavourneens",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"godivas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"bellibones",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"auroras",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"periscopes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"calypsos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"operas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"trapezoids",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"quartiles",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"tattersalls",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"aquavits",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"palomas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"aromas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"semaphores",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"booleans",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"encryptions",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"gigabytes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"megabytes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mother boards",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"parities",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"charlatans",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"eulogies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"gallantries",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"heresies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"amethysts",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pagodas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"marmalades",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"ginger beer",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"libations",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"tequilas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"proseccos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pillow talk",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"cantaloupes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"amazons",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"connoisseurs",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"espressos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"gelatos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"filigrees",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"honeycombs",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"daffodils",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"macaroons",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"coconuts",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"gingerbreads",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"tangerines",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"marigolds",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"lavenders",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"nectarines",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"junipers",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"xylophones",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"charismas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"capricorns",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"scorpios",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"femme fatales",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"vinyasas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"asanas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"delilahs",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"butterbeers",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"jezebels",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"sultanas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"athenas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"honeymoons",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"nostalgias",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"nutellas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"chocolates",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"horoscopes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"milky ways",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"chemistries",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          //4 syllables
          word = {writtenWord:"butterscotches",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"congruences",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"lionesses",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"limerences",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"universes",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"high priestesses",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"dalliances",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"maple syrups",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"panaceas",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"portfolios",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"constellations",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"calligraphies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"laboratories",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"dichotomies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"fidelities",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"rutabaga",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"ghirardellis",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"persephones",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"cerebellums",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"amygdalas",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"aphrodites",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"bellagios",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"cowabungas",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"barracudas",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"leinenkugels",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"interrobangs",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"belladonnas",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"kama sutras",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"parabolas",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"bernoullis",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"arpeggios",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"logarithms",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"polyhedrons",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"tetrahedrons",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"botanicals",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"cryptographies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"peripherals",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"virtuosos",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"xoxos",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"banana splits",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"cleopatras",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"calendar girls",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"magnolias",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"affinities",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          //5 syllables
          word = {writtenWord:"abracadabras",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"ideologies",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"individuals",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"extravaganzas",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"apothecaries",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"infatuations",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"equilibriums",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"animosities",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"equivocations",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"rejuvenations",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"amortizations",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"aphrodisiacs",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"feminizations",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"hallucinogens",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"cosmopolitans",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"illuminations",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"cornucopias",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"michelangelos",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"archeologists",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"polynomials",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"parallelograms",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"triangulation",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"americano",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"sagittarius",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);





          //ADJECTIVES
          //1 syllables
          word = {writtenWord:"dazed",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"aged",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"plush",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"poised",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"silk",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"silky",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"cloaked",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"spooled",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"rogue",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"lush",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"laced",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"oak",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"bold",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"plump",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"rum",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"mauve",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"pearl",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"clay",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"wine",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"blush",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"plum",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"stone",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"sage",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"ink",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"jade",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"bronze",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"wild",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"rose",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          //2 syllables
          word = {writtenWord:"chiseled",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"peachy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"frothy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"vivid",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"gooey",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"cashmere",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"molten",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"citrus",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"astral",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"cosmic",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"nightgowned",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"healing",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"satin",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"wholesome",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"supple",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"toasted",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"potent",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"groggy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"marble",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"butter",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"lucid",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"maple",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"july",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"velvet",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"jejune",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"jacose",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"mellow",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"frugal",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"gallant",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"morose",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"bitter",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"bubbly",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"fizzy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"muddled",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"cordial",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"brioche",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"cuban",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"bourbon",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"clever",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"dulce",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"rica",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"tipsy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"velvet",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"vodka",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"lilac",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"chiffon",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"linen",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"egg shell",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"butter",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"mustard",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"honey",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"amber",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"carrot",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"ginger",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"merlot",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"garnet",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"crimson",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"ruby",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"scarlet",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"berry",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"fuscia",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"taffy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"denim",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"sapphire",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"chartreuse",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"olive",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"emerald",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"mocha",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"walnut",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"pecan",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"umber",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"brunette",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"pewter",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"onyx",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"blood orange",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"lagoon",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"maroon",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"cosmic",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"cornsilk",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"champagne",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"jungle",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"eggplant",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"opal",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"turquoise",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"blue moon",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"pale ale",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"voodoo",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"midnight",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"mango",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"neptune",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"tonic",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"gum drop",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          //3 syllables
          word = {writtenWord:"delightful",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"holistic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"magnetic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"bellbottomed",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"oversized",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"cyclical",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"translucent",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"elliptic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"camoflauged",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"volcanic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"atomic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"coquettish",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"curated",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"devilish",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"icelandic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"norwegian",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"tectonic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"exquisite",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"galactic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"comatose",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"intrinsic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"disheveled",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"sonorous",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"dubious",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"capricious",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"logrithmic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"peppery",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"analog",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"bombastic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"cerebral",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"eclectic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"idyllic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"intrepid",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"nebulous",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"amethyst",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"marmalade",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"decadent",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"tequila",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"quaffable",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"coconut",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"egg nog",type:"adjective",syllables:2,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"canary",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"daffodil",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"butterscotch",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"tangerine",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"marigold",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"sangria",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"flamingo",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"magenta",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"lavender",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"mulberry",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"hickory",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"cinnamon",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"ebony",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"apricot",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"atomic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"burgundy",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"gun metal",type:"adjective",syllables:2,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"jungle green",type:"adjective",syllables:2,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"marshmallow",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"rosado",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"naranja",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"toledo",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"butterbeer",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"rocky road",type:"adjective",syllables:2,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"seductive",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"calico",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"seductive",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"lemon drop",type:"adjective",syllables:2,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"milky way",type:"adjective",syllables:2,style:"all"};
          threeSyllable[5].push(word);
          //4 syllables
          word = {writtenWord:"delectable",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"periwinkle",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"efflorescent",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"homogenous",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"ineffable",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"kamikaze",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"psychedelic",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"charismatic",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"convoluted",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"colloqial",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"interstellar",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"mellifluous",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"nefarious",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"ephermeral",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"bohemian",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"algebraic",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"cartesian",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"euclidean",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"fibonacci",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"isosceles",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"pythagorean",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"row-echelon",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"dilatory",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"equivocal",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"innocuous",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"oscillating",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"obsidian",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"peruvian",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"diaphanous",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"caliente",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"dadivoso",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"periwinkle",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"boysenberry",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"alabaster",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"dandelion",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"mahogany",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"pistacio",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"obsidian",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"atomic blue",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"cosmic latte",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"terra cotta",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"eucalyptus",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"tantalizing",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          //5 syllables
          word = {writtenWord:"maravillosa",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"heterozygous",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"mathematical",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"perpendicular",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"diabolical",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"pentasyllabic",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"lackadaisical",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"astronomical",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"intoxicating",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"chronological",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"affiliated",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"reverberating",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"dilapidated",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"infinitesimal",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"philadelphia",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);



          //WORDS OF GROUPING = note do not add in "of" when adding words
          //1 syllables
          word = {writtenWord:"pools",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"bowl",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"tea",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"mug",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"cup",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"notes",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"crown",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"dash",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"cove",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"queen",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"quilt",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"scoop",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"dose",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"field",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"spool",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          //2 syllables
          word = {writtenWord:"puddle",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"bouquet",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"dollop",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"orchard",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"cocktail",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"coven",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"valley",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"vineyar",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"brewery",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"platter",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"garden",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"cluster",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"kingdom",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"mileau",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"priestess",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"temptress",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"soiree",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"teaspoon",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          //3 syllables
          word = {writtenWord:"aromas",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"canopy",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"peppering",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"masquerade",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          //4 syllables
          word = {writtenWord:"laboratory",type:"wordOfGrouping",syllables:4,style:"all"};
          fourSyllable[6].push(word);
          word = {writtenWord:"culmination",type:"wordOfGrouping",syllables:4,style:"all"};
          fourSyllable[6].push(word);
          word = {writtenWord:"portfolio",type:"wordOfGrouping",syllables:4,style:"all"};
          fourSyllable[6].push(word);
          //5 syllables
          word = {writtenWord:"conglomeration",type:"wordOfGrouping",syllables:5,style:"all"};
          fiveSyllable[6].push(word);



          //NOUN LINKING SECOND WORD SINGULAR (assuming first word is singular)
          //1 syllables
          word = {writtenWord:"and",type:"nounLinkingSecondSingular",syllables:1,style:"all"};
          oneSyllable[7].push(word);
          //2 syllables
          word = {writtenWord:"marries",type:"nounLinkingSecondSingular",syllables:2,style:"all"};
          twoSyllable[7].push(word);
          //3 syllables
          word = {writtenWord:"crowned with a",type:"nounLinkingSecondSingular",syllables:3,style:"all"};
          threeSyllable[7].push(word);
          word = {writtenWord:"laced with a",type:"nounLinkingSecondSingular",syllables:3,style:"all"};
          threeSyllable[7].push(word);
          word = {writtenWord:"complements",type:"nounLinkingSecondSingular",syllables:3,style:"all"};
          threeSyllable[7].push(word);
          //4 syllables
          word = {writtenWord:"says hello to",type:"nounLinkingSecondSingular",syllables:4,style:"all"};
          fourSyllable[7].push(word);
          //5 syllables
          word = {writtenWord:"in accordance with",type:"nounLinkingSecondSingular",syllables:5,style:"all"};
          fiveSyllable[7].push(word);


          //NOUN LINKING SECOND WORD PLURAL(assuming first word is plural)
          //1 syllables
          word = {writtenWord:"and",type:"nounLinkingSecondPlural",syllables:1,style:"all"};
          oneSyllable[8].push(word);
          //2 syllables
          word = {writtenWord:"crowned with",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"laced with",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"snuggle",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"join with",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"flirt with",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"waltz with",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"marry",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"pair with",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          //3 syllables
          word = {writtenWord:"complement",type:"nounLinkingSecondPlural",syllables:3,style:"all"};
          threeSyllable[8].push(word);
          word = {writtenWord:"tango with",type:"nounLinkingSecondPlural",syllables:3,style:"all"};
          threeSyllable[8].push(word);
          //4 syllables
          word = {writtenWord:"tessalate with",type:"nounLinkingSecondPlural",syllables:4,style:"all"};
          fourSyllable[8].push(word);
          word = {writtenWord:"fiesta with",type:"nounLinkingSecondPlural",syllables:4,style:"all"};
          fourSyllable[8].push(word);
          word = {writtenWord:"siesta with",type:"nounLinkingSecondPlural",syllables:4,style:"all"};
          fourSyllable[8].push(word);
          //5 syllables
          word = {writtenWord:"in accordance with",type:"nounLinkingSecondPlural",syllables:5,style:"all"};
          fiveSyllable[8].push(word);


  //let indexToGet = Utilities.getRandomInteger(0, fiveSyllable[5].length - 1);
  //document.getElementById("poem3").innerHTML = (typeof fiveSyllable[5][indexToGet]);
  }

  function getLine(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
        let templateLibrary = getTemplatesForSevenSyllables();
        if (numberOfSyllables == 5) {
          templateLibrary = getTemplatesForFiveSyllables();
        }
        //figure out which template to use randomly
        //let numberOfTemplateToUse = 5;
        let numberOfTemplateToUse = Utilities.getRandomInteger(0, templateLibrary.length - 1);
        //document.getElementById("poem2").innerHTML = numberOfTemplateToUse;
        //grab index (which is another array) from templates for five or seven syllables
        let template = templateLibrary[numberOfTemplateToUse];
        //first index of template = ordering of words
        let firstIndex = template[0];
        //split up first index by commas = now an array
        let parsedFirstIndex = firstIndex.split(',');

        //second index of template = possible syllable combinations array = need to choose one
        let secondIndex = template[1];
        let syllableCombo = template[1][Utilities.getRandomInteger(0, secondIndex.length - 1)];
        //split up syllable combo by commas so can select correct word = now an array
        let parsedSyllableCombo = syllableCombo.split(',');
        //let parsedSyllableCombo = ["2","3"];
        //go through first index while using info from second index to select words and add to the line
        let line = "";
        let indexToAccessInParsedSyllableCombo = 0;
        for (let k = 0; k < parsedFirstIndex.length; k++) {
            //grab next word type from parsed first index
            let nextWord = parsedFirstIndex[k];

            //check if the word is any of the keywords
            switch (nextWord) {

                case "verbSingular":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables1 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                    //document.getElementById("poem2").innerHTML = wordBank.getSingularVerb(syllables1);
                    //let test1 = getSingularVerb(syllables1);
                    //grab singular verb written version
                    let wordToAdd1 = getSingularVerb(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    //let wordToAdd1 = wordBank.getSingularVerb(syllables1).getWrittenWord();
                    //add word to line
                    line = line + wordToAdd1 + " ";
                    break;

                case "verbPlural":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables2 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                    //document.getElementById("poem2").innerHTML = wordBank.getPluralVerb(syllables2);
                    //let test2 = wordBank.getPluralVerb(syllables2);
                    //grab plural verb written version
                    let wordToAdd2 = getPluralVerb(syllables2,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    //let wordToAdd2 = wordBank.getPluralVerb(syllables2).getWrittenWord();
                    //add word to line
                    line = line + wordToAdd2 + " ";
                    break;
                case "nounSingular":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables3 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                    //document.getElementById("poem2").innerHTML =wordBank.getSingularNoun(syllables3);
                    //let test3 = wordBank.getSingularNoun(syllables3);
                    //grab written version
                    let wordToAdd3 = getSingularNoun(syllables3,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    //let wordToAdd3 = wordBank.getSingularNoun(syllables3).getWrittenWord();
                    //add word to line
                    line = line + wordToAdd3 + " ";
                    break;
                case "nounSingularAOrAn":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables4 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                  //  document.getElementById("poem2").innerHTML = wordBank.getSingularNoun(syllables4);
                    //let test4 = wordBank.getSingularNoun(syllables4);
                    //grab written version
                    let wordToAdd4 = getSingularNoun(syllables4,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    //let wordToAdd4 = wordBank.getSingularNoun(syllables4).getWrittenWord();
                    //check for correct a or an
                    let aOrAn4 = Utilities.checkIfWordNeedsAOrAn(wordToAdd4);
                    //add word to line
                    line = line + aOrAn4 + " " + wordToAdd4 + " ";
                    break;
                case "nounPlural":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables5 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                    //document.getElementById("poem2").innerHTML = wordBank.getPluralNoun(syllables5);
                    //let test5 = wordBank.getPluralNoun(syllables5);
                    //grab written version
                    let wordToAdd5 = getPluralNoun(syllables5,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    //let wordToAdd5 = wordBank.getPluralNoun(syllables5).getWrittenWord();

                    //add word to line
                    line = line + wordToAdd5 + " ";
                    break;
                case "adjective":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables6 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                    //document.getElementById("poem2").innerHTML =wordBank.getAdjective(syllables6);
                    //let test6 = wordBank.getAdjective(syllables6);
                    //grab written version
                    let wordToAdd6 = getAdjective(syllables6,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    //let wordToAdd6 = wordBank.getAdjective(syllables6).getWrittenWord();
                    //add word to line
                    line = line + wordToAdd6 + " ";
                    break;
                case "adjectiveAOrAn":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables7 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                    //document.getElementById("poem2").innerHTML = wordBank.getAdjective(syllables7);
                    //let test7 = wordBank.getAdjective(syllables7);
                    //grab written version
                    let wordToAdd7 = getAdjective(syllables7,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                  //  let wordToAdd7 = wordBank.getAdjective(syllables7).getWrittenWord();
                    //check for correct a or an
                    let aOrAn7 = Utilities.checkIfWordNeedsAOrAn(wordToAdd7);

                    //add word to line
                    line = line + aOrAn7 + " " + wordToAdd7 + " ";
                    break;
                case "adverb":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables8 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                    ///document.getElementById("poem2").innerHTML =  wordBank.getAdverb(syllables8);
                    ///let test8 =  wordBank.getAdverb(syllables8);
                    //grab written version
                    let wordToAdd8 = getAdverb(syllables8,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    //let wordToAdd8 = wordBank.getAdverb(syllables8).getWrittenWord();
                    //add word to line
                    line = line + wordToAdd8 + " ";
                    break;
                case "wordOfGrouping":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables9 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                    //document.getElementById("poem2").innerHTML =wordBank.getWordOfGrouping(syllables9);
                    //let test9 = wordBank.getWordOfGrouping(syllables9);
                    //grab written version
                    let wordToAdd9 = getWordOfGrouping(syllables9,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    //let wordToAdd9 = wordBank.getAdverb(syllables8).getWrittenWord();
                    //add word to line
                    line = line + wordToAdd9 + " ";
                    break;
                case "wordOfGroupingAOrAn":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables10 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                  //  document.getElementById("poem2").innerHTML =wordBank.getWordOfGrouping(syllables10);
                    //let test10 = wordBank.getWordOfGrouping(syllables10);
                    //grab written version
                   let wordToAdd10 = getWordOfGrouping(syllables10,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                  //  let wordToAdd10 = wordBank.getWordOfGrouping(syllables10).getWrittenWord();
                    //check for correct a or an
                    let aOrAn10 = Utilities.checkIfWordNeedsAOrAn(wordToAdd10);

                    //add word to line
                    line = line + aOrAn10 + " " + wordToAdd10 + " ";
                    break;
                case "nounLinkingSecondSingular":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables12 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                  //  document.getElementById("poem2").innerHTML =wordBank.getWordOfGrouping(syllables10);
                    //let test10 = wordBank.getWordOfGrouping(syllables10);
                    //grab written version
                   let wordToAdd12 = getNounLinkingSecondSingular(syllables12,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                  //  let wordToAdd10 = wordBank.getWordOfGrouping(syllables10).getWrittenWord();

                    //add word to line
                    line = line + " " + wordToAdd12 + " ";
                    break;
                case "nounLinkingSecondPlural":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables13 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                  //  document.getElementById("poem2").innerHTML =wordBank.getWordOfGrouping(syllables10);
                    //let test10 = wordBank.getWordOfGrouping(syllables10);
                    //grab written version
                   let wordToAdd13 = getNounLinkingSecondPlural(syllables13,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                  //  let wordToAdd10 = wordBank.getWordOfGrouping(syllables10).getWrittenWord();

                    //add word to line
                    line = line + " " + wordToAdd13 + " ";
                    break;
                case "any":
                    //get number of syllables it needs to be from parsedSyllableCombo and increment index
                    let syllables11 = parseInt(parsedSyllableCombo[indexToAccessInParsedSyllableCombo]);
                    //get random type of word
                    let wordToAdd11;
                    let randomWordClassChoice = Utilities.getRandomInteger(0, 4);
                    switch (randomWordClassChoice) {
                        case 0:
                            //wordToAdd11 = wordBank.getSingularVerb(syllables11).writtenWord; = MAKECONSISTENT
                            wordToAdd11 = getSingularVerb(syllables11,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            break;
                        case 1:
                            //wordToAdd11 = wordBank.getPluralVerb(syllables11).writtenWord;
                            wordToAdd11 = getPluralVerb(syllables11,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            break;
                        case 2:
                          //  wordToAdd11 = wordBank.getSingularNoun(syllables11).writtenWord;
                            wordToAdd11 = getSingularNoun(syllables11,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            break;
                        case 3:
                            //wordToAdd11 = wordBank.getPluralNoun(syllables11).writtenWord;
                            wordToAdd11 = getPluralNoun(syllables11,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            break;
                        case 4:
                            //wordToAdd11 = wordBank.getAdjective(syllables11).writtenWord;
                            wordToAdd11 = getAdjective(syllables11,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            break;
                    }
                    //add word to line
                    line = line + wordToAdd11 + " ";
                    break;
                default: //add word automatically to the line, do not increment index to access in parsed syllable combo since number of syllables for filler words already accounted for
                    //add word to line
                    line = line + nextWord + " ";
                    indexToAccessInParsedSyllableCombo--; //do not increment
                    break;
            }
            indexToAccessInParsedSyllableCombo++;
        }
        return line;
    }

  //
  //
  //           /* Template key words
  //             //aOrAn
  //               verbSingular
  //               verbPlural
  //               nounSingular
  //               //nounSingularAOrAn
  //               nounPlural
  //               adjective
  //               adjectiveAOrAn
  //               adverb
  //               wordOfGrouping
  //             //  wordOfGroupingAOrAn
  //               nounLinkingSecondSingular
  //               nounLinkingSecondPlural
  //             //  any
  //           */
    function getTemplatesForFiveSyllables() {
      let templatesForFiveSyllables = [
            ["nounSingularAOrAn", ["4"]],
            ["the,nounSingular", ["4"]],
            ["wordOfGroupingAOrAn,of,nounPlural", ["2,1", "1,2"]],
            ["adjective,nounSingular", ["1,4", "4,1", "2,3", "3,2"]],
            ["adjective,nounPlural", ["1,4", "4,1", "2,3", "3,2"]],
            ["nounPlural,verbPlural", ["1,4", "4,1", "2,3", "3,2"]],
            ["verbSingular,adverb", ["1,4", "4,1", "2,3", "3,2"]],
            ["verbPlural,adverb", ["1,4", "4,1", "2,3", "3,2"]],
            ["adjective,nounSingular,verbSingular", ["1,2,2", "2,2,1", "1,1,3", "2,1,2", "1,3,1", "3,1,1"]],
            ["adjective,nounPlural,verbPlural", ["1,2,2", "2,2,1", "1,1,3", "2,1,2", "1,3,1", "3,1,1"]],
            ["any", ["5"]],
            ["nounPlural,nounLinkingSecondPlural,nounPlural",["1,2,2", "2,2,1", "1,1,3", "2,1,2", "1,3,1", "3,1,1"]],
            ["some,nounPlural", ["4"]],
            ["nounSingular,nounLinkingSecondSingular,nounSingular",["1,2,2", "2,2,1", "1,1,3", "2,1,2", "1,3,1", "3,1,1"]]
      ];
      return templatesForFiveSyllables;
    }

    function getTemplatesForSevenSyllables(){
      let templatesForSevenSyllables = [
            ["adjective,nounSingular", ["2,5", "5,2", "3,4", "4,3"]],
            ["adjective,nounPlural", ["2,5", "5,2", "3,4", "4,3"]],
            ["his,nounSingular,verbSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["her,nounSingular,verbSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["their,nounSingular,verbSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["our,nounSingular,verbSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["my,nounSingular,verbSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["your,nounSingular,verbSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["its,nounSingular,verbSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["his,nounPlural,verbPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["her,nounPlural,verbPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["their,nounPlural,verbPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["our,nounPlural,verbPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["my,nounPlural,verbPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["your,nounPlural,verbPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["its,nounPlural,verbPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["his,adjective,nounPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["her,adjective,nounPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["their,adjective,nounPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["our,adjective,nounPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["my,adjective,nounPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["your,adjective,nounPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["its,adjective,nounPlural", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["his,adjective,nounSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["her,adjective,nounSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["their,adjective,nounSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["our,adjective,nounSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["my,adjective,nounSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["your,adjective,nounSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["its,adjective,nounSingular", ["5,1", "1,5", "2,4", "4,2", "3,3"]],
            ["his,nounSingular,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["her,nounSingular,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["their,nounSingular,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["our,nounSingular,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["my,nounSingular,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["your,nounSingular,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["its,nounSingular,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["his,nounPlural,verbPlural,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["her,nounPlural,verbPlural,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["their,nounPlural,verbPlural,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["our,nounPlural,verbPlural,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["my,nounPlural,verbPlural,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["your,nounPlural,verbPlural,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["its,nounPlural,verbPlural,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["the,nounPlural,verbPlural,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["the,nounSingular,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["nounSingularAOrAn,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["the,adjective,nounPlural,verbPlural", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["the,adjective,nounSingular,verbSingular", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["adjectiveAOrAn,nounSingular,verbSingular", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["adjective,nounSingular,verbSingular", ["1,1,5","1,5,1","5,1,1","1,3,3","3,1,3","3,3,1","1,2,4","1,4,2","4,2,1","4,1,2","2,2,3","2,3,2","3,2,2"]],
            ["adjective,nounPlural,verbPlural", ["1,1,5", "1,5,1", "5,1,1", "1,3,3", "3,1,3", "3,3,1", "1,2,4", "1,4,2", "4,2,1", "4,1,2", "2,2,3", "2,3,2", "3,2,2"]],
            ["nounPlural,verbPlural,adverb", ["1,1,5", "1,5,1", "5,1,1", "1,3,3", "3,1,3", "3,3,1", "1,2,4", "1,4,2", "4,2,1", "4,1,2", "2,2,3", "2,3,2", "3,2,2"]],
            ["nounSingular,verbSingular,adverb", ["1,1,5", "1,5,1", "5,1,1", "1,3,3", "3,1,3", "3,3,1", "1,2,4", "1,4,2", "4,2,1", "4,1,2", "2,2,3", "2,3,2", "3,2,2"]],
            ["the,nounSingular,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["nounSingularAOrAn,verbSingular,adverb", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["wordOfGroupingAOrAn,of,nounPlural", ["1,4", "4,1", "2,3", "3,2"]],
            ["wordOfGroupingAOrAn,of,nounPlural,verbPlural", ["1,1,3", "1,3,1", "3,1,1", "2,2,1", "1,2,2", "2,1,2"]],
            ["nounPlural,nounLinkingSecondPlural,nounPlural", ["1,1,5", "1,5,1", "5,1,1", "1,3,3", "3,1,3", "3,3,1", "1,2,4", "1,4,2", "4,2,1", "4,1,2", "2,2,3", "2,3,2", "3,2,2"]],
            ["nounSingular,nounLinkingSecondSingular,nounSingular", ["1,1,5", "1,5,1", "5,1,1", "1,3,3", "3,1,3", "3,3,1", "1,2,4", "1,4,2", "4,2,1", "4,1,2", "2,2,3", "2,3,2", "3,2,2"]]

      ];
      return templatesForSevenSyllables;
    }

    class Utilities {
        constructor() {

        }

        //both max and min included
        static getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        static checkIfWordNeedsAOrAn(word) {
            let firstLetterOfWord = word.charAt(0);

            if (firstLetterOfWord == 'a' || firstLetterOfWord == 'e' || firstLetterOfWord == 'i' || firstLetterOfWord == 'o' || firstLetterOfWord == 'u') {
                return "an";
            }
            else {
                return "a";
            }
        }
    }

  //
    function getSingularVerb(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
        switch (numberOfSyllables) {
            case 1:
                let indexToGet1 = Utilities.getRandomInteger(0, oneSyllable[0].length - 1);
                //console.log(typeof oneSyllable[0][indexToGet]);
                return oneSyllable[0][indexToGet1]; //returns a word object
                //return getOneSyllableSingularVerb(oneSyllable);
                break;
            case 2:
                let indexToGet2 = Utilities.getRandomInteger(0, twoSyllable[0].length - 1);
                //console.log(typeof twoSyllable[0][indexToGet]);
                return twoSyllable[0][indexToGet2]; //returns a word object
                //return getTwoSyllableSingularVerb(twoSyllable);
                break;
            case 3:
                 let indexToGet3 = Utilities.getRandomInteger(0, threeSyllable[0].length - 1);
                 //console.log(typeof threeSyllable[0][indexToGet]);
                 return threeSyllable[0][indexToGet3]; //returns a word object
                 //return getThreeSyllableSingularVerb(threeSyllable);
                 break;
             case 4:
                 let indexToGet4 = Utilities.getRandomInteger(0, fourSyllable[0].length - 1);
                 //console.log(typeof fourSyllable[0][indexToGet]);
                 return fourSyllable[0][indexToGet4]; //returns a word object
                 //return getFourSyllableSingularVerb(fourSyllable);
                 break;
             case 5:
                 let indexToGet5 = Utilities.getRandomInteger(0, fiveSyllable[0].length - 1);
                 //console.log(typeof fiveSyllable[0][indexToGet]);
                 return fiveSyllable[0][indexToGet5]; //returns a word object
                 //return getFiveSyllableSingularVerb(fiveSyllable);
                 break;
         }
    }

    function getPluralVerb(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
         switch (numberOfSyllables) {
             case 1:
                 let indexToGet1 = Utilities.getRandomInteger(0, oneSyllable[1].length - 1);
                 //console.log(typeof oneSyllable[0][indexToGet]);
                 return oneSyllable[1][indexToGet1]; //returns a word object
                 //return getOneSyllablePluralVerb(oneSyllable);
                 break;
             case 2:
                 let indexToGet2 = Utilities.getRandomInteger(0, twoSyllable[1].length - 1);
                 //console.log(typeof twoSyllable[1][indexToGet]);
                 return twoSyllable[1][indexToGet2]; //returns a word object
                 //return getTwoSyllablePluralVerb(twoSyllable);
                 break;
             case 3:
                 let indexToGet3 = Utilities.getRandomInteger(0, threeSyllable[1].length - 1);
                 //console.log(typeof threeSyllable[1][indexToGet]);
                 return threeSyllable[1][indexToGet3]; //returns a word object
                 //return getThreeSyllablePluralVerb(threeSyllable);
                 break;
             case 4:
                 let indexToGet4 = Utilities.getRandomInteger(0, fourSyllable[1].length - 1);
                 //console.log(typeof fourSyllable[1][indexToGet]);
                 return fourSyllable[1][indexToGet4]; //returns a word object
                 //return getFourSyllablePluralVerb(fourSyllable);
                 break;
             case 5:
                 let indexToGet5 = Utilities.getRandomInteger(0, fiveSyllable[1].length - 1);
                 //console.log(typeof fiveSyllable[1][indexToGet]);
                 return fiveSyllable[1][indexToGet5]; //returns a word object
                 //return getFiveSyllablePluralVerb(fiveSyllable);
                 break;
         }
    }

    function getAdverb(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
        switch (numberOfSyllables) {
            case 1:
                let indexToGet1 = Utilities.getRandomInteger(0, oneSyllable[2].length - 1);
              //  console.log(typeof oneSyllable[2][indexToGet]);
                return oneSyllable[2][indexToGet1]; //returns a word object
              //  return getOneSyllableAdverb(oneSyllable);
              break;
            case 2:
                let indexToGet2 = Utilities.getRandomInteger(0, twoSyllable[2].length - 1);
                //console.log(typeof twoSyllable[2][indexToGet]);
                return twoSyllable[2][indexToGet2]; //returns a word object
                //return getTwoSyllableAdverb(twoSyllable);
                break;
            case 3:
                let indexToGet3 = Utilities.getRandomInteger(0, threeSyllable[2].length - 1);
                //console.log(typeof threeSyllable[2][indexToGet]);
                return threeSyllable[2][indexToGet3]; //returns a word object
                //return getThreeSyllableVerb(threeSyllable);
                break;
            case 4:
                let indexToGet4 = Utilities.getRandomInteger(0, fourSyllable[2].length - 1);
                //console.log(typeof fourSyllable[2][indexToGet]);
                return fourSyllable[2][indexToGet4]; //returns a word object
                //return getFourSyllableVerb(fourSyllable);
                break;
            case 5:
                let indexToGet5 = Utilities.getRandomInteger(0, fiveSyllable[2].length - 1);
                //console.log(typeof fiveSyllable[2][indexToGet]);
                return fiveSyllable[2][indexToGet5]; //returns a word object
                //return getFiveSyllableVerb(fiveSyllable);
                break;
        }
    }

    function getSingularNoun(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
        switch (numberOfSyllables) {
            case 1:
                let indexToGet1 = Utilities.getRandomInteger(0, oneSyllable[3].length - 1);
                //console.log(typeof oneSyllable[3][indexToGet]);
                return oneSyllable[3][indexToGet1]; //returns a word object
                //return getOneSyllableSingularNoun(oneSyllable);
                break;
            case 2:
                let indexToGet2 = Utilities.getRandomInteger(0, twoSyllable[3].length - 1);
                //console.log(typeof twoSyllable[3][indexToGet]);
                return twoSyllable[3][indexToGet2]; //returns a word object
                //return getTwoSyllableSingularNoun(twoSyllable);
                break;
            case 3:
                let indexToGet3 = Utilities.getRandomInteger(0, threeSyllable[3].length - 1);
                //console.log(typeof threeSyllable[3][indexToGet]);
                return threeSyllable[3][indexToGet3]; //returns a word object
                //return getThreeSyllableSingularNoun(threeSyllable);
                break;
            case 4:
                let indexToGet4 = Utilities.getRandomInteger(0, fourSyllable[3].length - 1);
                //console.log(typeof fourSyllable[3][indexToGet]);
                return fourSyllable[3][indexToGet4]; //returns a word object
              //  return getFourSyllableSingularNoun(fourSyllable);
              break;
            case 5:
                let indexToGet5 = Utilities.getRandomInteger(0, fiveSyllable[3].length - 1);
                //console.log(typeof fiveSyllable[3][indexToGet]);
                return fiveSyllable[3][indexToGet5]; //returns a word object
                //return getFiveSyllableSingularNoun(fiveSyllable);
                break;
        }
    }

    function getPluralNoun(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
        switch (numberOfSyllables) {
            case 1:
                 let indexToGet1 = Utilities.getRandomInteger(0,oneSyllable[4].length - 1);
                 //console.log(typeof oneSyllable[4][indexToGet]);
                 return oneSyllable[4][indexToGet1]; //returns a word object
                 //return getOneSyllablePluralNoun(oneSyllable);
                 break;
             case 2:
                 let indexToGet2 = Utilities.getRandomInteger(0, twoSyllable[4].length - 1);
               //  console.log(typeof twoSyllable[4][indexToGet]);
                 return twoSyllable[4][indexToGet2]; //returns a word object
               //  return getTwoSyllablePluralNoun(twoSyllable);
               break;
             case 3:
                 let indexToGet3 = Utilities.getRandomInteger(0, threeSyllable[4].length - 1);
                 //console.log(typeof threeSyllable[4][indexToGet]);
                 return threeSyllable[4][indexToGet3]; //returns a word object
               //  return getThreeSyllablePluralNoun(threeSyllable);
               break;
             case 4:
                 let indexToGet4 = Utilities.getRandomInteger(0, fourSyllable[4].length - 1);
                 //console.log(typeof fourSyllable[4][indexToGet]);
                 return fourSyllable[4][indexToGet4]; //returns a word object
                 //return getFourSyllablePluralNoun(fourSyllable);
                 break;
             case 5:
                 let indexToGet5 = Utilities.getRandomInteger(0, fiveSyllable[4].length - 1);
                 //console.log(typeof fiveSyllable[4][indexToGet]);
                 return fiveSyllable[4][indexToGet5]; //returns a word object
                 //return getFiveSyllablePluralNoun(fiveSyllable);
                 break;
         }
    }

    function getAdjective(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
        switch (numberOfSyllables) {
            case 1:
                let indexToGet1 = Utilities.getRandomInteger(0, oneSyllable[5].length - 1);
                //console.log(typeof oneSyllable[5][indexToGet]);
                return oneSyllable[5][indexToGet1]; //returns a word object
                //return getOneSyllableAdjective(oneSyllable);
                break;
            case 2:
                let indexToGet2 = Utilities.getRandomInteger(0, twoSyllable[5].length - 1);
                //console.log(typeof twoSyllable[5][indexToGet]);
                return twoSyllable[5][indexToGet2]; //returns a word object
                //return getTwoSyllableAdjective(twoSyllable);
                break;
            case 3:
                 let indexToGet3 = Utilities.getRandomInteger(0, threeSyllable[5].length - 1);
        //         //console.log(typeof threeSyllable[5][indexToGet]);
                 return threeSyllable[5][indexToGet3]; //returns a word object
                //return getThreeSyllableAdjective(threeSyllable);
                break;
            case 4:
                let indexToGet4 = Utilities.getRandomInteger(0, fourSyllable[5].length - 1);
                //console.log(typeof fourSyllable[5][indexToGet]);
                return fourSyllable[5][indexToGet4]; //returns a word object
                //return getFourSyllableAdjective(fourSyllable);
                break;
            case 5:
                let indexToGet5 = Utilities.getRandomInteger(0, fiveSyllable[5].length - 1);
                //console.log(typeof fiveSyllable[5][indexToGet]);
                return fiveSyllable[5][indexToGet5]; //returns a word object
                //return getFiveSyllableAdjective(fiveSyllable);
                break;
        }
    }

    function getWordOfGrouping(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
        switch (numberOfSyllables) {
            case 1:
                let indexToGet1 = Utilities.getRandomInteger(0, oneSyllable[6].length - 1);
                //console.log(typeof oneSyllable[6][indexToGet]);
                return oneSyllable[6][indexToGet1]; //returns a word object
                //return getOneSyllableWordOfGrouping(oneSyllable);
                break;
            case 2:
                let indexToGet2 = Utilities.getRandomInteger(0, twoSyllable[6].length - 1);
                //console.log(typeof twoSyllable[6][indexToGet]);
                return twoSyllable[6][indexToGet2]; //returns a word object
                //return getTwoSyllableWordOfGrouping(twoSyllable);
                break;
            case 3:
                let indexToGet3 = Utilities.getRandomInteger(0, threeSyllable[6].length - 1);
        //         //console.log(typeof threeSyllable[6][indexToGet]);
                 return threeSyllable[6][indexToGet3]; //returns a word object
              //return getThreeSyllableWordOfGrouping(threeSyllable);
              break;
            case 4:
                let indexToGet4 = Utilities.getRandomInteger(0, fourSyllable[6].length - 1);
                //console.log(typeof fourSyllable[6][indexToGet]);
                return fourSyllable[6][indexToGet4]; //returns a word object
                //return getFourSyllableWordOfGrouping(fourSyllable);
                break;
            case 5:
                let indexToGet5 = Utilities.getRandomInteger(0, fiveSyllable[6].length - 1);
                //console.log(typeof fourSyllable[7][indexToGet]);
                return fiveSyllable[6][indexToGet5]; //returns a word object
              //  return getFiveSyllableWordOfGrouping(fiveSyllable);
              break;
        }
    }

    function getNounLinkingSecondSingular(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
        switch (numberOfSyllables) {
            case 1:
                let indexToGet1 = Utilities.getRandomInteger(0, oneSyllable[7].length - 1);
                //console.log(typeof oneSyllable[7][indexToGet]);
                return oneSyllable[7][indexToGet1]; //returns a word object
                //return getOneSyllableNounLinkingSecondSingular(oneSyllable);
                break;
            case 2:
                let indexToGet2 = Utilities.getRandomInteger(0, twoSyllable[7].length - 1);
                //console.log(typeof twoSyllable[7][indexToGet]);
                return twoSyllable[7][indexToGet2]; //returns a word object
                //return getTwoSyllableNounLinkingSecondSingular(twoSyllable);
                break;
            case 3:
                 let indexToGet3 = Utilities.getRandomInteger(0, threeSyllable[7].length - 1);
        //         //console.log(typeof threeSyllable[7][indexToGet]);
                 return threeSyllable[7][indexToGet3]; //returns a word object
                //return getThreeSyllableNounLinkingSecondSingular(threeSyllable);
                break;
            case 4:
                let indexToGet4 = Utilities.getRandomInteger(0, fourSyllable[7].length - 1);
                //console.log(typeof threeSyllable[8][indexToGet]);
                return fourSyllable[7][indexToGet4]; //returns a word object
                //return getFourSyllableNounLinkingSecondSingular(fourSyllable);
                break;
            case 5:
                let indexToGet5 = Utilities.getRandomInteger(0, fiveSyllable[7].length - 1);
                //console.log(typeof fiveSyllable[7][indexToGet]);
                return fiveSyllable[7][indexToGet5]; //returns a word object
                //return getFiveSyllableNounLinkingSecondSingular(fiveSyllable);
                break;
        }
    }

    function getNounLinkingSecondPlural(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable) {
        switch (numberOfSyllables) {
            case 1:
                let indexToGet1 = Utilities.getRandomInteger(0, oneSyllable[8].length - 1);
                //console.log(typeof oneSyllable[8][indexToGet]);
                return oneSyllable[8][indexToGet1]; //returns a word object
                //return getOneSyllableNounLinkingSecondPlural(oneSyllable);
                break;
            case 2:
                let indexToGet1 = Utilities.getRandomInteger(0, twoSyllable[8].length - 1);
                //console.log(typeof twoSyllable[8][indexToGet]);
                return twoSyllable[8][indexToGet1]; //returns a word object
                //return getTwoSyllableNounLinkingSecondPlural(twoSyllable);
                break;
            case 3:
                 let indexToGet2 = Utilities.getRandomInteger(0, threeSyllable[8].length - 1);
        //         //console.log(typeof threeSyllable[8][indexToGet]);
                 return threeSyllable[8][indexToGet2]; //returns a word object
                //return getThreeSyllableNounLinkingSecondPlural(threeSyllable);
                break;
            case 4:
                let indexToGet3 = Utilities.getRandomInteger(0, fourSyllable[8].length - 1);
                //console.log(typeof fourSyllable[8][indexToGet]);
                return fourSyllable[8][indexToGet3]; //returns a word object
                //return getFourSyllableNounLinkingSecondPlural(fourSyllable);
                break;
            case 5:
                let indexToGet4 = Utilities.getRandomInteger(0, fiveSyllable[8].length - 1);
                //console.log(typeof fiveSyllable[7][indexToGet]);
                return fiveSyllable[8][indexToGet4]; //returns a word object
              //  return getFiveSyllableNounLinkingSecondPlural(fiveSyllable);
              break;
        }
      }
