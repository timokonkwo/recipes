class RecipeApp {
    constructor() {
        this.state = 'add';
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
        e.preventDefault();
        /* Get all validated classes and check if all the fields have been validated */
        const validate = document.querySelectorAll('.is-valid').length;
        if (validate >= 3) {
            /* Create a new recipe item if validated */
            const title = ui.recipeTitleInput.value,
                author = ui.recipeAuthorInput.value,
                steps = ui.recipeStepsInput.value;

            /* Get current date */
            const now = new Date();
            const created_at = firebase.firestore.Timestamp.fromDate(now);

            /* new Recipe Object */
            const newRecipe = { title, author, steps, created_at };
            saveRecipe(newRecipe);

            /* Turn on spinner */
            ui.spinner('on');

        } else {
            /* Add invalid class to the fields not yet validated */
            const fields = document.querySelectorAll('.field');
            Array.from(fields).forEach(item => {
                if (!item.classList.contains('is-valid')) {
                    item.classList.add('is-invalid');
                }
            })
        }
    }

    /* App Initializer */
    init() {
        /* Validate inputs on key press */
        const inputEventItems = [ui.recipeTitleInput, ui.recipeAuthorInput, ui.recipeStepsInput];
        inputEventItems.forEach(item => item.addEventListener('keyup', () => this.validateInput(item)));

        /* Listen for Add button click */
        ui.addRecipeBtn.addEventListener('click', this.addRecipe);
        /* Listen for view recipes button click */
        ui.viewRecipesBtn.addEventListener('click', getRecipes);
    }
}

/* Instantiate the Recipe class */
const App = new RecipeApp();
App.init();