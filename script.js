function switchUserType(userType) {
    const passengerForms = document.getElementById('passenger-forms');
    const memberForms = document.getElementById('member-forms');
    const passengerTab = document.querySelector('.user-type-tab:first-child');
    const memberTab = document.querySelector('.user-type-tab:last-child');

    if (userType === 'passenger') {
        passengerForms.classList.add('active');
        memberForms.classList.remove('active');
        passengerTab.classList.add('active');
        memberTab.classList.remove('active');
    } else {
        passengerForms.classList.remove('active');
        memberForms.classList.add('active');
        passengerTab.classList.remove('active');
        memberTab.classList.add('active');
    }
}

function openTab(tabName) {
    const userType = tabName.split('-')[0];
    const loginTab = document.getElementById(`${userType}-login`);
    const signupTab = document.getElementById(`${userType}-signup`);
    const loginBtn = document.querySelector(`#${userType}-forms .tab:first-child`);
    const signupBtn = document.querySelector(`#${userType}-forms .tab:last-child`);

    if (tabName.includes('login')) {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    } else {
        loginTab.classList.remove('active');
        signupTab.classList.add('active');
        loginBtn.classList.remove('active');
        signupBtn.classList.add('active');
    }
}