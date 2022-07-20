class RecipeApp {
    constructor() {
        this.state = 'add';
    }



    addContent(e) {
        const target = e.target;
        if (target.tagName == 'INPUT' || target.tagName == 'TEXTAREA') {
            target.addEventListener('keyup', () => ui.validateInput(target));
        }

    }

    addRecipe(e) {
        e.preventDefault();
        /* Get all validated classes and check if all the fields have been validated */
        const validate = document.querySelectorAll('.is-valid').length;
        if (validate >= 3) {;
            /* Create a new recipe item if validated */
            const title = document.querySelector('#recipe-title').value,
                author = document.querySelector('#recipe-author').value,
                steps = document.querySelector('#recipe-steps').value;

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

    editRecipe() {
        return
    }

    deleteRecipe() {
        return
    }

    deleteAllRecipes() {
        return
    }

    recipeFunc(e) {
        if (e.target.classList.contains('edit')) {
            this.editRecipe();
        } else if (e.target.classList.contains('delete')) {
            this.deleteRecipe();
        } else if (e.target.classList.contains('back')) {
            ui.changeState('add');
            // document.querySelector('.state').innerHTML = ui.addState;
        } else if (e.target.classList.contains('delete-all')) {
            this.deleteAllRecipes()
        }
    }

    /* App Initializer */
    init() {

        ui.addState();

        /* Validate inputs on key press */
        document.querySelector('.state').addEventListener('click', this.addContent);


        /* Listen for Add button click */
        ui.addRecipeBtn.addEventListener('click', this.addRecipe);

        /* Listen for view recipes button click */
        ui.viewRecipesBtn.addEventListener('click', getRecipes);

        /* Listen for delete, edit or delete all button click */
        ui.form.addEventListener('click', this.recipeFunc);

    }
}

/* Instantiate the Recipe class */
const App = new RecipeApp();
App.init();