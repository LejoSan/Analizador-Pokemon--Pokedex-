import { PokemonI } from "../interfaces/PokemonInterfaces";
const db = require('../db/Pokemons.json');

module PokemonService { 
    export function getAll(): Array<PokemonI> {
        const Pokemons: Array<PokemonI> = db;
        return Pokemons
    }
    export function get(id: number): PokemonI {
        const Pokemons: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = Pokemons.filter(e => e.id === id);
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        }
        return pokemon[0];
    }
    export function getByName(name: string): Array<PokemonI> {
        const Pokemons: Array<PokemonI> = db;
        const matches: Array<PokemonI> = Pokemons.filter(function(el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el pokemon"
        }
        return matches;
    }
    
    export function getByType(type: string): Array<PokemonI> {
        const Pokemons: Array<PokemonI> = db;
        let matches: Array<PokemonI> = [];
        Pokemons.forEach(pokemon => {
            const found = pokemon.type.filter(e => e.name === type);
            if (found.length>0) {
                matches.push(pokemon);
            }
        })
         
        if (matches.length < 1) {
            throw "No se encontró el tipo"
        }
        return matches;
    }

    export function  getStrongAgainst(name: string): Array<PokemonI> {
        const Pokemons: Array<PokemonI> = db;
        let Strong: Array<PokemonI> = [];
        let Weak: Array<PokemonI> = [];
        let pokemon: Array<PokemonI> = Pokemons.filter(function (el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        } else {
            pokemon = pokemon.filter(function(el) {
                const nombre = el.name;                
                const status = el.type.filter(e =>{
                    let tipo = e.name;         
                    Pokemons.forEach(pokemon => {
                        const comparation = pokemon.type.filter(z =>{
                            for (let i = 0; i < z.weakAgainst.length; i++) {
                                const element = z.weakAgainst[i];
                                if (element.toString() == tipo){
                                    Strong.push(pokemon);
                                }
                            }
                            for (let j = 0; j < z.strongAgainst.length; j++) {
                                const sujeto = z.strongAgainst[j];
                                console.log("Compare");

                                console.log(sujeto);

                                console.log(tipo);

                                if ( sujeto.toString() == tipo){
                                    Weak.push(pokemon);
                                }
                            }
                        })
                    })
                    console.log(Strong);

                    console.log(Weak);

                    Strong.filter(name =>{

                       const N_Fuerte  = name.name;
                       Weak.filter(name =>{
                           
                        const N_Debil = name.name;
                        throw "Nombre: " + nombre + " Tipo: "+ e.name + " es fuerte contra: " + N_Fuerte + " pero es débil contra: " + N_Debil;
                       }) 
                    })
                }) 
            });
            console.log(Strong);

            console.log(Weak);

            return pokemon;
        }
    }
    
    export function getpokemon(name: string): Array<PokemonI> {
        
        var splitted = name.split(",");

        throw "Nombre: "+splitted[0]+ " tipo: " +splitted[1]+ " es fuerte contra " +splitted[2]+ " es debil contra " +splitted[3]+ " img " + splitted[4];
    }
}



export default PokemonService;