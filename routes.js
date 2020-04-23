module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  const tweedr = require('./controllers/tweedr')(allModels);

  // app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
  app.get('/', tweedr.index);
  app.get('/tweeds/new', tweedr.new);
  app.post('/tweeds', tweedr.newTweed);
};
