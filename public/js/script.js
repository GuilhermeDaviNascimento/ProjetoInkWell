function search2input() {
    window.location.href = (`./search/${document.getElementById('input2search').value}`)
}

function changepassword() {
    window.location.href = (`./changepassword/${document.getElementById('passwords').value}`)
    console.log(document.getElementById('passwords').value)
}

function clickLeft() {
    let container = document.querySelector('#flex-container');
    container.scrollTo({
        left:container.scrollLeft - 200,
        top: 0,
        behavior: "smooth"
    });
}

function clickRight() {
    let container = document.querySelector('#flex-container');
    container.scrollTo({
        left:container.scrollLeft + 200,
        top: 0,
        behavior: "smooth"
    });
}