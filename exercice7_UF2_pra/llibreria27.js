export class Peli {
  constructor({ id, titol, director, any, pais, generes, qualificacions }) {
    //totes les validacions
    //this.titol = validartitol(titol) ? titol : undefined;
    this.id = this.validaIMDB(id) ? id : undefined;
    this.titol = this.validaTitol(titol) ? titol : undefined;
    this.director = this.validadirector(director) ? director : undefined;
    this.any = this.validaany(any) ? any : undefined;
    this.pais = this.validarpais(pais) ? pais : undefined;
    this.generes = this.validageneres(generes) ? generes : undefined;
    this.qualificacions = this.validaqualificacions(qualificacions) ? qualificacions:undefined;
  }
  validaIMDB(id) {
    let correcte = true;
    if (this.validarString("id", id)) {
      if (!/^[a-z]{2}[0-9]{7}$/.test(id)) {
        console.error(
          `L'id ${id} no té format correcte. Format valíd [aa0000000]`
        );
        correcte = false;
      } 
    }else{
      correcte = false;
    }
    return correcte;
  }
  validaTitol(titol) {
    let correcte = true;
    if (!this.validarString("titol", titol)) {
      correcte = false;
    } else if (!this.validarLongitud("titol", titol, 100)) {
      correcte = false;
    }
    return correcte;
  }
  validadirector(director) {
    let correcte = true;
    if (!this.validarString("director", director)) {
      correcte = false;
    } else if (!this.validarLongitud("director", director, 50)) {
      correcte = false;
    }
    return correcte;
  }

  validaany(any) {
    let correcte = true;
    if (!this.validarNumero("any",any)) {
      correcte = false;
    } else if (!(/^[0-9]{4}$/.test(any))) {
      console.error(`l'any ${any} no té format de l'any ex (0000)` );
      correcte = false;
    }
    return correcte;
  }
  validarpais(pais) {
    let correcte = true;
    if (!this.validarArray("pais", pais)) {
      correcte = false;
    } else {
      correcte = true;
    }
    return correcte;
  }
  validageneres(generes) {
    let correcte = true;
    if (!this.validarArray("generes",generes)) {
      correcte = false;
    } else {
      const gacceptats = Peli.generesAcceptats();
      generes.forEach((element) => {
        if (!gacceptats.includes(element)) {
          console.error(
            `l'element ${element} no ésta en la llistat dels generes acceptats`
          );
          correcte = false;
          
        }
      });
    }
    return correcte;
  }
  validaqualificacions(qualificacions){
    let correcte = true;
    if(!this.validarNumero("qualificacions",qualificacions)){
      correcte = false;
    }else if(qualificacions < 0 || qualificacions >10){
      console.error("les qualificacions haurien d'estar entre 0-10");
      correcte = false;
    }
    return correcte;
  }

  static generesAcceptats() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  fitxatecnica(){
    console.log("el titol de la pélicula és "+this.titol);
    console.log("el director de la pélicula és "+this.director);
    console.log("el id de la pélicula és "+this.id);
    console.log("les qualificacions de la pélicula és "+this.qualificacions);

  
    console.log("el any de publicacio de la pélicula és "+this.any);
    console.log("els paisos de la pélicula és "+this.pais);
    console.log("els generes de la pélicula és "+this.generes);
  }

  validarNumero(propietat,valor) {
    let correcte = true;
    if (valor === undefined) {
      console.error(`la propietat ${propietat} no esta definida`);
      correcte = false;
    } else if (typeof valor !== "number") {
      console.error(`la propietat ${propietat} no és un numero`);
      correcte = false;
    } 
    return correcte;
  }
  validarString(propietat, valor) {
    let correcte = true;
    if (!valor) {
      console.error(`la propietat ${propietat} no té valor`);
      correcte = false;
    } else if (typeof valor !== "string") {
      console.error(`la propietat ${propietat} no és una cadena`);
      correcte = false;
    }
    return correcte;
  }
  validarLongitud(propietat, valor, longitud) {
    let correcte = true;
    if (this.validarString(propietat, valor)) {
      if (valor.length > longitud) {
        console.warn(
          `la longitud del valor de ${propietat} no pot ser superior a ${longitud}`
        );
        correcte = false;
      }
    }
    return correcte;
  }

  validarArray(propietat, valorarray) {
    let correcte = true;
    if (this.validarString(propietat, propietat)) {
      if (valorarray === undefined) {
        //validar el array
        console.log("array no definit");
        correcte = false;
      } else if (!(valorarray instanceof Array)) {
        console.error(`el valor ${valorarray} no és un array`);
        correcte = false;
      } else if (valorarray.length === 0) {
        console.log(`l'array és buit`);
        correcte = false;
      } else {
        for (let ele of valorarray) {
          if (typeof ele !== "string") {
            console.log(`l'element ${ele} no és una cadena`);
            correcte = false;
            break;
          } else if (ele.length === 0) {
            console.log(`l'element ${ele} és una buit`);
            correcte = false;
            break;
          }
        }
      }
      return correcte;
    } else {
      //propietat no és correcte
      console.log("la propietat no és correcta!");
    }
  }
}
