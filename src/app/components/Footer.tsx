export default function Footer() {
  return (
    <footer className="border-t border-border py-8 pb-28 lg:py-10 lg:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 lg:flex-row lg:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent font-display text-[11px] font-bold text-dark">
            JH
          </div>
          <div>
            <p className="font-display text-sm font-medium text-text">Jireh Hesite</p>
            <a href="tel:+639275671795" className="font-body text-[11px] text-text-dim active:text-accent">
              Arayat, Pampanga &middot; (+63) 927 567 1795
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/profile.php?id=61576438250109" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-muted active:text-accent lg:h-9 lg:w-9 lg:hover:border-accent/30 lg:hover:text-accent" aria-label="Facebook">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
          <a href="tel:+639275671795" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-muted active:text-accent lg:h-9 lg:w-9 lg:hover:border-accent/30 lg:hover:text-accent" aria-label="Call">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
          </a>
        </div>

        <p className="font-body text-[11px] text-text-dim">&copy; {new Date().getFullYear()} Jireh Hesite</p>
      </div>
    </footer>
  );
}
