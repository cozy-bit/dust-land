import React from "react";

const Icon = ({ children, label }) => (
  <a
    href="#"
    aria-label={label}
    className="flex h-11 w-11 items-center justify-center bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
  >
    {children}
  </a>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M20.3 4.4A19 19 0 0 0 15.6 3l-.3.6a14 14 0 0 1 4.1 1.6 15.7 15.7 0 0 0-15 0A14 14 0 0 1 8.6 3.6L8.3 3a19 19 0 0 0-4.7 1.4C1 8.9.3 13.3.6 17.6a19 19 0 0 0 5.7 2.9l.9-1.5a12 12 0 0 1-1.9-.9l.5-.4a13.8 13.8 0 0 0 11.9 0l.5.4a12 12 0 0 1-1.9.9l.9 1.5a19 19 0 0 0 5.7-2.9c.4-5-.9-9.3-3.6-13.2ZM9 14.9c-.9 0-1.7-.9-1.7-2s.7-2 1.7-2 1.7.9 1.7 2-.8 2-1.7 2Zm6 0c-.9 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.7 2-1.7 2Z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12ZM10 15V9l5.2 3-5.2 3Z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M14 9V7a1 1 0 0 1 1-1h2V3h-3a4 4 0 0 0-4 4v2H8v3h2v9h3v-9h2.6l.4-3H13Z" />
  </svg>
);
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="m21 4-3 17-8-5.5L5.5 12 20 4Zm-3.6 3.4L9.6 13l.4 4 2-2.6 4-6.5Z" opacity=".9" />
    <path d="M21 4 3 11.4l5 1.8L21 4Z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M20 5.9a7.6 7.6 0 0 1-2.2.6 3.8 3.8 0 0 0 1.7-2.1 7.7 7.7 0 0 1-2.4 1 3.8 3.8 0 0 0-6.5 3.5A10.9 10.9 0 0 1 3 4.9a3.8 3.8 0 0 0 1.2 5.1 3.8 3.8 0 0 1-1.7-.5v.1a3.8 3.8 0 0 0 3.1 3.8 3.9 3.9 0 0 1-1.7.1 3.8 3.8 0 0 0 3.6 2.7A7.7 7.7 0 0 1 2 17.6a10.9 10.9 0 0 0 5.9 1.7c7 0 10.9-5.9 10.9-11v-.5A7.7 7.7 0 0 0 20 5.9Z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);
const RedditIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <circle cx="12" cy="13.5" r="7.5" opacity=".0" />
    <path d="M22 13a2 2 0 0 0-3.4-1.4 9.6 9.6 0 0 0-4.6-1.4l.8-3.6 2.7.6a1.5 1.5 0 1 0 .2-.9l-3-.7a.5.5 0 0 0-.6.4l-.9 4.2a9.6 9.6 0 0 0-4.6 1.4A2 2 0 1 0 6.1 15a3.2 3.2 0 0 0 0 .6c0 2.5 3 4.6 6.7 4.6s6.7-2 6.7-4.6a3.2 3.2 0 0 0 0-.6A2 2 0 0 0 22 13Zm-12.7 1.3a1.2 1.2 0 1 1 2.5 0 1.2 1.2 0 0 1-2.5 0Zm6.2 3.1a4.4 4.4 0 0 1-2.5.7 4.4 4.4 0 0 1-2.5-.7.4.4 0 0 1 .5-.6 3.6 3.6 0 0 0 2 .6c.7 0 1.4-.2 2-.6a.4.4 0 1 1 .5.6Zm-.4-1.9a1.2 1.2 0 1 1 0-2.5 1.2 1.2 0 0 1 0 2.5Z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m4 6.5 8 6 8-6" />
  </svg>
);

const FOOTER_LINKS = [
  { label: "Условия использования", href: "#" },
  { label: "Cookies", href: "/cookies" },
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Пресса", href: "#" },
  { label: "Связаться с нами", href: "#" },
];

export const ReleaseSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative isolate flex min-h-[640px] flex-col items-center justify-center px-6 py-24 text-center sm:min-h-[720px]">
        <img
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2400&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-amber-900/30 to-black" />

        <p className="mb-3 text-xs font-medium tracking-[0.3em] text-amber-200/80">
          DUSTLAND
        </p>

        <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl">
          Релиз выходит
          <br />
          в песчаную бурю
        </h2>

        <p className="mt-6 text-lg tracking-wide text-white/70">
          Ожидайте в мае 2023
        </p>

        <a
          href="#register"
          className="group relative mt-10 inline-flex items-center px-10 py-4 text-sm font-bold uppercase tracking-widest text-white"
          style={{
            clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0 100%)",
            backgroundColor: "#111",
          }}
        >
          <span className="relative z-10">Зарегистрироваться</span>
          <span className="absolute inset-0 bg-amber-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <span className="absolute inset-0 z-10 flex items-center justify-center text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Зарегистрироваться
          </span>
        </a>
      </div>

      <div className="border-t border-white/10 bg-black px-6 py-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Icon label="Discord"><DiscordIcon /></Icon>
            <Icon label="YouTube"><YoutubeIcon /></Icon>
            <Icon label="Facebook"><FacebookIcon /></Icon>
            <Icon label="Telegram"><TelegramIcon /></Icon>
            <Icon label="Twitter"><TwitterIcon /></Icon>
            <Icon label="Instagram"><InstagramIcon /></Icon>
            <Icon label="Reddit"><RedditIcon /></Icon>
            <Icon label="Почта"><MailIcon /></Icon>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm uppercase tracking-wide text-white/60">
            {FOOTER_LINKS.map((link, i) => (
              <React.Fragment key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
                {i < FOOTER_LINKS.length - 1 && <span className="text-white/25">|</span>}
              </React.Fragment>
            ))}
          </nav>

          <div className="text-center text-xs leading-relaxed text-white/40">
            <p>© 2023 Redpad Games. Dustland — товарный знак Redpad Games AG.</p>
            <p>®. Все прочие товарные знаки и торговые наименования являются собственностью их владельцев.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReleaseSection;
