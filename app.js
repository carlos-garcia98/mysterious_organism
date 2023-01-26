// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
// Step 1: Create a factory function pAequorFactory()
  const pAequorFactory = (num, dnaBase) => {
    return {
      specimenNum: num,
      dna: dnaBase,
      mutate() {
        let compareFirstDna = [];
        this.dna.forEach((base) => {
          compareFirstDna.push(base);
        });
  
        this.dna[0] = returnRandBase();
  
        if (this.dna[0] === compareFirstDna[0]) {
          this.dna[0] = returnRandBase();
        }
  
        return this.dna;
      },

    // Step 2: Create a method that compares the DNA sequences of two different pAequor objects
      compareDNA(pAequor) {
        let i = 0;
        let counter = 0;
  
        while (i < 15) {
          if (this.dna[i] === pAequor.dna[i]) {
            counter++;
          }
          i++;
        }
  
        let percentage = Math.floor((counter / 15) * 100);
  
        console.log(
          `Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentage}% DNA in common`
        );
      },

    // Step 3: Create a method that will return the pAequor’s likelihood of survival
      willLikelySurvive() {
        let cBaseCounter = 0;
        let gBaseCounter = 0;
  
        this.dna.forEach(base => {
          if (base == 'C') {
            cBaseCounter++;
          } else if(base == 'G') {
            gBaseCounter++;
          }
        });
  
        let cPercentage = Math.floor((cBaseCounter / 15) * 100);
        let gPercentage = Math.floor((gBaseCounter / 15) * 100);
  
        return cPercentage >= 60 || gPercentage >= 60;
      }
    };
  };
  
// Step 4: Create a function that generates 30 instances of pAequor that can survive in their natural environment
  const superPAequor = () => {
    const pAequorSurvivors = [];
    let counter = 0;
  
    while (pAequorSurvivors.length < 30) {
      const pAequor = pAequorFactory(counter, mockUpStrand());
      if (pAequor.willLikelySurvive()) {
        pAequorSurvivors.push({
          specimen: pAequor.specimenNum,
          dna: pAequor.dna
          });
      }
      counter++; 
    }
  
    return pAequorSurvivors;
  };
  
  console.log(superPAequor());  