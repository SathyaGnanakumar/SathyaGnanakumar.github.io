import { useEffect, useState } from 'react';

const Header = ({ navItems, sectionIds }) => {
  const [activeId, setActiveId] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero';
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const offset = section.offsetTop - 200;
        if (window.scrollY >= offset) {
          current = id;
        }
      });

      const footer = document.getElementById('footer');
      if (footer) {
        const footerTop = footer.offsetTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (
          window.scrollY >= footerTop - windowHeight + 100 ||
          window.scrollY + windowHeight >= documentHeight - 50
        ) {
          current = 'footer';
        }
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="nav glass">
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeId === item.id ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
