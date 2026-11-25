import { shortKey } from "@/lib/short-key";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Archive,
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  ClipboardList,
  FolderTree,
  History,
  KeyRound,
  Lock,
  PenLine,
  Plug,
  ScanText,
  Search,
  Share2,
  Workflow,
  type LucideIcon,
} from "@/components/ui/mask-icons";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { industryPath, productIndustries, productPath } from "@/data/products";
import { pageUrl, SITE_URL } from "@/lib/site";
import { CompareTable, Prose, Section } from "./hospital-management-page";
import { linkClass } from "./clinic-management-page";
import {
  aiPoints,
  approvalSteps,
  benefits,
  categoryRows,
  challengeRows,
  cloudVsOnPremRows,
  costFactors,
  customVsReadyRows,
  DMS_PATH,
  dmsDescription,
  dmsFaqs,
  dmsImages,
  dmsLinks,
  dmsTitle,
  features,
  governancePoints,
  howItWorks,
  INDUSTRY_LABEL,
  INDUSTRY_SLUG,
  industryRows,
  integrationRows,
  moduleRows,
  organizationPoints,
  overviewLayers,
  problemRows,
  processSteps,
  PRODUCT_NAME,
  retentionPoints,
  searchPoints,
  securityPoints,
  selectionQuestions,
  sharingPoints,
  versionPoints,
  whyClickmasters,
  type DmsFeature,
  type LinkSpec,
} from "./dms-data";

export { DMS_PATH, dmsDescription, dmsTitle, dmsImages };

const ICONS: Record<string, LucideIcon> = {
  Archive,
  BarChart3,
  FolderTree,
  History,
  KeyRound,
  PenLine,
  Plug,
  ScanText,
  Search,
  Share2,
  Workflow,
};

const ACCENT = "#be185d";
const DARK = "#2a0b1c";

export function dmsSchema() {
  const url = pageUrl(DMS_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: dmsTitle,
        description: dmsDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: pageUrl(dmsImages.dashboard.src),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Document Management System (DMS)",
        serviceType: "Document management system development",
        description:
          "Design, development and integration of document management systems for document storage, metadata and search, OCR, version control, approval workflows, permissions, audit trails and retention.",
        url,
        image: pageUrl(dmsImages.dashboard.src),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
          { "@type": "ListItem", position: 2, name: "Products", item: pageUrl("/products") },
          {
            "@type": "ListItem",
            position: 3,
            name: INDUSTRY_LABEL,
            item: pageUrl(`/products/${INDUSTRY_SLUG}`),
          },
          { "@type": "ListItem", position: 4, name: PRODUCT_NAME, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: dmsFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

type Img = { src: string; alt: string; width: number; height: number };

const contents = [
  { href: "#overview", label: "Overview" },
  { href: "#what-is-dms", label: "What it is" },
  { href: "#dms-features", label: "Features" },
  { href: "#organization", label: "Storage & retrieval" },
  { href: "#version-control", label: "Version control" },
  { href: "#approvals", label: "Approvals" },
  { href: "#search-ocr", label: "Search & OCR" },
  { href: "#security", label: "Permissions" },
  { href: "#retention", label: "Retention" },
  { href: "#industries", label: "Industries" },
  { href: "#integrations", label: "Integrations" },
  { href: "#ai", label: "AI" },
  { href: "#faq", label: "FAQ" },
];

function BodyLink({ link }: { link: LinkSpec }) {
  return (
    <Link href={link.href} className={linkClass}>
      {link.anchor}
    </Link>
  );
}

function AppFigure({ image, caption, priority = false }: { image: Img; caption: string; priority?: boolean }) {
  return (
    <figure className="cx-overfl-rounde-44">
      <div className="cm-mock-bar" aria-hidden>
        <span className="cm-dot-r" />
        <span className="cm-dot-y" />
        <span className="cm-dot-g" />
        <span className="cm-mock-url">
          <Lock className="h-3 w-3" /> documents.example / concept
        </span>
      </div>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className="cm-img"
      />
      <figcaption className="cm-mock-cap">
        <span>{caption}</span>
        <span className="cm-chip">Illustrative concept</span>
      </figcaption>
    </figure>
  );
}

function DiagramFigure({ image, caption, className = "" }: { image: Img; caption: string; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-3xl border border-border bg-white p-3 md:p-5 ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="cm-fig"
      />
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

const PRIMARY_CTA = "Discuss Your Document Management Requirements";

function PrimaryCta({ light = false, label = PRIMARY_CTA }: { light?: boolean; label?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${light ? "bg-white text-[#2a0b1c]" : "bg-primary text-primary-foreground"}`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function CtaPair({ light = false, secondary }: { light?: boolean; secondary: { label: string; href: string } }) {
  const secondaryClass = `inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${light ? "border-white/30 text-white hover:bg-white/10" : "border-border hover:bg-secondary"}`;
  return (
    <div className="flex flex-wrap gap-3">
      <PrimaryCta light={light} />
      {secondary.href.startsWith("#") ? (
        <a href={secondary.href} className={secondaryClass}>
          {secondary.label}
        </a>
      ) : (
        <Link href={secondary.href} className={secondaryClass}>
          {secondary.label}
        </Link>
      )}
    </div>
  );
}

function CheckList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item) => (
        <li key={shortKey(item)} className="cm-li">
          <span aria-hidden="true" className="ico ico-check cm-ic1" style={{ color: ACCENT }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TitledList({
  items,
  icon: Icon = Check,
  className = "",
}: {
  items: readonly (readonly [string, string])[];
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <ul className={`grid gap-4 ${className}`}>
      {items.map(([title, text]) => (
        <li key={shortKey(title)} className="cm-card5">
          <p className="cm-ttl">
            <Icon className="cm-ic05" style={{ color: ACCENT }} aria-hidden />
            {title}
          </p>
          <p className="cm-p2">{text}</p>
        </li>
      ))}
    </ul>
  );
}

function NumberedCards({ items, className = "" }: { items: readonly (readonly [string, string])[]; className?: string }) {
  return (
    <ol className={`grid gap-4 ${className}`}>
      {items.map(([title, text], index) => (
        <li key={shortKey(title)} className="cm-card5">
          <div className="cx-flex-itemsc-h">
            <span
              className="cm-num"
              style={{ backgroundColor: ACCENT }}
            >
              {index + 1}
            </span>
            <p className="cx-fontse-leadin-b">{title}</p>
          </div>
          <p className="cm-p3">{text}</p>
        </li>
      ))}
    </ol>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <div
      className="cm-note"
      style={{ borderColor: ACCENT }}
    >
      {children}
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="cm-warn">
      <AlertTriangle className="mt-1 h-5 w-5 shrink-0" aria-hidden />
      <div>{children}</div>
    </div>
  );
}

function Split({ children, figure }: { children: ReactNode; figure: ReactNode }) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div>{children}</div>
      {figure}
    </div>
  );
}

function FeatureCard({ feature }: { feature: DmsFeature }) {
  const Icon = ICONS[feature.icon] ?? ClipboardList;
  return (
    <article className="cm-card6">
      <div className="cx-flex-itemsc-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fce7f3]">
          <Icon className="h-5 w-5 text-[#be185d]" aria-hidden />
        </span>
        <h3 className="cm-h3">{feature.title}</h3>
      </div>
      <p className="cm-p4">{feature.text}</p>
    </article>
  );
}

const relatedProducts =
  productIndustries
    .find((industry) => industry.slug === INDUSTRY_SLUG)
    ?.products.filter((item) => productPath(INDUSTRY_SLUG, item.slug) !== DMS_PATH) ?? [];

export default function DmsPage() {
  return (
    <PageFrame>
      <main className="bg-background pt-28 text-foreground md:pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-foreground">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/products" className="hover:text-foreground">Products</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={industryPath(INDUSTRY_SLUG)} className="hover:text-foreground">
                  {INDUSTRY_LABEL}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">{PRODUCT_NAME}</li>
            </ol>
          </nav>

          <div className="cm-hero-grid">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                {INDUSTRY_LABEL}
              </p>
              <h1 className="cm-h1">
                Document Management System (DMS) to Organize and Secure Documents
              </h1>
              <div className="cm-lead">
                <p>
                  Contracts live in someone&apos;s inbox. Policies exist in four versions across three
                  shared drives. Invoices are scanned but can&apos;t be searched, approvals happen by email,
                  and when an auditor asks who changed a document and when, nobody can say for sure.
                </p>
                <p>
                  A document management system gives every business document a single, governed home.
                  Documents are indexed and searchable, versioned, routed for approval, protected by
                  role-based permissions and tracked through retention and archiving. Clickmasters is a
                  custom software development company that designs, builds and integrates document
                  management systems for US organizations that have outgrown shared folders, with each
                  system fitted to their document types, approval rules and existing business systems.
                </p>
              </div>
              <div className="mt-8">
                <CtaPair secondary={{ label: "Explore DMS Features", href: "#dms-features" }} />
              </div>
            </div>
            <AppFigure image={dmsImages.dashboard} caption="Document management system dashboard: every document, governed in one place" priority />
          </div>

          <nav aria-label="On this page" className="mt-12 flex flex-wrap gap-2">
            {contents.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="cm-pill"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </section>

        {/* Overview */}
        <Section id="overview" eyebrow="Overview" title="Document Management System Overview">
          <Prose>
            <p>
              Most organizations already store files. Far fewer actually{" "}
              <strong className="text-foreground">manage</strong> them. A DMS adds the layer that file
              storage lacks:
            </p>
          </Prose>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {overviewLayers.map(([title, text]) => (
              <li key={shortKey(title)} className="cm-card5">
                <p className="text-lg font-semibold">{title}</p>
                <p className="cm-p2">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            The result is fewer lost documents, fewer &quot;which version is final?&quot; questions, and a
            clear record of who did what with every file.
          </p>
          <div className="mt-8">
            <PrimaryCta label="Talk to Our Enterprise Software Team" />
          </div>
        </Section>

        {/* What is */}
        <Section id="what-is-dms" eyebrow="Definition" title="What Is a Document Management System?">
          <Prose>
            <p>
              A document management system (DMS) is software for capturing, storing, organizing,
              indexing, retrieving, controlling and tracking electronic documents throughout their
              lifecycle, from creation or scanning to approval, use, retention and final disposition.
            </p>
            <p>
              You&apos;ll also see the term <strong className="text-foreground">EDMS</strong> (electronic
              document management system). In practice the two terms mean the same thing, with EDMS
              stressing that the documents are digital. Teams usually shorten the name to document
              management system DMS, and the document management system software is the program that
              does the work. The document management system meaning is simple: a governed home for
              files, not another shared drive. Document management system basics are capture, storage,
              search, versioning and retention. Document management system types split by job, such as
              contracts, quality records, client files and drawings, and document management system
              categories group the files inside each one. Document management system solutions and
              document management system tools are the modules you turn on for those jobs, and the
              document management system key features are covered in the sections below. A DMS differs
              from neighboring software categories:
            </p>
          </Prose>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {categoryRows.map(([category, focus], index) => (
              <article
                key={category}
                className={`rounded-2xl border p-5 ${index === 0 ? "border-[#fbcfe8] bg-[#fdf2f8] md:col-span-2" : "border-border bg-white"}`}
              >
                <p className="font-semibold">{category}</p>
                <p className="cm-p2">
                  {focus}
                  {category.startsWith("Content management") ? (
                    <>
                      {" "}Clickmasters also builds <BodyLink link={dmsLinks.cms} /> for publishing needs.
                    </>
                  ) : null}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="Under the hood" title="How Does Document Management Software Work?">
          <NumberedCards items={howItWorks} className="md:grid-cols-2 lg:grid-cols-4" />
        </Section>

        {/* Why */}
        <Section id="why-dms" eyebrow="Business problems" title="Why Businesses Need a Document Management System">
          <CompareTable
            caption="Document problems, operational impact, how a DMS helps, and an example scenario"
            headers={["Problem", "Operational impact", "How a DMS helps", "Scenario"]}
            rows={problemRows}
          />
          <Note>
            A DMS reduces these risks. It can&apos;t eliminate them without good policies, training and
            consistent use.
          </Note>
        </Section>

        {/* Features */}
        <Section id="dms-features" eyebrow="11 capability areas" title="Core Document Management Features">
          <Prose>
            <p>
              The capabilities below are{" "}
              <strong className="text-foreground">possible features and development options</strong>,
              scoped during discovery. They aren&apos;t preinstalled features of a ready-made Clickmasters
              product.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={shortKey(feature.title)} feature={feature} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryCta label="Build a Custom DMS" />
          </div>
        </Section>

        {/* Modules */}
        <Section id="modules" eyebrow="Scope" title="Document Management System Modules">
          <CompareTable
            caption="DMS modules, what they cover and primary users"
            headers={["Module", "What it covers", "Primary users"]}
            rows={moduleRows}
          />
        </Section>

        {/* Organization */}
        <Section id="organization" eyebrow="Structure" title="Document Storage, Organization and Retrieval">
          <Split
            figure={
              <AppFigure
                image={dmsImages.repository}
                caption="Folder tree plus document types, owners, versions, review dates and tags"
              />
            }
          >
            <p className="cx-textba-leadin-1n">
              Good organization depends less on folders and more on{" "}
              <strong className="text-foreground">document types and metadata</strong>. A contract, an
              invoice and an SOP each get a template with required fields, such as client, vendor,
              effective date, department or review date. The document management system hierarchy is that
              type-and-folder tree, and document management system naming conventions keep file names
              predictable, so search does not depend on who saved the file. That allows:
            </p>
            <TitledList items={organizationPoints} className="mt-5" />
          </Split>
        </Section>

        {/* Versions */}
        <Section id="version-control" eyebrow="Document control" title="Document Version Control and Revision History">
          <Prose>
            <p>
              Version control keeps one <strong className="text-foreground">current</strong> version while
              preserving every earlier one. Document management system versioning is that rule, and the
              document management system vault is the controlled store those versions live in:
            </p>
          </Prose>
          <TitledList items={versionPoints} icon={History} className="mt-8 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-8">
            <AppFigure image={dmsImages.versions} caption="One current version, full history" />
          </div>
          <Note>
            This is the core of <strong className="text-foreground">document control</strong> in
            quality-managed environments.
          </Note>
        </Section>

        {/* Approvals */}
        <Section id="approvals" eyebrow="Workflow" title="Document Approval and Workflow Automation">
          <Prose>
            <p>
              Document workflows route a document through review, approval or rejection with clear
              ownership. A document management system workflow is that route, and a document
              management system with approval workflow will not publish a file until the named
              reviewers sign it:
            </p>
          </Prose>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {approvalSteps.map((step, index) => (
              <li key={shortKey(step)} className="cx-flex-gap4-2g">
                <span
                  className="cm-num8"
                  style={{ backgroundColor: "#fce7f3", color: ACCENT }}
                >
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <DiagramFigure
            image={dmsImages.approval}
            caption="Submit, route, review, multi-level approval, then publish or return to the author"
            className="mt-8"
          />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            When approvals span many departments and systems beyond documents, such as purchase
            requests, onboarding or customer requests, they belong in{" "}
            <BodyLink link={dmsLinks.bpm} />. The DMS keeps the document workflow and the record of
            approval.
          </p>
        </Section>

        {/* Search & OCR */}
        <Section id="search-ocr" eyebrow="Findability" title="Document Search, Indexing and OCR">
          <TitledList items={searchPoints} icon={Search} className="sm:grid-cols-2 lg:grid-cols-5" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <AppFigure image={dmsImages.ocr} caption="Extraction with human review" />
            <AppFigure image={dmsImages.search} caption="Full-text, OCR and metadata search with a preview" />
          </div>
          <Caution>
            OCR accuracy depends on scan quality, layout, fonts, handwriting and language. Extracted data
            should be validated, and low-confidence results routed to a person for review. Clickmasters
            builds OCR and extraction pipelines as part of its <BodyLink link={dmsLinks.ai} /> work, using
            services such as AWS Textract and Azure Document Intelligence with human review built in.
          </Caution>
        </Section>

        {/* Security & permissions */}
        <Section id="security" eyebrow="Access" title="Document Security and Access Permissions">
          <Split
            figure={
              <AppFigure
                image={dmsImages.permissions}
                caption="View, download, edit, share and approve rights by role and folder"
              />
            }
          >
            <CheckList items={securityPoints} />
          </Split>
        </Section>

        {/* Sharing */}
        <Section id="sharing" eyebrow="Collaboration" title="Document Sharing and Collaboration">
          <Split figure={<DiagramFigure image={dmsImages.mobile} caption="Approve from anywhere" />}>
            <CheckList items={sharingPoints} />
          </Split>
        </Section>

        {/* Retention */}
        <Section id="retention" eyebrow="Lifecycle" title="Document Retention and Records Management">
          <Prose>
            <p>
              A DMS can enforce <strong className="text-foreground">retention schedules</strong> by
              document type. The document management system life cycle is that path from creation to
              disposition, and a
              document management system policy sets how long each type is kept and who may delete
              it. For example, keep a record for a defined number of years after an
              event, then review it for disposition.
            </p>
          </Prose>
          <TitledList items={retentionPoints} icon={Archive} className="mt-8 sm:grid-cols-2 lg:grid-cols-5" />
          <Caution>
            Retention periods depend on your industry, jurisdictions and contracts. They should be set by
            qualified legal and records professionals, not assumed from software defaults.
          </Caution>
        </Section>

        {/* Reporting */}
        <Section id="reporting" eyebrow="Visibility" title="Document Management Reporting and Analytics">
          <Prose>
            <p>
              Reports can cover document activity, approval cycle times, pending reviews, user activity,
              storage usage, lifecycle status (active, archived, on hold, due for disposition),
              department-level volumes and audit-trail exports for investigations or audits.
            </p>
          </Prose>
          <div className="mt-8">
            <AppFigure image={dmsImages.analytics} caption="Approval cycle time, documents by department and retention status" />
          </div>
        </Section>

        {/* Benefits */}
        <Section id="benefits" eyebrow="Outcomes" title="Benefits of Document Management Software">
          <Prose>
            <p>Document management system benefits, when people actually file in the system, typically include:</p>
          </Prose>
          <CheckList items={benefits} className="mt-6 max-w-5xl md:grid-cols-2" />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Results depend on design, migration quality, policies and adoption. Measure them against your
            current baseline.
          </p>
        </Section>

        {/* Industries */}
        <Section id="industries" eyebrow="Use cases" title="Industry-Specific Document Management Solutions">
          <CompareTable
            caption="Document management challenges, typical documents and key workflows by industry"
            headers={["Industry", "Common challenges", "Typical documents", "Key workflows and capabilities"]}
            rows={industryRows}
          />
          <p className="cx-mt6-maxw3x-1c">
            A document management system law firm teams rely on keeps matter files together, and the
            document management system used by law firms also has to respect privilege rules set by
            the practice. A document management system for construction industry projects tracks
            drawings, RFIs and submittals by job, so document management system construction crews on
            site always open the current revision. A document management system for engineering
            projects does the same for design revisions, so document management system engineering
            reviews start from the approved drawing. Document management system healthcare records
            need tighter access, and a document management system for accounting firms keeps
            workpapers and engagement letters.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            A document management system government offices use, and a document management system for
            local government units, both need retention schedules and public-record rules. In the
            document management system banking industry setup, a KYC document management system holds
            identity packs with checklists and restricted access. Document management system pharma
            and document management system GMP records need controlled copies. A quality document
            management system, often called a document management system QMS or a document management
            system for QMS work, makes SOPs pass document management system quality assurance review
            first: a QA document management system issues a new version only after that sign-off.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            A document management system ISO 9001 setup keeps the controlled procedures an auditor
            asks for, which is why teams pick a document management system for ISO 9001 audits. The
            same structure can support a document management system ISO 17025 lab, an ISO 27001
            document management system for security evidence, and a document management system 21 CFR
            Part 11 configuration for electronic records and signatures where those rules apply. In a
            document management system ECM comparison, enterprise content management (ECM) is the
            broader content layer. In a document management system CMS comparison, the CMS is the
            publishing cousin, not the controlled-record store. A knowledge document management system
            is the library people search after a file is approved, and a document management system
            enterprise deployment adds departments, entities and stricter permissions.
          </p>
          <div className="mt-8">
            <PrimaryCta label="Explore Custom DMS Solutions" />
          </div>
        </Section>

        {/* SMB / Enterprise */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:px-8 lg:grid-cols-2">
            <article id="small-business" className="cx-scroll-rounde-1g">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Document Management Software for Small Businesses
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Small businesses usually need a{" "}
                <strong className="text-foreground">central repository, simple metadata, good search,
                version history, basic approvals and secure sharing</strong>. They don&apos;t need
                enterprise records management. A focused DMS, often integrated with Microsoft 365 or
                Google Workspace, delivers most of the value while staying easy to adopt.
              </p>
            </article>
            <article id="enterprise" className="scroll-mt-28 rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Enterprise Document Management Systems
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Enterprises need multi-department and multi-entity structures, granular permissions, SSO
                and identity provisioning, high-volume capture and OCR, complex approval chains, records
                retention and legal holds, audit reporting, and integration with ERP, CRM, HRMS and
                collaboration suites. At enterprise scale, information architecture and governance matter
                as much as features.
              </p>
            </article>
          </div>
        </section>

        {/* Cloud */}
        <Section id="cloud-vs-on-premise" eyebrow="Deployment" title="Cloud-Based vs. On-Premise Document Management">
          <CompareTable
            caption="Cloud-based DMS compared with on-premise DMS"
            headers={["Factor", "Cloud-based DMS", "On-premise DMS"]}
            rows={cloudVsOnPremRows}
          />
          <Note>
            Cloud security depends on configuration (identity, encryption, access policies, logging and
            backups), not on the deployment model alone. A document management system cloud based
            deployment runs in the browser, so document management system online access and a web
            document management system let people open files without a desktop install. A document
            management system web application is the same idea built for your own team, and a
            document management system app covers the phone. Document management system self hosted,
            document management system local and document management system Windows builds are the
            installed options, and document management software Mac builds cover Apple desktops. The
            basic file management system Mac users already have is not the same as a governed DMS.
          </Note>
        </Section>

        {/* Custom vs ready-made */}
        <Section id="custom-vs-ready-made" eyebrow="Build or buy" title="Custom DMS vs. Ready-Made Document Management Software">
          <CompareTable
            caption="Ready-made DMS compared with a custom DMS"
            headers={["", "Ready-made DMS", "Custom DMS"]}
            rows={customVsReadyRows}
          />
          <Note>
            A common middle path keeps Microsoft 365 or SharePoint for collaboration and adds a{" "}
            <strong className="text-foreground">custom DMS layer</strong> for structured metadata,
            controlled workflows, retention and integration with business systems. A document
            management system that integrates with SharePoint keeps day-to-day collaboration in
            Microsoft 365 while it holds the controlled record, which is what most teams mean by a
            document management system with SharePoint.
          </Note>
        </Section>

        {/* Integrations */}
        <Section id="integrations" eyebrow="Connected systems" title="Document Management Software Integrations">
          <CompareTable caption="Document management integrations" headers={["System", "Typical integration"]} rows={integrationRows} />
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            These are possible integrations to be confirmed during scoping, not existing partnerships. Our{" "}
            <BodyLink link={dmsLinks.api} /> team builds these connections, including Microsoft Graph API
            integration with Teams and SharePoint.
          </p>
        </Section>

        {/* AI */}
        <Section id="ai" eyebrow="Applied AI" title="AI and Automation in Document Management">
          <TitledList items={aiPoints} icon={Brain} className="sm:grid-cols-2 lg:grid-cols-3" />
          <Caution>
            AI results depend on the quality and variety of your documents. A document management
            system using AI can suggest a type or pull fields from a scan, but document management with
            AI should still send low-confidence results to a person. Answers should always link back
            to the source documents.
          </Caution>
        </Section>

        {/* Governance */}
        <Section id="governance" eyebrow="Governance" title="Document Security, Privacy and Data Governance">
          <Split
            figure={<AppFigure image={dmsImages.audit} caption="Who did what, and when" />}
          >
            <CheckList items={governancePoints} />
          </Split>
          <Caution>
            <strong>Compliance depends on implementation.</strong> A DMS can support HIPAA, SOC 2, GDPR,
            state privacy laws or industry recordkeeping requirements, but no software makes an
            organization compliant on its own. Document management system roles and responsibilities
            name who may draft, review, approve and retire each type. Document management system best
            practices start there, before the software. Compliance depends on configuration, policies, contracts,
            security controls, training and your specific obligations. Electronic signatures are generally
            recognized under US law (the ESIGN Act and state UETA laws), but some documents and processes
            have specific requirements. Confirm them with counsel.
          </Caution>
        </Section>

        {/* Challenges */}
        <Section id="challenges" eyebrow="Lessons learned" title="Common Document Management Challenges and Solutions">
          <CompareTable caption="Common document management challenges and solutions" headers={["Challenge", "Solution"]} rows={challengeRows} />
        </Section>

        {/* Choose */}
        <Section id="choose" eyebrow="Evaluation" title="How to Choose the Right Document Management System">
          <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
            Document management system companies sell packaged suites, and a document management
            system vendors comparison or a document management system list will describe their
            products. Document management system providers publish feature lists, and document
            management system reviews show how others use them, but the document management system
            best suited to you follows your document types and approval rules, not a ranking. A
            document management system website can show a tour,
            but it is no substitute for trying your own files. Build a document management system
            requirements checklist that covers document types, permissions, retention and the
            systems you already run.
          </p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectionQuestions.map(([title, text], index) => (
              <li key={shortKey(title)} className="cm-card5">
                <p className="cx-flex-itemsc-1s">
                  <span
                    className="cm-num7"
                    style={{ backgroundColor: "#fce7f3", color: ACCENT }}
                  >
                    {index + 1}
                  </span>
                  {title}
                </p>
                <p className="cm-p2">{text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="Delivery" title="Custom Document Management Software Development Process">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([title, text], index) => (
              <li key={shortKey(title)} className="cm-card5">
                <span className="cm-label" style={{ color: ACCENT }}>
                  Step {index + 1}
                </span>
                <p className="cm-t2">{title}</p>
                <p className="cm-p2">{text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="Budgeting" title="Factors That Affect DMS Development Cost">
          <TitledList items={costFactors} icon={BarChart3} className="sm:grid-cols-2 lg:grid-cols-4" />
          <Note>
            Cost and timeline depend on scope and complexity. Document management system price follows
            volume, workflows,
            capture and how many systems you connect. Clickmasters agrees
            on scope, timeline and quote before development starts.
          </Note>
        </Section>

        {/* Why Clickmasters */}
        <Section id="why-us" eyebrow="Your partner" title="Why Choose Clickmasters for Custom DMS Development?">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <TitledList items={whyClickmasters} className="sm:grid-cols-2" />
            <div className="rounded-3xl p-6 text-white md:p-8" style={{ backgroundColor: DARK }}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f9a8d4]">
                Enterprise build experience
              </p>
              <p className="mt-3 text-base leading-7 text-white/85">
                Our{" "}
                <Link href={dmsLinks.customDms.href} className="font-medium text-white underline underline-offset-4">
                  {dmsLinks.customDms.anchor}
                </Link>{" "}
                work runs through enterprise engagements that include approval routing engines, document
                generation pipelines, comprehensive audit logging and compliance and audit platforms.
              </p>
              <div className="mt-6">
                <PrimaryCta light />
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <section id="faq" className="cm-sec">
          <div className="cm-wrap">
            <h2 className="cm-h2b">
              Frequently Asked Questions About Document Management Systems
            </h2>
            <div className="cm-list">
              {dmsFaqs.map((faq, index) => (
                <details key={shortKey(faq.question)} className="group p-5 md:p-6" open={index === 0}>
                  <summary className="cm-faq-q">
                    <h3>
                      {index + 1}. {faq.question}
                    </h3>
                    <span aria-hidden="true" className="ico ico-chev cm-faq-ic" />
                  </summary>
                  <p className="cm-intro">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border text-white" style={{ backgroundColor: DARK }}>
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="cm-h2b">
                Give Every Business Document a Governed Home
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                Whether you&apos;re replacing shared drives, controlling SOP revisions, digitizing paper
                archives or building document features into your own platform, the first step is a clear
                inventory of your documents, workflows, permissions and retention needs.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                Tell us how documents move through your organization today. We&apos;ll recommend the right
                approach, outline the modules and integrations involved, and scope the first phase.
              </p>
              <div className="mt-8">
                <CtaPair light secondary={{ label: "Request a Software Development Consultation", href: "/contact" }} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                We scope the product, the timeline and the quote before development starts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Our recommendation covers:</p>
              <ul className="mt-4 space-y-3">
                {["The right approach for your documents", "The modules involved", "Integrations and migration", "A scoped first phase"].map((item) => (
                  <li key={shortKey(item)} className="cx-flex-gap3-24">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f9a8d4] text-[#2a0b1c]">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related products (site template block) */}
        {relatedProducts.length > 0 ? (
          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
            <h2 className="cx-text2x-fontse-u">More in {INDUSTRY_LABEL}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={productPath(INDUSTRY_SLUG, item.slug)}
                  className="cm-linkcard"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* Sticky mobile CTA */}
        <style>{"@media (max-width: 767px) { body { padding-bottom: 72px; } }"}</style>
        <div className="cm-mbar">
          <Link
            href="/contact"
            className="cm-cta-m"
          >
            Discuss Your Document Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PageFrame>
  );
}
