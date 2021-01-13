var example = ['Jacob Doren.','a Developer.', 'a Hard Worker.'];

        textSequence(0);
        function fadeOut(element) {
            var opacity = 1;
            return new Promise(resolve => {
            setTimeout(function () {
            var timer = setInterval(function () {
            
                    if(opacity <= .1){
                        clearInterval(timer);
                        element.style.display = 'none';
                    }

                    element.style.opacity = opacity;
                    element.style.filter = 'alpha(opacity=' + opacity*100 + ')';
                    opacity -= opacity*.1;
            }, 10); resolve('resolved')}, 200)});
        }

        function fadeIn(element) {
            var opacity = .1;
            element.style.opacity = opacity;
            element.style.display = "none";
            return new Promise(resolve => {
            setTimeout(function () {
            var timer = setInterval(function () {
                    element.style.display = "inline";
                    if(opacity >= 1){
                        clearInterval(timer);
                        // element.style.display = 'none';
                    }
                    element.style.opacity = opacity;
                    console.log(document.getElementById("sequence"));
                    element.style.filter = 'alpha(opacity=' + opacity*100 + ')';
                    opacity += opacity*.1;
                    // element.style.display = 'inline';
            }, 10); resolve('resolved')}, 200)});
        }

//         function stateChange() {
//         i = 0
//         return new Promise(resolve => {
//         setTimeout(function () {
//             if (newState == -1) {
//                 alert('VIDEO HAS STOPPED');
//             }
//         resolve('resolved')}, 5000)};
// }

        function textSequence(i) {
            if (example.length > i) {
                setTimeout(async function() {
                    await fadeIn(document.getElementById("sequence"));

                    document.getElementById("sequence").innerHTML = example[i];

                    setTimeout(async function() {
                    await fadeOut(document.getElementById("sequence"));
                    }, 2000);
                    // setTimeout(fadeOut(document.getElementById("sequence")), 1000);
                    textSequence(++i);
                }, 3000); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

        }