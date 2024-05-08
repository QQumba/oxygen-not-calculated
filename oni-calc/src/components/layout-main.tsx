export default function LayoutMain({ children }: any) {
  return (
    <>
      <header>header</header>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
