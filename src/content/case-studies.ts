export type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  body: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-cloud-credit-platform",
    title: "Multi-cloud launch for a regulated credit product",
    excerpt:
      "We partnered with the consumer division of a large financial institution to design and deploy its first public-cloud workload for a new credit product—multi-account governance, secure CI/CD, and observability from day one.",
    date: "2024-05-28",
    tags: ["Multi cloud", "Architecture", "Financial services", "DevOps"],
    body: [
      "The organization needed to move quickly while satisfying strict risk and audit requirements. We anchored the program on a reference landing zone, automated guardrails, and clear ownership between platform, security, and application teams.",
      "Delivery included infrastructure-as-code patterns, secrets and key management, and a phased rollout that de-risked cutover. The product launched on schedule with monitoring and runbooks operators could trust.",
    ],
  },
  {
    slug: "real-estate-ai-assistant",
    title: "AI assistant for property search and guidance",
    excerpt:
      "A real estate platform wanted an in-app assistant that could answer market-specific questions, search listings, and guide buyers and sellers before they spoke to an agent—with low latency and grounded responses.",
    date: "2024-04-10",
    tags: ["Real estate", "AI", "LLM", "RAG", "AWS", "OpenSearch"],
    body: [
      "We defined retrieval architecture, evaluation criteria, and safety boundaries aligned to the client’s compliance posture. The solution combined structured listing search with grounded natural-language answers.",
      "Performance tuning and caching brought p95 latency in line with mobile UX expectations, while logging and feedback loops supported continuous improvement after launch.",
    ],
  },
  {
    slug: "container-signing-chain-of-trust",
    title: "Container signing and trust for a Fortune 500",
    excerpt:
      "We implemented artifact signing and verification so container images could be traced to approved builds—strengthening supply-chain assurance for security and platform teams.",
    date: "2024-03-15",
    tags: ["Security", "AWS", "Cryptography", "DevSecOps", "Financial services"],
    body: [
      "The engagement mapped signing keys, CI integration points, and runtime admission policies. Engineers received templates and documentation so new services adopted the pattern by default.",
      "Rollout was staged by environment, with exceptions only where legacy constraints required temporary bridges—each bridge had an owner and sunset date.",
    ],
  },
  {
    slug: "aws-azure-landing-zone",
    title: "AWS tenancy migration with Azure integration",
    excerpt:
      "We assessed an application portfolio, designed a target AWS organization model, and delivered a landing zone with account vending—then integrated the new AWS footprint with the client’s Azure environment.",
    date: "2024-02-20",
    tags: ["Cloud", "AWS", "Azure", "Migration", "Architecture"],
    body: [
      "Discovery workshops produced a migration wave plan ranked by dependency, risk, and business value. Infrastructure modules standardized networking, logging, and identity patterns.",
      "Cross-cloud identity and connectivity were documented for operations and security reviewers so hybrid patterns stayed supportable long term.",
    ],
  },
  {
    slug: "databricks-pipeline-devsecops",
    title: "Securing CI/CD for a Databricks data platform",
    excerpt:
      "For a Fortune 500 data lake program, we hardened Databricks-integrated pipelines with automated dependency checks, safer credential patterns, and guardrails that matched the client’s control framework.",
    date: "2024-01-22",
    tags: ["Data", "Databricks", "DevSecOps", "AWS", "Financial services"],
    body: [
      "We reviewed pipeline stages end to end—from repo to production jobs—and prioritized fixes by exploitability and blast radius. Developers got clear golden-path examples for new pipelines.",
      "Security and data platform teams shared dashboards for policy violations and remediation SLAs, reducing back-and-forth during releases.",
    ],
  },
  {
    slug: "databricks-datahub-governance",
    title: "Databricks DataHub pattern for internal sharing",
    excerpt:
      "We designed and implemented a governance-backed pattern so internal business segments could share curated datasets on Databricks without sacrificing lineage or access control.",
    date: "2023-11-08",
    tags: ["Governance", "Databricks", "Financial services", "Compliance"],
    body: [
      "The solution balanced discoverability with least privilege: domain ownership, standardized metadata, and approval workflows for sensitive domains.",
      "Training and office hours helped stewards adopt the model so the catalog stayed accurate after the initial migration.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
