class Recipe {
    /* Item Constructor for the recipes */
    constructor(title, author, steps) {
        this.title = title;
        this.title = author;
        this.title = steps;
        this.validated = false
    }

    validateInput(item) {
        if (item.value.length > 2) {
            ui.validate(item, 'is-valid');
            this.validated = true;
        } else {
            ui.validate(item, 'is-invalid');
            this.validated = false;
        }
    }

    /* App Initializer */
    init() {

        /* Validate inputs on key press */
        const inputEventItems = [ui.recipeTitleInput, ui.recipeAuthorInput, ui.recipeStepsInput];
        inputEventItems.forEach(item => item.addEventListener('keyup', () => this.validateInput(item)));

        // ui.addRecipeBtn.addEventListener('click')
    }
}

/* Instantiate the Recipe class */
const App = new Recipe();
App.init();