// db.collection('recipes').get()
//     .then(snapshot => {
//         snapshot.docs.forEach(item => console.log(item.data()));
//     });

saveRecipe = recipe => {

    db.collection('recipes').add(recipe)
        .then(() => ui.toast(recipe.title));
}