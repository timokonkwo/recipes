class Recipe {
    constructor(title, author, steps) {
        this.title = title;
        this.title = author;
        this.title = steps;
    }

    init() {
        /* Validate inputs on key press */
        const inputEventItems = [ui.recipeTitleInput, ui.recipeAuthorInput, ui.recipeStepsInput];
        inputEventItems.forEach(item => item.addEventListener('keyup', (e) => {
            if (item.value.length > 2) {
                ui.validate(item, 'is-valid');
            } else {
                ui.validate(item, 'is-invalid');
            }
        }))
    }
}

const App = new Recipe();
App.init();