document.addEventListener('DOMContentLoaded', function () {
    let navbar = `
    <nav class="menu-bar">
        <ul>
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="resume.html" class="nav-link">Resumé</a></li>
            <li><a href="gallery.html" class="nav-link">Gallery</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
    </nav>
    `;

    let footer = `
    <footer id="site-footer">
    <div class="footer-tooper">
    <p>Let's Connect!</p>
    </div>
    <div class="footer-social">
        <a href="http://Linkedin.com" target="_blank">
            <img src="scr/linkedin.png" alt="Linkedin" />
        </a>
        <a href="http://twitter.com" target="_blank">
            <img src="scr/twitter.png" alt="X" />
        </a>
        <a href="http://instagram.com" target="_blank">
            <img src="scr/instagram.png" alt="Instagram" />
        </a>
        <a href="http://slack.com" target="_blank">
        <img src="scr/slack.png" alt="Slack" />
        </a>
        <a href="http://youtube.com" target="_blank">
        <img src="scr/youtube.png" alt="YouTube" />
        </a>
        <a href="http://whatsapp.com" target="_blank">
        <img src="scr/whatsapp.png" alt="Whatsapp" />
        </a>
    </div>
    <div class="footer-bottom">
        <p>© 2023 All Rights Reserved.</p>
    </div>
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
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    };

    setNavLinkActive();
});
