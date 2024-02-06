document.addEventListener("DOMContentLoaded", function() {
    var memeForm = document.getElementById("meme-form");
    var listGallery = document.querySelector(".gallery");

    memeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var memeLi = document.createElement('li');
        memeLi.classList.add("meme-img");

        var urlInput = document.getElementById('uploaded-img').value,
            src = urlInput,
            img = document.createElement('img');
        img.src = src;

        var topTextDiv = document.createElement('div');
        topTextDiv.classList.add("text", "top");
        topTextDiv.innerText = document.getElementById("text-top").value;

        var bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add("text", "bottom");
        bottomTextDiv.innerText = document.getElementById("text-bottom").value;

        var removeDiv = document.createElement('div');
        removeDiv.classList.add("red-cross");
        removeDiv.innerText = "X";
        removeDiv.style.color = "red";

        listGallery.appendChild(memeLi);
        memeLi.appendChild(img);
        memeLi.appendChild(topTextDiv);
        memeLi.appendChild(bottomTextDiv);
        memeLi.appendChild(removeDiv);

        memeForm.reset();
    });

    function remove(event) {
        event.target.parentNode.remove();
    }

    listGallery.addEventListener('click', remove, false);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Tab") {
            const focusedElement = document.activeElement;
            const formFields = Array.from(document.querySelectorAll("input[type='text']"));
            const currentIndex = formFields.indexOf(focusedElement);

            if (currentIndex > -1) {
                const nextIndex = (currentIndex + 1) % formFields.length;
                formFields[nextIndex].focus();
                e.preventDefault();
            }
        }
    });
});