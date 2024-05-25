let out = document.getElementById("output");
let btn = document.getElementById("btn");

function aka() {
    let age = document.getElementById("age").value;
    let sallery = document.getElementById("sallery").value;
    let height = document.getElementById("height").value;
    let skin = document.getElementsByName("skin");

    if (!age || !sallery || !height || !skin) {
        out.innerHTML = `<span class="wrong2">Please Fill the Boxes!!!</span>`;
    } else {
        if (age >= 18 && age <= 40) {
            if (sallery > 3) {
                if (height >= 5 && height <= 6) {
                    // ================================
                    let i;
                    for (i = 0; i <= skin.length; i++) {
                        if (skin[i].checked) {
                            var gen = skin[i].value;
                            if (gen == "white") {
                                out.innerHTML = `<span class="sellected">Your Are a Sellected Girl. "_"</span>`;
                            } else {
                                out.innerHTML = `<span class="wrong">Fail!! You are a Black Girl .</span>`;
                            }
                        }
                    }
                    // ================================
                } else {
                    out.innerHTML = `<span class="wrong">Your Height is: ${height} Feet. You Are Short.</span>`;
                }
            } else {
                out.innerHTML = `<span class="wrong">Your Dowry Amount is : ${sallery} Lac . Poor Dowry.</span>`;
            }
        } else {
            if (age < 18) {
                out.innerHTML = `<span class="wrong">Your Age is: ${age} . You are Child.</span>`;

            } else {
                out.innerHTML = `<span class="wrong">Your Age is: ${age} . You are Old.</span>`;
            }
        }
    }
}

btn.addEventListener("click", aka);

