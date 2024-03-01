import appLogo from '../assets/app-logo.svg'

export function Header() {
  return (
    <header className="w-full items-center justify-center flex py-6 h-48 bg-zinc-950">
      <img src={appLogo} alt="" />
    </header>
  )
}
