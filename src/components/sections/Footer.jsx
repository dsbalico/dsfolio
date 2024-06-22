import user_info from "../../data/user_info.js";
import GitHubButton from "react-github-btn";
import { FaArrowCircleUp } from "react-icons/fa";

function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="p-4 text-center md:flex justify-between">
      {/* =========== GITHUB BUTTON =========== */}
      <GitHubButton
        className="self-center"
        href="https://github.com/dsbalico/dsfolio"
        data-color-scheme={theme}
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star dsbalico/dsfolio on GitHub"
      >
        Star on Github
      </GitHubButton>
      {/* =========== USER COPYRIGHT =========== */}
      <p className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm text-center font-light">
        {user_info.footer}
      </p>
      {/* =========== SCROLL ON TOP BUTTON =========== */}
      <button
        onClick={() => scrollToTop()}
        className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2"
      >
        <FaArrowCircleUp className="self-center text-red-800 dark:text-red-500" /> Go back to top
      </button>
    </footer>
  );
}

export default Footer;
