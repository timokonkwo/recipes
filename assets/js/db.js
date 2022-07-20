const getRecipes = (e) => {
    if (e.target.classList.contains('view-recipes-btn')) {
        /* Change to saved Recipes state */
        ui.spinner('on');
        db.collection('recipes').get()
            .then(snapshot => {
                ui.changeState('recipes');
                ui.spinner('off');
                ui.showRecipes(snapshot.docs);
            });
    }
}

const saveRecipe = recipe => {
    db.collection('recipes').add(recipe)
        .then(() => {
            ui.clearInput();
            ui.spinner('off');
            const inputEventItems = [ui.recipeTitleInput, ui.recipeAuthorInput, ui.recipeStepsInput];
            inputEventItems.forEach((item) => ui.validate(item, 'null'));
            ui.toast(recipe.title, 'Added');
        })

}