document.addEventListener('DOMContentLoaded', function() {
    let navbar = `
    <nav class="menu-bar">
        <ul>
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="about.html" class="nav-link">About</a></li>
            <li><a href="skills.html" class="nav-link">Skills</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
    </nav>
    `;

    let footer = `
    <footer id="site-footer">
        <p>© 2023 All Rights Reserved.</p>
    </footer>
    `;

    // Insert the navbar and footer HTML
    document.querySelector('#navbar-placeholder').innerHTML = navbar;
    document.querySelector('#footer-placeholder').innerHTML = footer;

    // Function to set the 'active' class on the current page's nav link
    const setNavLinkActive = () => {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPage = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            if(link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    };

    setNavLinkActive();
});
