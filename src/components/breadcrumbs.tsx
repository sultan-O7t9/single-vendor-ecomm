import Link from "next/link";

type Breadcrumb = {
  id: string;
  label: string;
  href?: string;
};

const SeparatorIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const Breadcrumbs = ({ items }: { items: Breadcrumb[] }) => {
  if (!items.length) {
    return null;
  }

  return (
    <nav
      className="wrapper px-base py-6 text-sm text-[#64748B]"
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const content =
            item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-mmb-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-mmb-text-dark font-medium" : ""}>
                {item.label}
              </span>
            );

          return (
            <li key={item.id} className="flex items-center gap-2">
              {index > 0 ? (
                <SeparatorIcon className="h-4 w-4 text-[#CBD5F5]" />
              ) : null}
              {content}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
