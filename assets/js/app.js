class Recipe {
    /* Item Constructor for the recipes */
    constructor(title, author, steps) {
        this.title = title;
        this.author = author;
        this.steps = steps;
    }

}


class RecipeApp {
    constructor() {
        this.data = [];
    }


    validateInput(item) {
        /* Check if user entered a valid text */
        if (item.value.length > 2) {
            ui.validate(item, 'is-valid');

        } else if (item.value.length === 0) {
            ui.validate(item, 'null')
        } else {
            ui.validate(item, 'is-invalid');

        }
    }

    addRecipe(e) {
        /* Get all validated classes and check if all the fields have been validated */
        const validate = document.querySelectorAll('.is-valid').length;
        if (validate >= 3) {
            /* Create a new recipe item if validated */
            const title = ui.recipeTitleInput.value,
                author = ui.recipeAuthorInput.value,
                steps = ui.recipeStepsInput.value;
            const newRecipe = new Recipe(title, author, steps);
            // this.data.push(newRecipe);
            console.log(this.items)
        } else {
            /* Add invalid class to the fields not yet validated */
            const fields = document.querySelectorAll('.field');
            Array.from(fields).forEach(item => {
                if (!item.classList.contains('is-valid')) {
                    item.classList.add('is-invalid');
                }
            })
        }
        e.preventDefault();
    }

    /* App Initializer */
    init() {
        /* Validate inputs on key press */
        const inputEventItems = [ui.recipeTitleInput, ui.recipeAuthorInput, ui.recipeStepsInput];
        inputEventItems.forEach(item => item.addEventListener('keyup', () => this.validateInput(item)));

        ui.addRecipeBtn.addEventListener('click', this.addRecipe);
    }
}

/* Instantiate the Recipe class */
const App = new RecipeApp();
App.init();