type Pricing = { type: string; investment: string; timeline: string };

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export function buildServiceArticle({
  serviceTitle,
  serviceDescription,
  subTitle,
  description,
  lead,
  highlights,
  pricing,
}: {
  serviceTitle: string;
  serviceDescription: string;
  subTitle: string;
  description: string;
  lead?: string;
  highlights: string[];
  pricing: Pricing[];
}): ArticleSection[] {
  const name = subTitle.trim();
  const summary = (lead || description).replace(/\s+/g, " ").trim();
  const parent = serviceDescription.replace(/\s+/g, " ").trim();
  const focus =
    highlights.length > 0
      ? highlights.join(", ")
      : "scope, architecture, implementation, and launch support";
  const priceLines =
    pricing.length > 0
      ? pricing
          .map(
            (tier) =>
              `${tier.type} engagements for ${name} are typically planned around ${tier.investment} over ${tier.timeline}.`,
          )
          .join(" ")
      : `Most ${name} engagements are quoted after a short discovery call. A focused first release often lands in the five-figure range, while a multi-system build with integrations, compliance review, and a longer support window costs more. Clickmasters writes the price, the timeline, and what is out of scope before development starts, so the number you approve is the number the team builds to.`;

  return [
    {
      heading: `What ${name} covers`,
      paragraphs: [
        `${name} at Clickmasters is a delivery engagement, not a brochure category inside ${serviceTitle}. ${summary} The work starts from how your team operates today: the users, the systems already in place, the data that has to move, and the outcome the business will measure after launch.`,
        `Inside ${serviceTitle.toLowerCase()}, this line of work is scoped as its own project. ${parent} We use that parent context to decide what belongs in this engagement and what should stay with a neighboring service, so the proposal does not quietly absorb a second product.`,
        `A typical scope names the users, the workflows, the integrations, the environments, and the acceptance checks. You get a written scope, a milestone plan, and a named engineering contact. Source code, infrastructure notes, and the decisions behind them are documented as the work proceeds, and the repositories transfer to you.`,
      ],
    },
    {
      heading: "Deliverables",
      paragraphs: [
        `Delivery for ${name} is organized around ${focus}. Each of those points becomes a checklist item with an owner, not a slogan on a slide. Design, engineering, and review sit in the same sprint cadence so a feature is not "done" until it can be exercised in a staging environment you can open.`,
        `The handoff includes the working software, the repository, environment notes, and a short operator guide for the people who will run it. Where the work touches payments, customer data, or an internal system of record, the deliverable also includes the integration map and the failure cases we tested. We do not treat a demo recording as a substitute for that package.`,
        `After launch, the same team stays available for the warranty window: defect fixes, release notes, and a backlog of the items that were intentionally deferred. If you want a retained team after that, it is a separate agreement with its own scope, not an assumption buried in the build.`,
      ],
    },
    {
      heading: "How the work runs",
      paragraphs: [
        `We start ${name} with a discovery working session. Stakeholders walk through the current process, the systems that cannot be replaced, and the constraints on timeline and budget. The output is a technical outline: architecture choices, integration list, risks, and a milestone sequence you can accept or change before anyone writes production code.`,
        `Build then moves in short iterations. You see the product in staging, not only in a status deck. Questions about scope are answered in writing so a late request is either added with a revised date or parked. Quality checks run alongside the build: functional passes on the agreed workflows, and a review of the risky paths rather than a generic test script copied from another client.`,
        `Release is a planned cut, with rollback notes and someone on the Clickmasters side who knows the deployment. For ${name}, that usually means a staging sign-off, a production window you choose, and a first week of watching the real usage instead of disappearing at go-live.`,
      ],
    },
    {
      heading: "Tech stack",
      paragraphs: [
        `The stack for ${name} is chosen for the product you already have, not from a fixed menu. Web interfaces are commonly React or Next.js. Services are commonly Node.js or Python. Data sits in PostgreSQL unless the workload clearly wants a document store or a warehouse. Mobile work is native or cross-platform depending on the device features you actually need.`,
        `Cloud hosting is AWS, Azure, or Google Cloud, with infrastructure described in code when the environment is more than a single server. CI runs the build and the automated checks. Secrets stay out of the repository. We will use the tools your team already operates when they are a reasonable fit, and we will say so when they are not, before the estimate is locked.`,
        `Integrations are part of the stack conversation. CRMs, ERPs, payment providers, identity, and analytics are listed in the scope with the direction of data flow. ${name} is not finished when the screen looks right and the other systems are still updated by hand.`,
      ],
    },
    {
      heading: "Pricing guidance",
      paragraphs: [
        priceLines,
        `Price moves with three things: how many systems must connect, how strict the review and audit trail need to be, and whether you need a small release or a team that stays for the year. A discovery call is the point where those are separated. You should be able to compare a smaller first release against the full version without guessing which features were assumed.`,
        `Clickmasters does not publish a single package price for ${name} because two companies with the same label often need different depth. The guidance above is a planning range. The quote you receive names the milestone, the people, and what happens if a third-party API is late or a requirement changes.`,
      ],
    },
    {
      heading: `Questions teams ask about ${name}`,
      paragraphs: [
        `Who is the work for? ${name} is for a team that needs ${summary.charAt(0).toLowerCase()}${summary.slice(1)} If you are still choosing between building and buying, the consulting conversation can happen before a build is scheduled.`,
        `How do we know it is finished? Finish means the agreed workflows run in production, the code is in your repository, and the open issues are listed with severity. A vague "phase one complete" is not the acceptance bar we use on ${name}.`,
        `Can you join an existing codebase? Yes, when the repository is available and we can spend the first days reading it. We will tell you if the current structure needs a stabilization pass before new features are safe. That finding is part of the plan, not a surprise invoice.`,
        `Where does the team sit? Clickmasters is remote-first. We overlap with U.S. business hours, work in your issue tracker, and meet on video. ${name} does not depend on a local storefront or an on-site bench.`,
      ],
    },
  ];
}

export function articleWordCount(sections: ArticleSection[]) {
  return sections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}
