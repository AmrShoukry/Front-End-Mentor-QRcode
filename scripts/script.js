function generatePattern(text, color)
{
    let textDiv = document.createElement("div");

    for(let i = 0; i < 60; i++)
    {
        let p = document.createElement("p");
        p.classList.add("repeated");
        p.append(text.repeat(60));
        textDiv.appendChild(p);
        p.style.cssText = `-webkit-text-stroke-color: ${color}`;
    }

    document.body.prepend(textDiv);

    textDiv.classList.add("text");

}

generatePattern("Amr Shoukry ", "#b6d4ff");
