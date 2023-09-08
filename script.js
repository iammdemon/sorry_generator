document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("userInput");
    const numPrintsInput = document.getElementById("numPrints");
    const printButton = document.getElementById("printButton");
    const messagesList = document.getElementById("messages");
    const copyButton = document.getElementById("copyButton");

    printButton.addEventListener("click", function () {
        const message = userInput.value.trim();
        const numPrints = parseInt(numPrintsInput.value);

        if (message && numPrints > 0) {
            messagesList.innerHTML = ""; // Clear previous messages

            for (let i = 1; i <= numPrints; i++) {
                const listItem = document.createElement("ul");
                listItem.textContent = `${message} ${i}`;
                messagesList.appendChild(listItem);
            }
        }
    });

    copyButton.addEventListener("click", function () {
        const generatedMessages = messagesList.innerText;

        if (generatedMessages) {
            const textarea = document.createElement("textarea");
            textarea.value = generatedMessages;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);

            alert("Generated messages copied to clipboard!");
        }
    });
});
