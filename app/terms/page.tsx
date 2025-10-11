export default function TermsPage() {
  return (
    <div>
      <header className="mt-8 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: Oct 2025</p>
      </header>

      <div className="space-y-6 my-10">
        <section>
          <h2 className="text-xl font-semibold">Acceptance of Terms</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            By accessing or using our website and services, you agree to these Terms of Service. If you do not agree, please discontinue use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Use of Services</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            Use our services in compliance with applicable laws and policies. Do not infringe on the rights of others or misuse content, and maintain the confidentiality of credentials.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Intellectual Property</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            Content, trademarks, and design elements on this site are protected. You may not reproduce, distribute, or create derivative works without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            We provide services as-is and are not liable for indirect or consequential damages arising from the use of this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Termination</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            We may suspend or terminate access for conduct that violates these terms or poses risk to the integrity of our services.
          </p>
        </section>
      </div>
    </div>
  )
}