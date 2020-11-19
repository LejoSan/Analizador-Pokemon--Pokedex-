* Servicio para consultar por nombre (puedo no ponerlo completo y puedo no usar tilde)
* Servicio para consultar por tipo
* Servicio para consultar si un digimón/pokemón es fuerte o débil contra otro
* Servicio para crear un nuevo digimon/pokemón (que estará creado en memoria, no debe persistir aún)

//------------------------------------------------------------------------------------------------------

1 . Para hacer uso de la app install npm
2 . luego de correr el programa con la ruta http://localhost:3000 utiliza la siguientes rutas agregandolas despues del ¨3000¨ :
    
    -/pokemons ---> muestra la base de datos de los pokemones 
    -/pokemons/:id  ---> muestra la base de datos de los pokemones segun su ID (filtra)
    -/pokemons/name/:name  ---> muestra la base de datos de los pokemones  segun su nombre (filtra)
    -/pokemons/type/:type  ---> muestra la base de datos de los pokemones segun su tipo (filtra)
    -/pokemons/agains/:name   ---> muestra el analisis de debilidades y fortalezas entre los pokemones 
    
3. por ultimo en el momento existen 4 pokemones en la base de datos :
    
     id: 1 = Charmander
     id: 2 = Squirtle
     id: 3 = Bulbasaur
     id: 4 = Geodude
