export default function Layout(props) {
  const { children } = props;

  const header = (
    <header>
        <h1 className="text-gradient">The Bogdan's Workout</h1>
        <p><strong>30 simple workouts</strong></p>
    </header>
  )
  const footer = (
    <footer>
        <p>Built by <a href="https://bk0ss.github.io/" target="_blank">Bogdan</a>
        <br/> Styled with <a href="https://www.fantacss.smoljames.com/" target="_blank">fantaCSS</a></p>
    </footer>
  )

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
