/**
 * write your code in this file
 */

function selectElementsStartingWithA(words: string[]): string[] {
    let regex = new RegExp("^[a|A].*$");
    let resultat: Array<string> = new Array<string>();
    for (let mot in words) {
        if (words[mot].match(regex))
            resultat.push(words[mot])
    }
    return resultat;
}



function selectElementsStartingWithVowel(words: string[]): string[] {
    let regex = new RegExp("^[aeiouy].*$");
    let resultat: Array<string> = new Array<string>();
    for (let mot in words) {
        if (words[mot].match(regex))
            resultat.push(words[mot])
    }
    return resultat;
}



function removeNullElements(words: any[]): any[] {
    let resultat: Array<any> = new Array<any>();
    for (let i in words) {
        if (words[i] !== null) {
            resultat.push(words[i])
        }
    }
    return resultat;
}

function removeNullAndFalseElements(words: any[]): any[] {
    let resultat: Array<any> = new Array<any>();
    for (let i in words) {
        if (words[i] !== null && words[i] !== false) {
            resultat.push(words[i])
        }
    }
    return resultat;
}


function reverseWordsInArray(words: string[]): string[] {
    let resultat: Array<string> = new Array<string>();
    for (let i in words) {
        resultat.push(words[i].split("").reverse().join(""))
    }
    return resultat;
}



function everyPossiblePair(words: string[]): string[][] {
    let resultat = [];
    let tableau = words.slice().reverse();
    for (let i of words) {
        tableau.pop();
        for (var j of tableau) {
            resultat.push([i, j].sort());
        }
    }
    return resultat.sort();
}

function allElementsExceptFirstThree(numberList: number[]): number[] {
    let resultat: Array<number> = new Array<number>();
    for (let i = 3; i < numberList.length; i++) {
        resultat.push(numberList[i])
    }
    return resultat;
}

function addElementToBeginning(numberList: number[], element: number): number[] {
    let resultat: number[] = [element]
    for (let i in numberList)
        resultat.push(numberList[i])
    return resultat;
}

function sortByLastLetter(words: string[]): string[] {
    let resultatProvisoire: Array<string> = new Array<string>();
    let resultat: Array<string> = new Array<string>();
    for (let i in words) {
        resultatProvisoire.push(words[i].split("").reverse().join(""))
    }
    resultatProvisoire.sort()

    for (let i in resultatProvisoire) {
        resultat.push(resultatProvisoire[i].split("").reverse().join(""))
    }

    return resultat;
}


function getFirstHalf(word: string): string {
    let x: number = Math.round(word.length / 2)
    let resultat: string = word.slice(0, x)

    return resultat;
}

function makeNegative(num: number): number {
    let resultat: number = num;
    if (num > 0)
        resultat = num * -1
    return resultat;
}

function numberOfPalindromes(words: string[]): number {
    let resultat: number = 0;
    for (let i in words)
        if (words[i] === words[i].split("").reverse().join(""))
            resultat++
    return resultat;
}

function shortestWord(words: string[]): string {
    let tableau: Array<string> = words;
    let min = Math.min(...tableau.map(({ length }) => length));
    let resultat: string = "";
    for (let i in words) {
        if (words[i].length === min)
            resultat = words[i]
    }
    return resultat;
}

function longestWord(words: string[]): string {
    let tableau: Array<string> = words;
    let max = Math.max(...tableau.map(({ length }) => length));
    let resultat: string = "";
    for (let i in words) {
        if (words[i].length === max)
            resultat = words[i]
    }
    return resultat;
}

function sumNumbers(numberList: number[]): number {
    let resultat = 0;
    for (let i in numberList) {
        resultat += numberList[i]
    }
    return resultat;
}



function repeatElements(words: string[]): string[] {
    let resultat: Array<string> = new Array<string>();
    for (let i in words) {
        resultat.push(words[i])
    }
    for (let i in words) {
        resultat.push(words[i])
    }
    return resultat;
}


function stringToNumber(numeral: string): number {
    let resultat: number = parseInt(numeral)
    return resultat;
}

function calculateAverage(numberList: number[]): number {
    let resultat = 0;
    for (let i in numberList) {
        resultat += numberList[i]
    }
    resultat = resultat / numberList.length
    return resultat;
}


function getElementsUntilGreaterThanFive(numberList: number[]): number[] {
    let resultat = new Array

    for (let i in numberList) {
        if (numberList[i] < 6)
            resultat.push(numberList[i])
        else
            break;

    }

    return resultat;
}



function convertArrayToObject(words: string[]): any {


 return [""];
}


function getAllLetters(words: string[]): string[] {
    let resultatProvisoire = new Array<string>()
    let x: string = words.join("")
    resultatProvisoire = x.split("")
    resultatProvisoire.sort()

    let resultat = new Array<string>()

    for (let i = 0; i < resultatProvisoire.length; i++) {
        if (i === 0 || resultatProvisoire[i] !== resultatProvisoire[i - 1]) {
            resultat.push(resultatProvisoire[i])
        }

    }


    return resultat;
}

function swapKeysAndValues(object: any): any {

   let resultat: any = {};
  for (let key in object) {
      resultat[object[key]] = key;
      console.log(resultat[key])
  }
   console.log(resultat)
   return resultat;

}

function sumKeysAndValues(object: any): number {
    let resultat: number = 0
    for (let key in object)
        resultat = Number(key) + Number(object[key])
    console.log(5+1)
    return resultat
}

function removeCapitals(word: string): string {
    let regex = new RegExp("[A-Z](.*)[A-Z](.*)");
    let resultat: string = word.replace(regex, "$1$2")

    return resultat;
}

function roundUp(num: number): number {
    let resultat: number = Math.ceil(num)
    return resultat;
}

function formatDateNicely(date: Date): string {

    let jour: string = date.getDate().toString()
    let mois: string = date.getMonth().toString()
    let année: string = date.getFullYear().toString()

    if (jour.length < 2) jour = '0' + jour;
    if (mois.length < 2) mois = '0' + mois;

    let resultat: string = jour + "/" + mois + "/" + année

    return resultat;
}

function getDomainName(domain: string): string {
    let regex = new RegExp("^.*@(.*)\\..+$");
    let resultat: string = domain.replace(regex, "$1")
    return resultat;
}

function titleize(phrase: string): string {
    let tableau = phrase.split(" ")
    let tableau2 = new Array()

    for (let i = 0; i < tableau.length; i++) {

        if (i === 0 || tableau[i].length > 3 || tableau[i - 1].charAt((tableau[i - 1].length) - 1) === ".")
            tableau2.push(tableau[i].charAt(0).toUpperCase() + tableau[i].slice(1))
        else
            tableau2.push(tableau[i])

    }

    let resultat: string = tableau2.join(' ')


    return resultat;
}

function checkForSpecialCharacters(word: string): boolean {
    let resultat: boolean = false
    let regex = new RegExp("^.*\\W.*")
    if (word.match(regex))
        resultat = true

    return resultat;
}

function squareRoot(num: number): number {
    let resultat: number = Math.sqrt(num)

    return resultat;
}

function factorial(num: number): number {
    let resultat: number = 0
    for (resultat = 1; num > 0; num--) {
        resultat *= num;
    }

    return resultat;

}



function findAnagrams(word: string): string[] {
    function permute(array: any): any {
        if (array.length === 1) return [array];
        let fullPermutations = [];
        for (let i in array) {
            let subset = array.slice(0);
            subset.splice(i, 1);
            for (let permutation of permute(subset)) {
                permutation.unshift(array[i]);
                fullPermutations.push(permutation);
            }
        }
        return fullPermutations;
    }
    function joinLetters(array: any) {
        return array.join("");
    }
    return permute(word.split("")).map(joinLetters);
};



function convertToCelsius(temperature: number): number {
    let resultat: number = Math.round((temperature - 32) / 1.8)

    return resultat;
}

function letterPosition(letters: string[]): number[] {
    let resultat = new Array

    for (let i in letters) {
        if (letters[i].charCodeAt(0) > 90)
            resultat.push(letters[i].charCodeAt(0) - 96)
        else
            resultat.push(letters[i].charCodeAt(0) - 64)

    }


    return resultat;
}
