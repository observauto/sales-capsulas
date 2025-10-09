export default function LogoOA({ className = "h-8 w-auto" }) {
  return (
    <img
      src="https://stats.observauto.com/pauta/logo_full.png"
      alt="Observauto Logo"
      className={className + " select-none"}
      loading="lazy"
      width="220"
      height="28"
    />
  )
}
