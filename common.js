document.addEventListener('DOMContentLoaded', function() {
    let navbar = `
    <nav class="menu-bar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    `;

    let footer = `
    <footer id="site-footer">
        <p>© 2023 All Rights Reserved.</p>
    </footer>
    `;

    // Ensure that the placeholders exist before attempting to insert HTML
    if (document.querySelector('#navbar-placeholder')) {
        document.querySelector('#navbar-placeholder').innerHTML = navbar;
    }

    if (document.querySelector('#footer-placeholder')) {
        document.querySelector('#footer-placeholder').innerHTML = footer;
    }
});
