export default function DashboardFooter() {

  return (
    <footer className="mt-16 border-t p-6 flex justify-center items-center gap-3">

      <span className="text-sm text-muted-foreground">
        Powered by
      </span>

      <img
        src="/logonor.png"
        alt="My brand"
        className="h-6"
      />

    </footer>
  );
}