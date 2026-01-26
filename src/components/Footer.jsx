import data from "../data";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 text-center dark:text-textDim text-textDim-light font-mono text-sm">
      <div className="flex justify-center gap-6 mb-4">
        {data.socials.github && (
          <a
            href={data.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <Icon name="github" size={20} />
          </a>
        )}
        {data.socials.linkedin && (
          <a
            href={data.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <Icon name="linkedin" size={20} />
          </a>
        )}
        {data.socials.instagram && (
          <a
            href={data.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-primary transition-colors"
          >
            <Icon name="instagram" size={20} />
          </a>
        )}
        {data.socials.twitter && (
          <a
            href={data.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-primary transition-colors"
          >
            <Icon name="x" size={20} />
          </a>
        )}
      </div>
      <div>
          © {year} {data.siteMeta.name} — Built with React & Tailwind
      </div>
    </footer>
  );
}
