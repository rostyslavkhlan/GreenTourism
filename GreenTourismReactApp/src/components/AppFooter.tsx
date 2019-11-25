import * as React from "react";

export default function AppFooter(props: {}) {
    return(
        <footer className="wd footer-links d-none d-md-block">
            <a href="http://instagram.com"><img src="../img/instagram.png" alt="Instagram"/></a>
            <a href="http://twitter.com"><img src="../img/twitter.png" alt="Twitter"/></a>
            <a href="http://facebook.com"><img src="../img/facebook.png" alt="Facebook"/></a>
            <div className="copyright">Зелений туризм © 2019.</div>
        </footer>
    )
}