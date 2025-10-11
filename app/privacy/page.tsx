export default function PrivacyPage() {
  return (
    <div>
      <header className="mt-8 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: Oct 2025</p>
      </header>

      <div className="space-y-6 my-10">
        <section>
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            This privacy policy describes how we collect, use, and safeguard information when you use our website and services.
            It follows clear, transparent practices aligned with our philosophy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            We may collect contact details you provide (such as name, email, and phone), messages submitted via forms,
            and basic usage analytics to improve site experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">How We Use Information</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            We use information to respond to requests, provide services, maintain quality and reliability, and improve our website and documentation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Data Retention</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            We retain information only as long as necessary to provide services and comply with legal obligations.
            You may request deletion of your information at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Your Rights</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            You can access and update your information, request deletion, and contact us to clarify data practices.
          </p>
        </section>
      </div>
    </div>
  )
}