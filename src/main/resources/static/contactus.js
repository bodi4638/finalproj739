window.addEventListener('DOMContentLoaded', function () {
    highlightActiveMenuItem('contactus.html');

    const submitContactUs = document.getElementById("submit");

    submitContactUs.addEventListener("click", function (event) {
        event.preventDefault();
        addContactUs();
    });

    function addContactUs() {
        const contactNameInput = document.getElementById("name");
        const contactEmailInput = document.getElementById("email");
        const contactMessageInput = document.getElementById("message");

        if(contactNameInput.value == '') {
            alert('Must fill Name field.');
            return;
        } else if(contactEmailInput.value == '') {
            alert('Must fill Email field.');
            return;
        }

        const newContact = {
            name: contactNameInput.value,
            email: contactEmailInput.value,
            message: contactMessageInput.value
        };

        fetch('http://localhost:9010/insertContact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Data inserted successfully');
                    alert('Record inserted.');
                    contactNameInput.value = '';
                    contactEmailInput.value = '';
                    contactMessageInput.value = '';
                } else {
                    console.error('Error inserting data');
                }
            })
            .catch(error => console.error(error));
    }


});

function highlightActiveMenuItem(menuOptionHash) {

    var menuItem = document.querySelector(`a[href="${menuOptionHash}"]`);


    var menuItems = document.querySelectorAll('.menu-item .active');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
    }


    if (menuItem) {
        menuItem.classList.add('active');
    }
}
