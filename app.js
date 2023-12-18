//form inputs
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const country = document.querySelector(".country");
const score = document.querySelector(".playerscore");
const add_player = document.querySelector(".submit");

//error msg
const error_msg = document.querySelector(".error-msg");

//list
const player_list = document.querySelector(".player-list");

const add = () => {
    if (firstname.value.length === 0 || !isNaN(firstname.value)) {
        error_msg.textContent = "The firstname must be letters - required";
        return;
    }

    if (lastname.value.length === 0 || !isNaN(lastname.value)) {
        error_msg.textContent = "The lastname must be letters - required";
        return;
    }

    if (country.value.length === 0 || !isNaN(country.value)) {
        error_msg.textContent = "The country must be letters - required";
        return;
    }

    if (isNaN(score.value) || score.value.length === 0) {
        error_msg.textContent = "The score must be numbers - required";
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <div class="name-date">
            <h2 class="fullname-display">${firstname.value.toLocaleUpperCase()} ${lastname.value.toLocaleUpperCase()}</h2>
            <h3 class="date">JAN 30, 2020 01:09</h3>
        </div>
        <h2 class="country-display">${country.value.toLocaleUpperCase()}</h2>
        <h2 class="score-display">${score.value}</h2>
        <div class="actions">
            <button class="action-btn add-five">+5</button>
            <button class="action-btn remove-five">-5</button>
            <button class="action-btn erase">X</button>
        </div>
    `;

    error_msg.textContent = "";
    player_list.insertAdjacentElement("afterbegin", li);

    const erase = li.querySelector(".erase");
    erase.addEventListener("click", remove_player);

    const add_five_btn = li.querySelector(".add-five");
    add_five_btn.addEventListener("click", add_five);

    const remove_five_btn = li.querySelector(".remove-five");
    remove_five_btn.addEventListener("click", remove_five);
};

add_player.addEventListener("click", add);

const remove_player = (e) => {
    const item = e.target.closest("li");
    if (item) {
        item.remove();
    }
};

const add_five = () => {
    const score_display = document.querySelector(".score-display");
    score_display.textContent = `${+score_display.textContent + 5}`;
};

const remove_five = () => {
    const score_display = document.querySelector(".score-display");
    if (+score_display.textContent > 0 && +score_display.textContent > 5) {
        score_display.textContent = `${+score_display.textContent - 5}`;
    } else {
        score_display.textContent = `0`;
    }
};
