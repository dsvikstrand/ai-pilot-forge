import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
            
            <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">Overview</h2>
              <p>
                VDS (Vikstrand Deep Solutions) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">Information We Collect</h2>
              <p>
                We may collect information you provide directly, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information when you submit our contact form</li>
                <li>Company name and project details you share during consultations</li>
                <li>Communication records from our correspondence</li>
              </ul>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Communicate about projects and deliverables</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">Your Rights</h2>
              <p>
                Under GDPR, you have the right to access, correct, or delete your personal data. You may also request data portability or object to certain processing activities.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-foreground">Contact</h2>
              <p>
                If you have questions about this privacy policy or how we handle your data, please contact us at hello@vds.se.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
