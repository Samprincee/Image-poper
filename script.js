const btn = document.querySelector("#center");

// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        // console.log(now - prev, delay);

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}

btn.addEventListener("mousemove",
    throttleFunction((detail) => {

        let div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = detail.clientX + "px"
        div.style.top = detail.clientY + "px"
        
        let img = document.createElement("img");
        img.setAttribute("src" , "https://i.pinimg.com/736x/a7/e2/e0/a7e2e05a26c65a37e85903485db6160e.jpg")
        div.appendChild(img);

        gsap.to(img, {
            y : "0",
            ease: Power1,
            duration: .2,
        })
        gsap.to(img, {
            y : "100%",
            ease: Power2,
            delay: .4,
        })

        document.body.appendChild(div);

        setTimeout(function () {
            div.remove();
        }, 2000)

    }, 300));