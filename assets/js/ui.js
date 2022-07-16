class UI {
    constructor() {
        this.recipeTitleInput = document.querySelector('#recipe-title');
        this.recipeAuthorInput = document.querySelector('#recipe-author');
        this.recipeStepsInput = document.querySelector('#recipe-steps');
        this.addRecipeBtn = document.querySelector('#add-recipe-btn');
        this.viewRecipesBtn = document.querySelector('#view-recipes-btn');
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

    toast(title) {
        document.querySelector('.toast-title').textContent = title;
        const toast = document.querySelector('.toast')
        toast.classList.add('show');

        setTimeout(() => toast.classList.remove('show'), 2000)
    }

    spinner(val) {
        if (val === 'on') {
            document.querySelector('.spinner').classList.remove('d-none');
        } else {
            document.querySelector('.spinner').classList.add('d-none');
        }
    }

    clearInput() {
        this.recipeTitleInput.value = '';
        this.recipeAuthorInput.value = '';
        this.recipeStepsInput.value = '';
        document.querySelector('form').reset();
    }
}


const ui = new UI();
















/* Saved Recipes state */

const saved = `
        <div class="card bg-light mb-3 mt-3 mx-auto" style="max-width: 30rem;">
            <div class="card-header">Saved Recipes</div>

            <div class="card-body">
                <div class="recipe accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#recipe-1" aria-expanded="false">
                              Egusi soup
                            </button>
                        </h2>
                        <div id="recipe-1" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p class="comments">Hello this is an amazing recipe Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quia debitis nihil asperiores fugit consectetur doloribus adipisci odio. Aliquid officia sunt a harum, nam ratione quidem
                                    facere impedit odit amet?
                                </p>

                                <div class='d-flex justify-content-between'>
                                    <p class="author text-muted">Tim</p>
                                    <p class="time text-muted">5/5/2022</p>
                                </div>


                                <a href="#" class="edit card-link" data-id="">
                                    <i class="fa fa-pencil"></i>
                                </a>

                                <a href="#" class="delete card-link" data-id="">
                                    <i class="fa fa-remove"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-danger rounded shadow-none mt-4">Delete All</button>

                    <button type="button" class="btn btn-primary rounded shadow-none mt-4 float-end">Back</button>
                    </form>
                </div>
            </div>
        </div>`

// document.querySelector('.container').innerHTML = saved;