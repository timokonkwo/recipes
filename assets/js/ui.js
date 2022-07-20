class UI {
    constructor() {
        this.recipeTitleInput = document.querySelector('#recipe-title');
        this.recipeAuthorInput = document.querySelector('#recipe-author');
        this.recipeStepsInput = document.querySelector('#recipe-steps');
        this.addRecipeBtn = document.querySelector('.add-recipe-btn');
        this.viewRecipesBtn = document.querySelector('.view-recipes-btn');
        this.cardHeader = document.querySelector('.card-header');
        this.form = document.querySelector('form');

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

    addState() {
        const html = `
        <div class="form-group has-success">
        <label class="form-label mt-2" for="recipe-title">Title</label>
        <input type="text" placeholder="recipe title" id="recipe-title" class="form-control shadow-none field">
        </div>
        <!-- Form author -->
        <div class="form-group has-success">
            <label class="form-label mt-4" for="recipe-author">Author</label>
            <input type="text" placeholder="your name" class="form-control shadow-none field" id="recipe-author">
        </div>

        <!-- Form comments -->
        <div class="form-group">
            <label for="textarea" class="form-label mt-4" for="recipe-steps">Recipe steps</label>
            <textarea class="form-control shadow-none field" id="recipe-steps" placeholder="comments" rows="3"></textarea>
        </div>
        `
        document.querySelector('.state').innerHTML = html;
    }


    changeState(state) {

        if (state === 'add') {
            /* Change add button to delete all */
            this.addState();
            this.addRecipeBtn.className = "add-recipe-btn btn btn-primary rounded shadow-none mt-4 align-middle";
            this.addRecipeBtn.textContent = "Add Recipe";


            /* Change view recipes button to back */
            this.viewRecipesBtn.className = "view-recipes-btn btn btn-info rounded shadow-none mt-4 float-end align-middle";
            this.viewRecipesBtn.textContent = "View Saved Recipes"

        } else if (state === 'recipes') {
            /* Change card header */
            this.cardHeader.textContent = "Saved Recipes";

            /* Change add button to delete all */
            this.addRecipeBtn.className = "delete-all btn btn-danger rounded shadow-none mt-4";
            this.addRecipeBtn.textContent = "Delete All";

            /* Change view recipes button to back */
            this.viewRecipesBtn.className = "back btn btn-primary rounded shadow-none mt-4 float-end";
            this.viewRecipesBtn.textContent = "Back"


        }
    }

    /* Function to validate inputs */
    validate(item, cls) {
        if (cls === 'is-valid') {
            item.classList.remove('is-invalid');
            item.classList.add('is-valid');
        } else if (cls === 'null') {
            item.classList.remove('is-invalid');
            item.classList.remove('is-valid');
        } else {
            item.classList.remove('is-valid');
            item.classList.add('is-invalid');
        }
    }

    toast(message, action) {
        document.querySelector('.toast-title').textContent = message;
        document.querySelector('.toast-action').textContent = action;
        const toast = document.querySelector('.toast')
        toast.classList.add('show');

        setTimeout(() => toast.classList.remove('show'), 2000)
    }

    spinner(val) {
        if (val === 'on') {
            document.querySelector('.spinner').classList.remove('d-none');
        } else if (document.querySelector('.spinner')) {
            document.querySelector('.spinner').classList.add('d-none');
        }
    }

    clearInput() {
        document.querySelector('#recipe-title').value = '';
        document.querySelector('#recipe-author').value = '';
        document.querySelector('#recipe-steps').value = '';
        document.querySelector('form').reset();
    }


    showRecipes(response) {
        let html = '';

        response.forEach((docs) => {
            const recipe = docs.data();
            const id = docs.id;

            /* HTML Template */
            html += `
                <div class="card-body">
                    <div class="recipe accordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#recipe-${id}" aria-expanded="false">
                                  ${recipe.title}
                                </button>
                            </h2>
                            <div id="recipe-${id}" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <p class="steps">${recipe.steps}
                                    </p>
    
                                    <div class='d-flex justify-content-between'>
                                        <p class="author text-muted">${recipe.author}</p>
                                        <p class="time text-muted">${recipe.created_at.toDate().toLocaleDateString()}</p>
                                    </div>
    
    
                                    <a href="#" class="edit card-link" data-id="">
                                        <i class="fa fa-pencil"></i>
                                    </a>
    
                                    <a href="#" class="delete card-link" data-id="">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>`;
        })

        document.querySelector('.state').innerHTML = html;
    }
}

const ui = new UI();