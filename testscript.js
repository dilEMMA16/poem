function writeHaiku(isMobile) {
    console.log("goes into method.");
  //two dimensional arrays to store word objects sorted by number of syllables
  let oneSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let twoSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let threeSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let fourSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let fiveSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping,nounLinkingSecondSingular, nounLinkingSecondPlural

  let wordsUsed = [];

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
  let firstLine = getLine(5, oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable, wordsUsed);
  let secondLine = getLine(7,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable, wordsUsed);
  let thirdLine = getLine(5,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable, wordsUsed);
  // let haiku = "<br><br>" + firstLine + "<br>" + secondLine + "<br>" + thirdLine + "<br><br>"
  //piece together poem
  //document.getElementById("poem").innerHTML = haiku
  if (isMobile) {
    document.getElementById("poemmobile").innerHTML = firstLine + "<br>" + secondLine + "<br>" + thirdLine;
  }
  else {
    document.getElementById("poem").innerHTML = firstLine + "<br>" + secondLine + "<br>" + thirdLine;
  }

  wordsUsed = [];
}



function getAllWords() {
  //two dimensional arrays to store word objects sorted by number of syllables
  let oneSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let twoSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let threeSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let fourSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let fiveSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping,nounLinkingSecondSingular, nounLinkingSecondPlural

  //populate with words
  populateDictionary(oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable);
  let singularVerbs = "";
  for (let k = 0; k < oneSyllable[0].length; k++) {
      singularVerbs = singularVerbs + oneSyllable[0][k].writtenWord + "    " ;
  }
  for (let k = 0; k < twoSyllable[0].length; k++) {
      singularVerbs = singularVerbs + twoSyllable[0][k].writtenWord + "    " ;
  }
  for (let k = 0; k < threeSyllable[0].length; k++) {
      singularVerbs = singularVerbs + threeSyllable[0][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fourSyllable[0].length; k++) {
      singularVerbs = singularVerbs + fourSyllable[0][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fiveSyllable[0].length; k++) {
      singularVerbs = singularVerbs + fiveSyllable[0][k].writtenWord + "    " ;
  }
  document.getElementById("singularVerbs").innerHTML = singularVerbs;

  let pluralVerbs = "";
  for (let k = 0; k < oneSyllable[1].length; k++) {
      pluralVerbs = pluralVerbs + oneSyllable[1][k].writtenWord + "    " ;
  }
  for (let k = 0; k < twoSyllable[1].length; k++) {
      pluralVerbs = pluralVerbs + twoSyllable[1][k].writtenWord + "    " ;
  }
  for (let k = 0; k < threeSyllable[1].length; k++) {
      pluralVerbs = pluralVerbs + threeSyllable[1][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fourSyllable[1].length; k++) {
      pluralVerbs = pluralVerbs + fourSyllable[1][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fiveSyllable[1].length; k++) {
      pluralVerbs = pluralVerbs + fiveSyllable[1][k].writtenWord + "    " ;
  }
  document.getElementById("pluralVerbs").innerHTML = pluralVerbs;

  let adverbs = "";
  for (let k = 0; k < oneSyllable[2].length; k++) {
      adverbs = adverbs + oneSyllable[2][k].writtenWord + "    " ;
  }
  for (let k = 0; k < twoSyllable[2].length; k++) {
      adverbs = adverbs  + twoSyllable[2][k].writtenWord + "    " ;
  }
  for (let k = 0; k < threeSyllable[2].length; k++) {
      adverbs = adverbs  + threeSyllable[2][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fourSyllable[2].length; k++) {
      adverbs = adverbs  + fourSyllable[2][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fiveSyllable[2].length; k++) {
      adverbs = adverbs  + fiveSyllable[2][k].writtenWord + "    " ;
  }
  document.getElementById("adverbs").innerHTML = adverbs;

  let singularNouns = "";
  for (let k = 0; k < oneSyllable[3].length; k++) {
      singularNouns = singularNouns + oneSyllable[3][k].writtenWord + "    " ;
  }
  for (let k = 0; k < twoSyllable[3].length; k++) {
      singularNouns = singularNouns  + twoSyllable[3][k].writtenWord + "    " ;
  }
  for (let k = 0; k < threeSyllable[3].length; k++) {
      singularNouns = singularNouns + threeSyllable[3][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fourSyllable[3].length; k++) {
      singularNouns = singularNouns  + fourSyllable[3][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fiveSyllable[3].length; k++) {
      singularNouns = singularNouns  + fiveSyllable[3][k].writtenWord + "    " ;
  }
  document.getElementById("singularNouns").innerHTML = singularNouns;

  let pluralNouns = "";
  for (let k = 0; k < oneSyllable[4].length; k++) {
      pluralNouns = pluralNouns + oneSyllable[4][k].writtenWord + "    " ;
  }
  for (let k = 0; k < twoSyllable[4].length; k++) {
      pluralNouns = pluralNouns  + twoSyllable[4][k].writtenWord + "    " ;
  }
  for (let k = 0; k < threeSyllable[4].length; k++) {
      pluralNouns = pluralNouns + threeSyllable[4][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fourSyllable[4].length; k++) {
      pluralNouns = pluralNouns   + fourSyllable[4][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fiveSyllable[4].length; k++) {
      pluralNouns = pluralNouns  + fiveSyllable[4][k].writtenWord + "    " ;
  }
  document.getElementById("pluralNouns").innerHTML = pluralNouns;

  let adjectives = "";
  for (let k = 0; k < oneSyllable[5].length; k++) {
      adjectives = adjectives + oneSyllable[5][k].writtenWord + "    " ;
  }
  for (let k = 0; k < twoSyllable[5].length; k++) {
      adjectives = adjectives  + twoSyllable[5][k].writtenWord + "    " ;
  }
  for (let k = 0; k < threeSyllable[5].length; k++) {
      adjectives = adjectives + threeSyllable[5][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fourSyllable[5].length; k++) {
      adjectives = adjectives  + fourSyllable[5][k].writtenWord + "    " ;
  }
  for (let k = 0; k < fiveSyllable[5].length; k++) {
      adjectives = adjectives  + fiveSyllable[5][k].writtenWord + "    " ;
  }
  document.getElementById("adjectives").innerHTML = adjectives;




}

function getRandomPoem(isMobile) {
  //two dimensional arrays to store word objects sorted by number of syllables
  let oneSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let twoSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let threeSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let fourSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping, nounLinkingSecondSingular, nounLinkingSecondPlural
  let fiveSyllable = [[], [], [], [], [], [], [], [],[]]; //singular verbs, plural verbs, adverbs, singular nouns, plural nouns, adjectives, word of grouping,nounLinkingSecondSingular, nounLinkingSecondPlural


  //populate with words
  populateDictionary(oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable);

  //decide how many lines (1 - 8)
  let numberOfLines = Utilities.getRandomInteger(1, 8);
  let poem = "";
  //for number of lines
  for (let i = 0; i < numberOfLines; i++) {

    //choose a template
    let templateLibrary = getAllTemplates();
    let numberOfTemplateToUse = Utilities.getRandomInteger(0, templateLibrary.length - 1);

    let template = templateLibrary[numberOfTemplateToUse];
    //first index of template = ordering of words
    let firstIndex = template[0];
    //split up first index by commas = now an array
    let parsedFirstIndex = firstIndex.split(',');
    let line = "";
    let indexToAccessInParsedSyllableCombo = 0;
    for (let k = 0; k < parsedFirstIndex.length; k++) {
        //grab next word type from parsed first index
        let nextWord = parsedFirstIndex[k];
        let syllablesToUse = Utilities.getRandomInteger(1, 5);
        //check if the word is any of the keywords
        switch (nextWord) {

            case "verbSingular":

                let wordToAdd1 = getSingularVerb(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                //let wordToAdd1 = wordBank.getSingularVerb(syllables1).getWrittenWord();
                //add word to line
                line = line + wordToAdd1 + " ";
                break;

            case "verbPlural":

                let wordToAdd2 = getPluralVerb(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                //let wordToAdd2 = wordBank.getPluralVerb(syllables2).getWrittenWord();
                //add word to line
                line = line + wordToAdd2 + " ";
                break;
            case "nounSingular":

                let wordToAdd3 = getSingularNoun(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                //let wordToAdd3 = wordBank.getSingularNoun(syllables3).getWrittenWord();
                //add word to line
                line = line + wordToAdd3 + " ";
                break;
            case "nounSingularAOrAn":

                let wordToAdd4 = getSingularNoun(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                //let wordToAdd4 = wordBank.getSingularNoun(syllables4).getWrittenWord();
                //check for correct a or an
                let aOrAn4 = Utilities.checkIfWordNeedsAOrAn(wordToAdd4);
                //add word to line
                line = line + aOrAn4 + " " + wordToAdd4 + " ";
                break;
            case "nounPlural":

                let wordToAdd5 = getPluralNoun(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                //let wordToAdd5 = wordBank.getPluralNoun(syllables5).getWrittenWord();

                //add word to line
                line = line + wordToAdd5 + " ";
                break;
            case "adjective":

                let wordToAdd6 = getAdjective(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                //let wordToAdd6 = wordBank.getAdjective(syllables6).getWrittenWord();
                //add word to line
                line = line + wordToAdd6 + " ";
                break;
            case "adjectiveAOrAn":

                let wordToAdd7 = getAdjective(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
              //  let wordToAdd7 = wordBank.getAdjective(syllables7).getWrittenWord();
                //check for correct a or an
                let aOrAn7 = Utilities.checkIfWordNeedsAOrAn(wordToAdd7);

                //add word to line
                line = line + aOrAn7 + " " + wordToAdd7 + " ";
                break;
            case "adverb":

                let wordToAdd8 = getAdverb(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                //let wordToAdd8 = wordBank.getAdverb(syllables8).getWrittenWord();
                //add word to line
                line = line + wordToAdd8 + " ";
                break;
            case "wordOfGrouping":

                let wordToAdd9 = getWordOfGrouping(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                //let wordToAdd9 = wordBank.getAdverb(syllables8).getWrittenWord();
                //add word to line
                line = line + wordToAdd9 + " ";
                break;
            case "wordOfGroupingAOrAn":

               let wordToAdd10 = getWordOfGrouping(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
              //  let wordToAdd10 = wordBank.getWordOfGrouping(syllables10).getWrittenWord();
                //check for correct a or an
                let aOrAn10 = Utilities.checkIfWordNeedsAOrAn(wordToAdd10);

                //add word to line
                line = line + aOrAn10 + " " + wordToAdd10 + " ";
                break;
            case "nounLinkingSecondSingular":

               let wordToAdd12 = getNounLinkingSecondSingular(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
              //  let wordToAdd10 = wordBank.getWordOfGrouping(syllables10).getWrittenWord();

                //add word to line
                line = line + " " + wordToAdd12 + " ";
                break;
            case "nounLinkingSecondPlural":

               let wordToAdd13 = getNounLinkingSecondPlural(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
              //  let wordToAdd10 = wordBank.getWordOfGrouping(syllables10).getWrittenWord();

                //add word to line
                line = line + " " + wordToAdd13 + " ";
                break;
            case "any":

                let wordToAdd11;
                let randomWordClassChoice = Utilities.getRandomInteger(0, 4);
                switch (randomWordClassChoice) {
                    case 0:
                        //wordToAdd11 = wordBank.getSingularVerb(syllables11).writtenWord; = MAKECONSISTENT
                        wordToAdd11 = getSingularVerb(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                        break;
                    case 1:
                        //wordToAdd11 = wordBank.getPluralVerb(syllables11).writtenWord;
                        wordToAdd11 = getPluralVerb(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                        break;
                    case 2:
                      //  wordToAdd11 = wordBank.getSingularNoun(syllables11).writtenWord;
                        wordToAdd11 = getSingularNoun(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                        break;
                    case 3:
                        //wordToAdd11 = wordBank.getPluralNoun(syllables11).writtenWord;
                        wordToAdd11 = getPluralNoun(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                        break;
                    case 4:
                        //wordToAdd11 = wordBank.getAdjective(syllables11).writtenWord;
                        wordToAdd11 = getAdjective(syllablesToUse,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                        break;
                }
                //add word to line
                line = line + wordToAdd11 + " ";
                break;
            default: //add word automatically to the line, do not increment index to access in parsed syllable combo since number of syllables for filler words already accounted for
                //add word to line
                line = line + nextWord + " ";
                break;
        }

    }

    poem = poem + line + "<br>" ;


  }

      //grab words as needed
        //based on type...
        //choose what number of syllables
        //get random from correct place in arrays
      //concatenate onto return value

  // let haiku = "<br><br>" + firstLine + "<br>" + secondLine + "<br>" + thirdLine + "<br><br>"
  //piece together poem
  //document.getElementById("poem").innerHTML = haiku
  if (isMobile) {
    document.getElementById("poemmobile").innerHTML = poem;
  }
  else {
    document.getElementById("poem").innerHTML = poem;
  }



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
          word = {writtenWord:"taunts",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"tempts",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"pouts",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"ebbs",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"woos",type:"verbSingular",syllables:1,style:"all"};
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
          word = {writtenWord:"moans",type:"verbSingular",syllables:1,style:"all"};
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
          word = {writtenWord:"soothes",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"kneels",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"leaves",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);

          word = {writtenWord:"tilts",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"swims",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"swoons",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"weeps",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"spoons",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"tips",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"drifts",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"basks",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"plays",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          //2 syllables
          word = {writtenWord:"dabbles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"snoozes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"betrays",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"follows",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"allures",type:"verbSingular",syllables:2,style:"all"};
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
          word = {writtenWord:"absolves",type:"verbSingular",syllables:2,style:"all"};
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
          word = {writtenWord:"washes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"purges",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"courses",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"toggles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"schmoozes",type:"verbSingular",syllables:2,style:"all"};
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
          word = {writtenWord:"touches",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"flushes",type:"verbSingular",syllables:2,style:"all"};
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
          word = {writtenWord:"adorns",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"muddles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"defines",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"hovers",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"pulses",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"wobbles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"crumbles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"completes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"competes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"slumbers",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"sunbathes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"lingers",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"topples",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"forgets",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"dissolves",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"hushes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"reminds",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"tiptoes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"sizzles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"fizzles",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"fizzes",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          word = {writtenWord:"worships",type:"verbSingular",syllables:2,style:"all"};
          twoSyllable[0].push(word);
          //3 syllables
          word = {writtenWord:"magnifies",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"promises",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"confesses",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"uncovers",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"steals away",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"reposes",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"entangles",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"serenades",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"captivates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"transfixes",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"unfurls",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"interrupts",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"falls in love",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"surrenders",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"canoodles",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"crescendos",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"devours",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"envelopes",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"encases",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"tessalates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"bombinates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"beguiles",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"divulges",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"satiates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"bemuses",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"remembers",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"caresses",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"emanates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"encounters",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"avalanches",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"telephones",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"finagles",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"contemplates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"dominates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"toboggans",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"chaperones",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"eclipses",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"perplexes",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"pantomimes",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"misconstrues",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"pollinates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"culminates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"collapses",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"encircles",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"confuses",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"convolutes",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"masquerades",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"promenades",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"detonates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"embraces",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"malingers",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"boondoggles",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"liquifies",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"abandons",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"overtakes",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"overwhelms",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"untangles",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"ruminates",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"dulcifies",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"awakens",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          //4 syllables
          word = {writtenWord:"evaporates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"apologizes",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"juxtaposes",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"pitter patters",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"atomizes",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"relinquishes",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"overdoses",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"illuminates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"enumerates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"electrifies",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"rejuvenates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"rearranges",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"camouflages",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"liquidizes",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"dillydallies",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"infatuates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"detoxifies",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"negotiates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"hypnotizes",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);
          word = {writtenWord:"equivocates",type:"verbSingular",syllables:4,style:"all"};
          fourSyllable[0].push(word);

          //5 syllables
          word = {writtenWord:"ameliorates",type:"verbSingular",syllables:5,style:"all"};
          fiveSyllable[0].push(word);
          word = {writtenWord:"disorientates",type:"verbSingular",syllables:5,style:"all"};
          fiveSyllable[0].push(word);
          word = {writtenWord:"caramelizes",type:"verbSingular",syllables:5,style:"all"};
          fiveSyllable[0].push(word);
          word = {writtenWord:"romanticizes",type:"verbSingular",syllables:5,style:"all"};
          fiveSyllable[0].push(word);

          //PLURAL VERBS
          //1 syllables
          word = {writtenWord:"dunk",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"moan",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"flush",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"delve",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"coo",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"drift",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"snooze",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"fizz",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"glide",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"slip",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"glaze",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"fetch",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"pulse",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"merge",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"squish",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"clasp",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"grasp",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"schmooze",type:"verbPlural",syllables:1,style:"all"};
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
          word = {writtenWord:"leave",type:"verbPlural",syllables:1,style:"all"};
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
          word = {writtenWord:"tempt",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"taunt",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"bloom",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"soothe",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"quell",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"coo",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"kneel",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"churn",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"dupe",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"dwell",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);

          word = {writtenWord:"tilt",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"weep",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"spoon",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"woo",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"play",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"swim",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"swoon",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"touch",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"tip",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"bask",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"hush",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          //2 syllables
          word = {writtenWord:"dabble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"betray",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"follow",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"transfix",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"embrace",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"repose",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"scribble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"worship",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"fizzle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"sizzle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"stumble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"absolve",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"dazzle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"drizzle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"fulfill",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"forget",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"transcend",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"ogle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"tangle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"tussel",type:"verbPlural",syllables:2,style:"all"};
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
          word = {writtenWord:"adorn",type:"verbPlural",syllables:2,style:"all"};
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
          word = {writtenWord:"complete",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"compete",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"debug",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"debunk",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"cajole",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"divulge",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"allure",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"tremble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"confuse",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"muddle",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"topple",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"promise",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"confess",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"wobble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"define",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"crumble",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"bemuse",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"linger",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"slumber",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"caress",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"sunbathe",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"perplex",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"remind",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"dissolve",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"coquette",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"tiptoe",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"collapse",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"hover",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          //3 syllables
          word = {writtenWord:"magnify",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"pantomime",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"unfurl",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"beguile",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"hypnotize",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"dulcify",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"liquify",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"liquidize",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"entangle",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"atomize",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"awaken",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"juxtapose",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"boondoggle",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"malinger",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"relinquish",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"steal away",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"uncover",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"interrupt",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"fall in love",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"convolute",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"masquerade",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"overwhelm",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"overtake",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"untangle",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"surrender",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"canoodle",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"promenade",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"detonate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"encircle",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"crescendo",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"overdose",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"toboggan",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"contemplate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"captivate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"dominate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"camouflage",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"finagle",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"rearrange",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"devour",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"envelope",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"tessalate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"bombinate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"satiate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"holiday",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"remember",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"separates",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"emanate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"honeymoon",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"abandon",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"parachute",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"telephone",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"avalanche",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"chaperone",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"culminate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"pollinate",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"misconstrue",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"serenade",type:"verbPlural",syllables:3,style:"all"};
          threeSyllable[1].push(word);
          word = {writtenWord:"ruminate",type:"verbPlural",syllables:3,style:"all"};
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
          word = {writtenWord:"pitter patter",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"apologize",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"caramelize",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"dillydally",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"infatuate",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"romanticize",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"detoxify",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"negotiate",type:"verbPlural",syllables:4,style:"all"};
          fourSyllable[1].push(word);
          word = {writtenWord:"equivocate",type:"verbPlural",syllables:4,style:"all"};
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
          word = {writtenWord:"near",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          word = {writtenWord:"rough",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          word = {writtenWord:"hard",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          word = {writtenWord:"soft",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          word = {writtenWord:"short",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          word = {writtenWord:"long",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          word = {writtenWord:"deep",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          word = {writtenWord:"late",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          word = {writtenWord:"early",type:"adverb",syllables:1,style:"all"};
          oneSyllable[2].push(word);
          //2 syllables
          word = {writtenWord:"fully",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"blindly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"idly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"fondly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"gently",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"lightly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"always",type:"adverb",syllables:2,style:"all"};
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
          word = {writtenWord:"for love",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"casi",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"madly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"coolly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"boldly",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          word = {writtenWord:"barely",type:"adverb",syllables:2,style:"all"};
          twoSyllable[2].push(word);
          //3 syllables
          word = {writtenWord:"gracefully",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"lovingly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"purposely",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"tenderly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"for amor",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"jovially",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"kookily",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"zestily",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"hopelessly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);

          word = {writtenWord:"siempre",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"endlessly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"gingerly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"bashfully",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"seldomly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"groggily",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"coaxingly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"cleverly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"fatally",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"shamelessly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"fervently",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"foolishly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"temptingly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"tauntingly",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          //4 syllables
          word = {writtenWord:"jubilantly",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"eternally",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"infinitely",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"purposefully",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"defiantly",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"without delay",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);

          word = {writtenWord:"lentamente",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"devilishly",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"dangerously",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"brevemente",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word =  {writtenWord:"a menudo",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"todavia",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"elegantly",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);

          word = {writtenWord:"in slow motion",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          //5 syllables
          word = {writtenWord:"completamente",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"peculiarly",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"rapidamente",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"alegremente",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"overwhelmingly",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"todos los dias",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);

          word = {writtenWord:"precariously",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"devastatingly",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);



          //SINGULAR NOUNS
          //1 syllables
          word = {writtenWord:"globe",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"moan",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"oil",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"kiss",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"glaze",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"sea",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"lake",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"loss",type:"nounSingular",syllables:1,style:"all"};
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
          word = {writtenWord:"bay",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"pyre",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"pie",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"charm",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"tea",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"cheek",type:"nounSingular",syllables:1,style:"all"};
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

          word = {writtenWord:"scoop",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"foe",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"fall",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"qualm",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"dose",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"dove",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"mauve",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"plum",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"silk",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"sun",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"glow",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"moon",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"milk",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"art",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"spice",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"om",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"sleep",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"fate",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"s'more",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"muse",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"heart",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"grove",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"loom",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"stone",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"mousse",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"rue",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"thought",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"gown",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"babe",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"dusk",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"swan",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          //2 syllables
          word = {writtenWord:"jungle",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mischief",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"allure",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);

          word = {writtenWord:"moonlight",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sunlight",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"drive-in",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tulip",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cupid",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"jukebox",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cherry",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"roulette",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"island",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mamba",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);

          word = {writtenWord:"morning",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"evening",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"darling",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"goblet",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"envy",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"intent",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"raindrop",type:"nounSingular",syllables:2,style:"all"};
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

          word = {writtenWord:"kingdom",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"funnel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"milieu",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"crony",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"figure",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"landscape",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mayhem",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"priestess",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"frenzy",type:"nounSingular",syllables:2,style:"all"};
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
          word = {writtenWord:"repose",type:"nounSingular",syllables:2,style:"all"};
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
          word = {writtenWord:"serum",type:"nounSingular",syllables:2,style:"all"};
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
          word = {writtenWord:"pallete",type:"nounSingular",syllables:2,style:"all"};
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
          word = {writtenWord:"lover",type:"nounSingular",syllables:2,style:"all"};
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
          word = {writtenWord:"mistake",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pillow",type:"nounSingular",syllables:2,style:"all"};
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

          word = {writtenWord:"dalia",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"baby",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"blue moon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"heartbreak",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);

          word = {writtenWord:"tulip",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"opus",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bonfire",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"turquoise",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);

          word = {writtenWord:"circe",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"softness",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"hera",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"solstice",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"summer",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"autumn",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"phone call",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"voodoo",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"juju",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"midnight",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mango",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"ballad",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"heartache",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"neptune",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sweetheart",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tonic",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"melange",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bazaar",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lullaby",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pluto",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sorrow",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sushi",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bedspread",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pleasure",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"flannel",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"farewell",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cotton",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"tablet",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"demure",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);

          word = {writtenWord:"lipstick",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bouquet",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"newness",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sweetness",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"madness",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"promise",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"blindfold",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"lip stains",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"darling",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"panther",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"seance",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"solace",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"heartbeat",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sweetness",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"sweater",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"leopard",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"twilight",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pillow",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"ennui",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"rhythm",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"kissing",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"half moon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"night sky",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"shirt tail",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"dial tone",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"ocean",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"murmur",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"someday",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"birthday",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);

          //3 syllables
          word = {writtenWord:"petichor",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"honesty",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"agape",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"friday night",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"someone else",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"other girl",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"love letter",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"misery",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"lemonade",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"surrender",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"confession",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"september",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"botany",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"avenue",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"apology",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"boulevard",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"coffee cup",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"undoing",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"unraveling",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tradgedy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"canoodle",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"caravan",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"alibi",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"molecule",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"succulent",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tentacle",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"fandango",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"3 am",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"2 am",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"10 pm",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"intention",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"spelunking",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"lily pad",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"melody",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pandora",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"carnival",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"acrobat",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"bumble bee",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"honey bee",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"festival",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"sugar cane",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"vanilla",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"boondoggle",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chemical",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"osmosis",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"barista",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"dalliance",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chariot",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chameleon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"rose petal",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"gossamer",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"mosaic",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"high priestess",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chamomile",type:"nounSingular",syllables:3,style:"all"};
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

          word = {writtenWord:"mavourneen",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"nothingness",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"womanhood",type:"nounSingular",syllables:3,style:"all"};
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

          word = {writtenWord:"paloma",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"aroma",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"semaphore",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"illusion",type:"nounSingular",syllables:3,style:"all"};
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

          word = {writtenWord:"marmalade",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"ginger beer",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"libation",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"half and half",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);

          word = {writtenWord:"biscotti",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"agave",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"fahrenheit",type:"nounSingular",syllables:3,style:"all"};
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
          word = {writtenWord:"starlessness",type:"nounSingular",syllables:3,style:"all"};
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
          word = {writtenWord:"opulence",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);


          word = {writtenWord:"athena",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"heartbreaker",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"hologram",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"honeymoon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pantomime",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"monologue",type:"nounSingular",syllables:3,style:"all"};
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

          word = {writtenWord:"opiate",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pulsation",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"milky way",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"chemistry",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"mistletoe",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"one-liner",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);

          word = {writtenWord:"grenadine",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"elan",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"kimono",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"bikini",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"intellect",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"wallflower",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pirouette",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tenderness",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"afternoon",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"demagogue",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"concerto",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pheromone",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"galaxy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pedagogy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"memory",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"pleated skirt",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"cabana",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"rotunda",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"forever",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"sunflower",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"persuasion",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          //4 syllables
          word = {writtenWord:"maple syrup",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"irrelevance",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"anatomy",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"pandora's box",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"senorita",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"divinity",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"euphoria",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"panacea",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"absolution",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"portfolio",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"constellation",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"calligraphy",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"another girl",type:"nounSingular",syllables:4,style:"all"};
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
          word = {writtenWord:"intricacy",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"sanctuary",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"solar system",type:"nounSingular",syllables:4,style:"all"};
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

          word = {writtenWord:"cowabunga",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"barracuda",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"apocalypse",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);

          word = {writtenWord:"interrobang",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"collegiette",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"belladonna",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"luminescence",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"imperfection",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"incandescence",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"effervescence",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"venenoso",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);

          word = {writtenWord:"parabola",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"honeysuckle",type:"nounSingular",syllables:4,style:"all"};
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
          word = {writtenWord:"oblivion",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);

          word = {writtenWord:"xoxo",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"connotation",type:"nounSingular",syllables:4,style:"all"};
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

          word = {writtenWord:"chaturanga",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"confessional",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"anthology",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"magnolia",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"delphinium",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"affinity",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"tiramisu",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"absoluteness",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"apprenticeship",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"exuberance",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"fortuneteller",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          //5 syllables
          word = {writtenWord:"abracadabra",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"brokenheartedness",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"conservatory",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"electrocution",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"electricity",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"metropolitan",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"contemporary",type:"nounSingular",syllables:5,style:"all"};
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
          word = {writtenWord:"anticipation",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"illumination",type:"nounSingular",syllables:5,style:"all"};
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
          word = {writtenWord:"mathematician",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"intoxication",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"anthropology",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"macadamia",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);
          word = {writtenWord:"femininity",type:"nounSingular",syllables:5,style:"all"};
          fiveSyllable[3].push(word);

          //PLURAL NOUNS
          //1 syllables
          word = {writtenWord:"lips",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"swans",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"bays",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"arts",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"gowns",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);

          word = {writtenWord:"rues",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"globes",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"oils",type:"nounPlural",syllables:1,style:"all"};
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
          word = {writtenWord:"qualms",type:"nounPlural",syllables:1,style:"all"};
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
          word = {writtenWord:"hearts",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"seas",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"fates",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"loops",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"lulls",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"moods",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"hems",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);

          word = {writtenWord:"cheeks",type:"nounPlural",syllables:1,style:"all"};
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
          word = {writtenWord:"doves",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"lakes",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"groves",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"foes",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"knees",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"looms",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"stones",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"tongues",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);

          word = {writtenWord:"gowns",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"thoughts",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"rues",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"hoops",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          //2 syllables
          word = {writtenWord:"curves",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"figures",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bedspreads",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"mistakes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"blindfolds",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"heartbeats",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"snuggles",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"kisses",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);

          word = {writtenWord:"muses",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"stockings",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cherries",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"roulettes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"darlings",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"heartaches",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"losses",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"spices",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"doses",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"branches",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"glazes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"blushes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"ballads",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"raindops",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"peaches",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"flores",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"farewells",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"darlings",type:"nounPlural",syllables:2,style:"all"};
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
          word = {writtenWord:"lipsticks",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"mornings",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"evenings",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"lip stains",type:"nounPlural",syllables:2,style:"all"};
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
          word = {writtenWord:"sorrows",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"funnels",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"heartbreaks",type:"nounPlural",syllables:2,style:"all"};
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
          word = {writtenWord:"allures",type:"nounPlural",syllables:2,style:"all"};
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

          word = {writtenWord:"doyennes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"duennas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"serums",type:"nounPlural",syllables:2,style:"all"};
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
          word = {writtenWord:"bouquets",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"lemmas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"quotients",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"toddies",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"champagnes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"palettes",type:"nounPlural",syllables:2,style:"all"};
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

          word = {writtenWord:"lovers",type:"nounPlural",syllables:2,style:"all"};
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

          word = {writtenWord:"chiffons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"honeys",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"dumplings",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tapas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"rhythms",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);

          word = {writtenWord:"dalias",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"blue moons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);

          word = {writtenWord:"tulips",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"half moons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bonfires",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"trollops",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"circes",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"heras",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"phone calls",type:"nounPlural",syllables:2,style:"all"};
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
          word = {writtenWord:"envies",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tonics",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"night skies",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"plutos",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);

          word = {writtenWord:"cupids",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"oceans",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"sweethearts",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"birthdays",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"tulips",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"drive-ins",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"mambas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"islands",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"somedays",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"pleasures",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"darlings",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"sweaters",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"gardens",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"murmurs",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"leopards",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"twilights",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"dial tones",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"shirt tails",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          //3 syllables

          word = {writtenWord:"chariots",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"rose petals",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"seances",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"confessionals",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"afternoons",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pulsations",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pleated skirts",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pirouettes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"lily pads",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"sunflowers",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"memories",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"rotundas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"holograms",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"alibis",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"wallflowers",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"lemonades",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"promises",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"confessions",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"intentions",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"love letters",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);

          word = {writtenWord:"coffee cups",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"lullabies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"septembers",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"intellects",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"abysses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"illusions",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"empresses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"friday nights",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);

          word = {writtenWord:"forevers",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"10 pms",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"3 ams",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"2 ams",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"molecules",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"botanies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"avenues",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"boulevards",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"monologues",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pantomimes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"caravans",type:"nounPlural",syllables:3,style:"all"};
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
          word = {writtenWord:"unravelings",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"undoings",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"baristas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"chameleons",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mosaics",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"tradgedies",type:"nounPlural",syllables:3,style:"all"};
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
          word = {writtenWord:"persuasions",type:"nounPlural",syllables:3,style:"all"};
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

          word = {writtenWord:"gallantries",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);

          word = {writtenWord:"juke boxes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"surrenders",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"miseries",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"kimonos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"cabanas",type:"nounPlural",syllables:3,style:"all"};
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
          word = {writtenWord:"heartbreakers",type:"nounPlural",syllables:3,style:"all"};
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
          word = {writtenWord:"one-liners",type:"nounPlural",syllables:3,style:"all"};
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

          word = {writtenWord:"vinyasas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"asanas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"delilahs",type:"nounPlural",syllables:3,style:"all"};
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
          word = {writtenWord:"galaxies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"horoscopes",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"milky ways",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"chemistries",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"opiates",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pheromones",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          //4 syllables
          word = {writtenWord:"butterscotches",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"solar systems",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"sweater weather",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"honeysuckles",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"divinities",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"tiramisus",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"pedagogies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"congruences",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"lionesses",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"limerences",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"universes",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"apologies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"high priestesses",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"dalliances",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"maple syrups",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"imperfections",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"anatomies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"panaceas",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"intricacies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"oblivions",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"absolutions",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"portfolios",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"constellations",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"calligraphies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"connotations",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"laboratories",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"dichotomies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"fidelities",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"rutabaga",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"sanctuaries",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"ghirardellis",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"persephones",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"cerebellums",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"amygdalas",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"opulences",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"aphrodites",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"bellagios",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"cowabungas",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);


          word = {writtenWord:"interrobangs",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"belladonnas",type:"nounPlural",syllables:4,style:"all"};
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
          word = {writtenWord:"anthologies",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"xoxos",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"banana splits",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"cleopatras",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);

          word = {writtenWord:"magnolias",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"affinities",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"fortunetellers",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          //5 syllables
          word = {writtenWord:"abracadabras",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"metropolitans",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"macadamias",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"electrocutions",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"intoxications",type:"nounPlural",syllables:5,style:"all"};
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
          word = {writtenWord:"anticipations",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"archeologists",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"polynomials",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"irrelevances",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"parallelograms",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"triangulations",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"americanos",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"mathematitians",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"anthropologies",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"conservatories",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);
          word = {writtenWord:"magnetizations",type:"nounPlural",syllables:5,style:"all"};
          fiveSyllable[4].push(word);





          //ADJECTIVES
          //1 syllables
          word = {writtenWord:"dazed",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"lone",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"rare",type:"adjective",syllables:1,style:"all"};
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
          word = {writtenWord:"pink",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"lush",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"lime",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"laced",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"oak",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"bold",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"plump",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);

          word = {writtenWord:"mauve",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"pearl",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"pear",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"clay",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);

          word = {writtenWord:"pearl",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"cruel",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"twill",type:"adjective",syllables:1,style:"all"};
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
          word = {writtenWord:"chrome",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"lost",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"coy",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"shy",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"crisp",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"pure",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"numb",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"bare",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"flushed",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"full",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"fig",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"hushed",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"mint",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);


          //2 syllables
          word = {writtenWord:"chiseled",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"fallen",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"reckless",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"blissful",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"aloof",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"raindrop",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"adrift",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"darkest",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"vexing",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"lemon",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"unmade",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);

          word = {writtenWord:"woozy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"leather",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"pillow",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"rhythmic",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"lover's",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"rosebud",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"peachy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"frothy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"moonlit",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"moonlight",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"vivid",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"gooey",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"stunningS",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"haughty",type:"adjective",syllables:2,style:"all"};
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
          word = {writtenWord:"lissome",type:"adjective",syllables:2,style:"all"};
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
          word = {writtenWord:"jello",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"custard",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);

          word = {writtenWord:"lilac",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"cotton",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"flannel",type:"adjective",syllables:2,style:"all"};
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
          word = {writtenWord:"docile",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"honey",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"amber",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"carrot",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"ginger",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"lavish",type:"adjective",syllables:2,style:"all"};
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
          word = {writtenWord:"fretful",type:"adjective",syllables:2,style:"all"};
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

          word = {writtenWord:"voodoo",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"midnight",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"mango",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"russian",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);

          word = {writtenWord:"neptune",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"tonic",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"gum drop",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"cherry",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);

          word = {writtenWord:"island",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"coastal",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"sunday",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"monday",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"noir",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"golden",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"farewell",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"buttered",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"pompeii",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"mellow",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"callow",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);

          word = {writtenWord:"spellbound",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"cloudless",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"rarest",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"wicked",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"darling",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"giggling",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"dancing",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"slender",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"oval",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);

          word = {writtenWord:"frosted",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"heartbreak",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"trembling",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"blushing",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"fleeting",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"frosty",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);

          word = {writtenWord:"messy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"bloodred",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"dizzy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"lonely",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"sunbleached",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"egg nog",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"dulcet",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"makeshift",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"honeyed",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"spooky",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"waking",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"baby",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"sleepy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);


          word = {writtenWord:"twilight",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"night sky",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"heartless",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"heartbreak",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"aloe",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"mortal",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"evening",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"pompous",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"caffeine",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"morning",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"weeping",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"adept",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"birthday",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          //3 syllables
          word = {writtenWord:"delightful",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"bermuda",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"shea butter",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"sonorous",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"ruby red",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"emerald green",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"devious",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"blindfolded",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"cherry red",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"slow motion",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"dark chocolate",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"white chocolate",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"milk chocolate",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"chocolate milk",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"perplexing",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"nocturnal",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"opulent",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"hypnotized",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"sunflower",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"afternoon",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"hovering",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);

          word = {writtenWord:"forever",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"unabashed",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"electric",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"september",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"ambient",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"heartbroken",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"delicate",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"innocent",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"sugary",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"lingering",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"copper-toned",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);

          word = {writtenWord:"forgotten",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"precocious",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"cabana",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"saturday",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"nonchalant",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"hypnotic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"buttercream",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"imported",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"angel food",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"bacardi",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"grenadine",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"aruba",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"mistletoe",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"caviar",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"licorice",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"exotic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"holistic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"unanswered",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"lavendar",type:"adjective",syllables:3,style:"all"};
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
          word = {writtenWord:"nautical",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"alluring",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"coveted",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"carnival",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"festival",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"eqyptian",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"vinegar",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"camoflauged",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"nuclear",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"volcanic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"atomic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"coquettish",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"curated",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"amorous",type:"adjective",syllables:3,style:"all"};
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

          word = {writtenWord:"quaffable",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"coconut",type:"adjective",syllables:3,style:"all"};
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
          word = {writtenWord:"gun metal",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"underground",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"jungle green",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"marshmallow",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"rosado",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"naranja",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"toledo",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);

          word = {writtenWord:"rocky road",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);

          word = {writtenWord:"calico",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"lemonade",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"indulgent",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"lemon drop",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"milky way",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"poetic",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"ivory",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"intricate",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"ancestral",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"curvaceous",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"murmurous",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"indolent",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"livid",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"heartbreaker",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"lullaby",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"3 am",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"2 am",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"5 am",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"agape",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"pheromone",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"10 pm",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"friday night",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"bottled up",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          //4 syllables
          word = {writtenWord:"delectable",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"strawberry milk",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"molecular",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"honeysuckle",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"mischievious",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"imperial",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);

          word = {writtenWord:"subliminal",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"sangria red",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"momentary",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"lamborghini",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"malevolent",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"benevolent",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"titanium",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"nefarious",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"acrobatic",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"periwinkle",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"efflorescent",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"homogenous",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"ineffable",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"exuberant",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"holographic",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);

          word = {writtenWord:"psychedelic",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"unparalled",type:"adjective",syllables:4,style:"all"};
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
          word = {writtenWord:"unforgiving",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"dandelion",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"mahogany",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"pistachio",type:"adjective",syllables:4,style:"all"};
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
          word = {writtenWord:"temporary",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          //5 syllables
          word = {writtenWord:"maravillosa",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"intellectual",type:"adjective",syllables:5,style:"all"};
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
          word = {writtenWord:"perpetual",type:"adjective",syllables:5,style:"all"};
          fiveSyllable[5].push(word);
          word = {writtenWord:"irresistable",type:"adjective",syllables:5,style:"all"};
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
          word = {writtenWord:"drop",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"gods",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"god",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"spell",type:"wordOfGrouping",syllables:1,style:"all"};
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
          word = {writtenWord:"reign",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"bay",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"scoop",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"touch",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"dose",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"field",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"thoughts",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"spool",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"sea",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"grove",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"plea",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"bath",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"hue",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"splash",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"host",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"cloud",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"lake",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"page",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"bed",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"trace",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          word = {writtenWord:"sip",type:"wordOfGrouping",syllables:1,style:"all"};
          oneSyllable[6].push(word);
          //2 syllables
          word = {writtenWord:"puddle",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"details",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"ocean",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"melange",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"pages",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"bottle",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"bouquet",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"daydreams",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"dollop",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"frenzy",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"orchard",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"cocktail",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"rhythm",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"rhythms",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"coven",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"bedspread",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"valley",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"vineyard",type:"wordOfGrouping",syllables:2,style:"all"};
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
          word = {writtenWord:"milieu",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"bundle",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"priestess",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"teacup",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"pocket",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"temptress",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"soiree",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"teaspoon",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"island",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"language",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"lingo",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"bathtub",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"seance",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          word = {writtenWord:"promise",type:"wordOfGrouping",syllables:2,style:"all"};
          twoSyllable[6].push(word);
          //3 syllables
          word = {writtenWord:"aromas",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"memory",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"lullaby",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"memories",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"unertones",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"chariots",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"aroma",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"motherboard",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"canopy",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"peppering",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"masquerade",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"oasis",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"suggestion",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"gallery",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"explosion",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);
          word = {writtenWord:"coffee cup",type:"wordOfGrouping",syllables:3,style:"all"};
          threeSyllable[6].push(word);

          //4 syllables
          word = {writtenWord:"laboratory",type:"wordOfGrouping",syllables:4,style:"all"};
          fourSyllable[6].push(word);
          word = {writtenWord:"apology",type:"wordOfGrouping",syllables:4,style:"all"};
          fourSyllable[6].push(word);
          word = {writtenWord:"anatomy",type:"wordOfGrouping",syllables:4,style:"all"};
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
          word = {writtenWord:"lays with",type:"nounLinkingSecondSingular",syllables:2,style:"all"};
          twoSyllable[7].push(word);
          word = {writtenWord:"kisses",type:"nounLinkingSecondSingular",syllables:2,style:"all"};
          twoSyllable[7].push(word);
          word = {writtenWord:"attracts",type:"nounLinkingSecondSingular",syllables:2,style:"all"};
          twoSyllable[7].push(word);
          word = {writtenWord:"deserves",type:"nounLinkingSecondSingular",syllables:2,style:"all"};
          twoSyllable[7].push(word);
          word = {writtenWord:"misses",type:"nounLinkingSecondSingular",syllables:2,style:"all"};
          twoSyllable[7].push(word);
          word = {writtenWord:"follows",type:"nounLinkingSecondSingular",syllables:2,style:"all"};
          twoSyllable[7].push(word);
          word = {writtenWord:"betrays",type:"nounLinkingSecondSingular",syllables:2,style:"all"};
          twoSyllable[7].push(word);
          word = {writtenWord:"longs for",type:"nounLinkingSecondSingular",syllables:2,style:"all"};
          twoSyllable[7].push(word);
          //3 syllables
          word = {writtenWord:"crowned with a",type:"nounLinkingSecondSingular",syllables:3,style:"all"};
          threeSyllable[7].push(word);

          word = {writtenWord:"laced with a",type:"nounLinkingSecondSingular",syllables:3,style:"all"};
          threeSyllable[7].push(word);
          word = {writtenWord:"complements",type:"nounLinkingSecondSingular",syllables:3,style:"all"};
          threeSyllable[7].push(word);
          word = {writtenWord:"kneels before",type:"nounLinkingSecondSingular",syllables:3,style:"all"};
          threeSyllable[7].push(word);
          //4 syllables
          word = {writtenWord:"says hello to",type:"nounLinkingSecondSingular",syllables:4,style:"all"};
          fourSyllable[7].push(word);
          word = {writtenWord:"with a hint of",type:"nounLinkingSecondSingular",syllables:4,style:"all"};
          fourSyllable[7].push(word);
          word = {writtenWord:"says goodbye to",type:"nounLinkingSecondSingular",syllables:4,style:"all"};
          fourSyllable[7].push(word);
          word = {writtenWord:"says adios to",type:"nounLinkingSecondSingular",syllables:4,style:"all"};
          fourSyllable[7].push(word);
          //5 syllables
          word = {writtenWord:"in accordance with",type:"nounLinkingSecondSingular",syllables:5,style:"all"};
          fiveSyllable[7].push(word);
          word = {writtenWord:"with undertones of",type:"nounLinkingSecondSingular",syllables:5,style:"all"};
          fiveSyllable[7].push(word);


          //NOUN LINKING SECOND WORD PLURAL(assuming first word is plural)
          //1 syllables
          word = {writtenWord:"and",type:"nounLinkingSecondPlural",syllables:1,style:"all"};
          oneSyllable[8].push(word);
          word = {writtenWord:"touch",type:"nounLinkingSecondPlural",syllables:1,style:"all"};
          oneSyllable[8].push(word);
          word = {writtenWord:"kiss",type:"nounLinkingSecondPlural",syllables:1,style:"all"};
          oneSyllable[8].push(word);
          word = {writtenWord:"miss",type:"nounLinkingSecondPlural",syllables:1,style:"all"};
          oneSyllable[8].push(word);
          //2 syllables
          word = {writtenWord:"crowned with",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);

          word = {writtenWord:"snuggle",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"follow",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"betray",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"deserve",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
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
          word = {writtenWord:"long for",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          word = {writtenWord:"attract",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);
          //3 syllables
          word = {writtenWord:"complement",type:"nounLinkingSecondPlural",syllables:3,style:"all"};
          threeSyllable[8].push(word);
          word = {writtenWord:"unbutton",type:"nounLinkingSecondPlural",syllables:3,style:"all"};
          threeSyllable[8].push(word);
          word = {writtenWord:"kneel before",type:"nounLinkingSecondPlural",syllables:3,style:"all"};
          threeSyllable[8].push(word);
          word = {writtenWord:"make love to",type:"nounLinkingSecondPlural",syllables:3,style:"all"};
          threeSyllable[8].push(word);
          word = {writtenWord:"with a hint of",type:"nounLinkingSecondPlural",syllables:3,style:"all"};
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
          word = {writtenWord:"with undertones of",type:"nounLinkingSecondPlural",syllables:5,style:"all"};
          fiveSyllable[8].push(word);


          //adult
          word = {writtenWord:"lusts",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"bathes",type:"verbSingular",syllables:1,style:"all"};
          oneSyllable[0].push(word);
          word = {writtenWord:"carouses",type:"verbSingular",syllables:3,style:"all"};
          threeSyllable[0].push(word);
          word = {writtenWord:"lust",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"bathe",type:"verbPlural",syllables:1,style:"all"};
          oneSyllable[1].push(word);
          word = {writtenWord:"carouse",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"make love",type:"verbPlural",syllables:2,style:"all"};
          twoSyllable[1].push(word);
          word = {writtenWord:"lustfully",type:"adverb",syllables:3,style:"all"};
          threeSyllable[2].push(word);
          word = {writtenWord:"seductively",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"between the sheets",type:"adverb",syllables:4,style:"all"};
          fourSyllable[2].push(word);
          word = {writtenWord:"under the covers",type:"adverb",syllables:5,style:"all"};
          fiveSyllable[2].push(word);
          word = {writtenWord:"sex",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"lust",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"hell",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"hip",type:"nounSingular",syllables:1,style:"all"};
          oneSyllable[3].push(word);
          word = {writtenWord:"wetness",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"temptress",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"geisha",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"cocktail",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"liqueor",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"nipple",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bourbon",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bed post",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"nepal",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"vodka",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"chakra",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"pale ale",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"trollop",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mistress",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"whiskey",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"carouse",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"virgin",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"affair",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bottom",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"grey goose",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"bedroom",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mixed drink",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"wet dream",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"make out",type:"nounSingular",syllables:2,style:"all"};
          twoSyllable[3].push(word);
          word = {writtenWord:"mint julep",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"kahlua",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"intimacy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"aquavit",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"lingerie",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"tequila",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"prosecco",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"ecstacy",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"butterbeer",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"jezebel",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"sultana",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"mercenary",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"nakedness",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"skinny dip",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"push up bra",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"peyote",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"bacardi",type:"nounSingular",syllables:3,style:"all"};
          threeSyllable[3].push(word);
          word = {writtenWord:"fellagio",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"pergatory",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"leinenkugel",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"kama sutra",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"patron xo",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"calendar girl",type:"nounSingular",syllables:4,style:"all"};
          fourSyllable[3].push(word);
          word = {writtenWord:"moans",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"hips",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"thighs",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"babes",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"legs",type:"nounPlural",syllables:1,style:"all"};
          oneSyllable[4].push(word);
          word = {writtenWord:"virgins",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"mixed drinks",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bottoms",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"panties",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"wet dreams",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"geishas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"mai tais",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cocktails",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"liqueors",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"nipples",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bourbons",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bed posts",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bombshells",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"vodkas",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"chakras",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"pale ales",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"affairs",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"bedrooms",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cartels",type:"nounPlural",syllables:2,style:"all"};
          twoSyllable[4].push(word);
          word = {writtenWord:"cojones",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mistresses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"ecstacies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"intimacies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"temptresses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mimosas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"sangrias",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"mint juleps",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"kahluas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"aquavits",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"charlatans",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"eulogies",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"skinny dips",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"bikinis",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"tequilas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"proseccos",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pillow talk",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"femme fatales",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"butterbeers",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"jezebels",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"pushup bras",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"sultanas",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"carouses",type:"nounPlural",syllables:3,style:"all"};
          threeSyllable[4].push(word);
          word = {writtenWord:"leinenkugels",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"kama sutras",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"mercenaries",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"calendar girls",type:"nounPlural",syllables:4,style:"all"};
          fourSyllable[4].push(word);
          word = {writtenWord:"rum",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"wine",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"wet",type:"adjective",syllables:1,style:"all"};
          oneSyllable[5].push(word);
          word = {writtenWord:"undressed",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"fucked up",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"bourbon",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"vodka",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"merlot",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"pale ale",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"naughty",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"leggy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"persian",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"grey goose",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"whiskey",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"bedroom",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"boozy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"virgin",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"wanton",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"steamy",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"drunken",type:"adjective",syllables:2,style:"all"};
          twoSyllable[5].push(word);
          word = {writtenWord:"unbuttoned",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"unholy",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"devilish",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"tequila",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"sangria",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"butterbeer",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"seductive",type:"adjective",syllables:3,style:"all"};
          threeSyllable[5].push(word);
          word = {writtenWord:"fallopian",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"peruvian",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"kamikaze",type:"adjective",syllables:4,style:"all"};
          fourSyllable[5].push(word);
          word = {writtenWord:"undresses",type:"nounLinkingSecondSingular",syllables:3,style:"all"};
          threeSyllable[7].push(word);
          word = {writtenWord:"unbuttons",type:"nounLinkingSecondSingular",syllables:3,style:"all"};
          threeSyllable[7].push(word);
          word = {writtenWord:"undress",type:"nounLinkingSecondPlural",syllables:2,style:"all"};
          twoSyllable[8].push(word);


  //let indexToGet = Utilities.getRandomInteger(0, fiveSyllable[5].length - 1);
  //document.getElementById("poem3").innerHTML = (typeof fiveSyllable[5][indexToGet]);
  }

  function getLine(numberOfSyllables,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable, wordsUsed) {
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

                    while (wordsUsed.includes(wordToAdd1))
                    {
                      wordToAdd1 = getSingularVerb(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    }
                    wordsUsed.push(wordToAdd1)

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
                    while (wordsUsed.includes(wordToAdd2))
                    {
                      wordToAdd2 = getPluralVerb(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    }
                    wordsUsed.push(wordToAdd2)
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
                    while (wordsUsed.includes(wordToAdd3))
                    {
                      wordToAdd3 = getSingularNoun(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    }
                    wordsUsed.push(wordToAdd3)
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
                    while (wordsUsed.includes(wordToAdd4))
                    {
                      wordToAdd4 = getSingularNoun(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    }
                    wordsUsed.push(wordToAdd4)
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
                    while (wordsUsed.includes(wordToAdd5))
                    {
                      wordToAdd5 = getPluralNoun(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    }
                    wordsUsed.push(wordToAdd5)
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
                    while (wordsUsed.includes(wordToAdd6))
                    {
                      wordToAdd6 = getAdjective(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    }
                    wordsUsed.push(wordToAdd6)
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
                    while (wordsUsed.includes(wordToAdd7))
                    {
                      wordToAdd7 = getAdjective(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    }
                    wordsUsed.push(wordToAdd7)
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
                    while (wordsUsed.includes(wordToAdd8))
                    {
                      wordToAdd8 = getAdverb(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    }
                    wordsUsed.push(wordToAdd8)
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
                    while (wordsUsed.includes(wordToAdd9))
                    {
                      wordToAdd9 = getWordOfGrouping(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                    }
                    wordsUsed.push(wordToAdd9)
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
                   while (wordsUsed.includes(wordToAdd10))
                   {
                     wordToAdd10 = getWordOfGrouping(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                   }
                   wordsUsed.push(wordToAdd10)
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
                   while (wordsUsed.includes(wordToAdd12))
                   {
                     wordToAdd12 = getNounLinkingSecondSingular(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                   }
                   wordsUsed.push(wordToAdd12)
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
                   while (wordsUsed.includes(wordToAdd13))
                   {
                     wordToAdd13 = getNounLinkingSecondPlural(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                   }
                   wordsUsed.push(wordToAdd13)
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
                            while (wordsUsed.includes(wordToAdd11))
                            {
                              wordToAdd11 = getSingularVerb(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            }
                            wordsUsed.push(wordToAdd11)
                            break;
                        case 1:
                            //wordToAdd11 = wordBank.getPluralVerb(syllables11).writtenWord;
                            wordToAdd11 = getPluralVerb(syllables11,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            while (wordsUsed.includes(wordToAdd11))
                            {
                              wordToAdd11 = getPluralVerb(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            }
                            wordsUsed.push(wordToAdd11)
                            break;
                        case 2:
                          //  wordToAdd11 = wordBank.getSingularNoun(syllables11).writtenWord;
                            wordToAdd11 = getSingularNoun(syllables11,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            while (wordsUsed.includes(wordToAdd11))
                            {
                              wordToAdd11 = getSingularNoun(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            }
                            wordsUsed.push(wordToAdd11)
                            break;
                        case 3:
                            //wordToAdd11 = wordBank.getPluralNoun(syllables11).writtenWord;
                            wordToAdd11 = getPluralNoun(syllables11,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            while (wordsUsed.includes(wordToAdd11))
                            {
                              wordToAdd11 = getPluralNoun(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            }
                            wordsUsed.push(wordToAdd11)
                            break;
                        case 4:
                            //wordToAdd11 = wordBank.getAdjective(syllables11).writtenWord;
                            wordToAdd11 = getAdjective(syllables11,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            while (wordsUsed.includes(wordToAdd11))
                            {
                              wordToAdd11 = getAdjective(syllables1,oneSyllable, twoSyllable,threeSyllable, fourSyllable, fiveSyllable).writtenWord;
                            }
                            wordsUsed.push(wordToAdd11)
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
            ["wordOfGrouping,of,nounPlural", ["3,1","1,3","2,2"]],
            ["wordOfGrouping,of,nounSingular", ["3,1","1,3","2,2"]],
            ["wordOfGroupingAOrAn,of,nounPlural", ["2,1", "1,2"]],
            ["adjective,nounSingular", ["1,4", "4,1", "2,3", "3,2"]],
            //["any,any", ["1,4", "4,1", "2,3", "3,2"]],
            ["adjective,nounPlural", ["1,4", "4,1", "2,3", "3,2"]],
            ["nounPlural,verbPlural", ["1,4", "4,1", "2,3", "3,2"]],
            ["verbSingular,adverb", ["1,4", "4,1", "2,3", "3,2"]],
            ["verbPlural,adverb", ["1,4", "4,1", "2,3", "3,2"]],
            ["adjective,nounSingular,verbSingular", ["1,2,2", "2,2,1", "1,1,3", "2,1,2", "1,3,1", "3,1,1"]],
            ["adjective,nounPlural,verbPlural", ["1,2,2", "2,2,1", "1,1,3", "2,1,2", "1,3,1", "3,1,1"]],
            //["any,any,any", ["1,2,2", "2,2,1", "1,1,3", "2,1,2", "1,3,1", "3,1,1"]],
            ["nounPlural,nounPlural,and,nounPlural", ["1,2,2", "2,1,1", "1,1,2"]],
            ["nounSingular,nounSingular,and,nounSingular", ["1,2,2", "2,1,1", "1,1,2"]],
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
            ["nounSingular,nounLinkingSecondSingular,nounSingular", ["1,1,5", "1,5,1", "5,1,1", "1,3,3", "3,1,3", "3,3,1", "1,2,4", "1,4,2", "4,2,1", "4,1,2", "2,2,3", "2,3,2", "3,2,2"]],
            //["any,any,any", ["1,1,5", "1,5,1", "5,1,1", "1,3,3", "3,1,3", "3,3,1", "1,2,4", "1,4,2", "4,2,1", "4,1,2", "2,2,3", "2,3,2", "3,2,2"]],
            ["nounSingular,nounSingular,and,nounSingular",["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]],
            ["nounPlural,nounPlural,and,nounPlural", ["1,1,4", "1,4,1", "4,1,1", "2,2,2", "3,2,1", "2,3,1", "2,1,3", "1,2,3", "1,3,2"]]

      ];
      return templatesForSevenSyllables;
    }


    function getAllTemplates() {
      let templates = [
            ["nounSingularAOrAn"],
            ["the,nounSingular"],
            ["wordOfGrouping,of,nounPlural"],
            ["wordOfGrouping,of,nounSingular"],
            ["wordOfGroupingAOrAn,of,nounPlural"],
            ["adjective,nounSingular"],
            //["any,any", ["1,4", "4,1", "2,3", "3,2"]],
            ["adjective,nounPlural"],
            ["nounPlural,verbPlural"],
            ["verbSingular,adverb"],
            ["verbPlural,adverb"],
            ["adjective,nounSingular,verbSingular"],
            ["adjective,nounPlural,verbPlural"],
            //["any,any,any", ["1,2,2", "2,2,1", "1,1,3", "2,1,2", "1,3,1", "3,1,1"]],
            ["nounPlural,nounPlural,and,nounPlural"],
            ["nounSingular,nounSingular,and,nounSingular"],
            ["any"],
            ["nounPlural,nounLinkingSecondPlural,nounPlural"],
            ["some,nounPlural"],
            ["nounSingular,nounLinkingSecondSingular,nounSingular"]
            ["adjective,nounSingular"],
            ["his,nounSingular,verbSingular"],
            ["her,nounSingular,verbSingular"],
            ["their,nounSingular,verbSingular"],
            ["our,nounSingular,verbSingular"],
            ["my,nounSingular,verbSingular"],
            ["your,nounSingular,verbSingular"],
            ["its,nounSingular,verbSingular"],
            ["his,nounPlural,verbPlural"],
            ["her,nounPlural,verbPlural"],
            ["their,nounPlural,verbPlural"],
            ["our,nounPlural,verbPlural"],
            ["my,nounPlural,verbPlural"],
            ["your,nounPlural,verbPlural"],
            ["its,nounPlural,verbPlural"],
            ["his,adjective,nounPlural"],
            ["her,adjective,nounPlural"],
            ["their,adjective,nounPlural"],
            ["our,adjective,nounPlural"],
            ["my,adjective,nounPlural"],
            ["your,adjective,nounPlural"],
            ["its,adjective,nounPlural"],
            ["his,adjective,nounSingular"],
            ["her,adjective,nounSingular"],
            ["their,adjective,nounSingular"],
            ["our,adjective,nounSingular"],
            ["my,adjective,nounSingular"],
            ["your,adjective,nounSingular"],
            ["its,adjective,nounSingular"],
            ["his,nounSingular,verbSingular,adverb"],
            ["her,nounSingular,verbSingular,adverb"],
            ["their,nounSingular,verbSingular,adverb"],
            ["our,nounSingular,verbSingular,adverb"],
            ["my,nounSingular,verbSingular,adverb"],
            ["your,nounSingular,verbSingular,adverb"],
            ["its,nounSingular,verbSingular,adverb"],
            ["his,nounPlural,verbPlural,adverb"],
            ["her,nounPlural,verbPlural,adverb"],
            ["their,nounPlural,verbPlural,adverb"],
            ["our,nounPlural,verbPlural,adverb"],
            ["my,nounPlural,verbPlural,adverb"],
            ["your,nounPlural,verbPlural,adverb"],
            ["its,nounPlural,verbPlural,adverb"],
            ["the,nounPlural,verbPlural,adverb"],
            ["the,nounSingular,verbSingular,adverb"],
            ["nounSingularAOrAn,verbSingular,adverb"],
            ["the,adjective,nounPlural,verbPlural"],
            ["the,adjective,nounSingular,verbSingular"],
            ["adjectiveAOrAn,nounSingular,verbSingular"],
            ["adjective,nounSingular,verbSingular"],
            ["adjective,nounPlural,verbPlural"],
            ["nounPlural,verbPlural,adverb"],
            ["nounSingular,verbSingular,adverb"],
            ["the,nounSingular,verbSingular,adverb"],
            ["nounSingularAOrAn,verbSingular,adverb"],
            ["wordOfGroupingAOrAn,of,nounPlural"],
            ["wordOfGroupingAOrAn,of,nounPlural,verbPlural"],
            ["nounPlural,nounLinkingSecondPlural,nounPlural"],
            ["nounSingular,nounLinkingSecondSingular,nounSingular"],
            //["any,any,any", ["1,1,5", "1,5,1", "5,1,1", "1,3,3", "3,1,3", "3,3,1", "1,2,4", "1,4,2", "4,2,1", "4,1,2", "2,2,3", "2,3,2", "3,2,2"]],
            ["nounSingular,nounSingular,and,nounSingular"],
            ["nounPlural,nounPlural,and,nounPlural"]
      ];
      return templates;
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
                let indexToGet0 = Utilities.getRandomInteger(0, twoSyllable[8].length - 1);
                //console.log(typeof twoSyllable[8][indexToGet]);
                return twoSyllable[8][indexToGet0]; //returns a word object
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
