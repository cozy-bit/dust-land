export default function SciFiCard({ children }) {
  return (
    <>
      <div className="relative w-full max-w-3xl mx-auto">
        <div
          className="
          relative
          bg-zinc-900/95
          px-12 py-10
          text-center
          text-zinc-100
          uppercase
          tracking-wider
          leading-8
          shadow-[0_0_20px_rgba(255,255,255,0.08)]
        "
          style={{
            clipPath: `
            polygon(
              0% 18px,
              18px 18px,
              18px 0%,

              30% 0%,
              32% 10px,
              68% 10px,
              70% 0%,

              calc(100% - 18px) 0%,
              calc(100% - 18px) 18px,
              100% 18px,

              100% calc(100% - 18px),
              calc(100% - 18px) calc(100% - 18px),
              calc(100% - 18px) 100%,

              70% 100%,
              68% calc(100% - 10px),
              32% calc(100% - 10px),
              30% 100%,

              18px 100%,
              18px calc(100% - 18px),
              0% calc(100% - 18px)
            )
          `,
          }}
        >
          <span className="absolute left-2 top-6 h-12 w-[3px] bg-white" />
          <span className="absolute left-4 top-8 h-8 w-[2px] bg-white/70" />

          <span className="absolute right-2 bottom-6 h-12 w-[3px] bg-white" />
          <span className="absolute right-4 bottom-8 h-8 w-[2px] bg-white/70" />

          {children}
        </div>
      </div>
    </>
  );
}
