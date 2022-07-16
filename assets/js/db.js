// db.collection('recipes').get()
//     .then(snapshot => {
//         snapshot.docs.forEach(item => console.log(item.data()));
//     });

saveRecipe = recipe => {
    db.collection('recipes').add(recipe)
        .then(() => {
            ui.clearInput();
            ui.spinner('off');
            const inputEventItems = [ui.recipeTitleInput, ui.recipeAuthorInput, ui.recipeStepsInput];
            inputEventItems.forEach((item) => ui.validate(item, 'null'));
            ui.toast(recipe.title);
        });
}