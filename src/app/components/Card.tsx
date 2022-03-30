import { ChevronIcon } from "./icons/ChevronIcon";

export const Card = ({
  className = "",
  content,
  headline,
  title,
}: {
  className?: string;
  content: string;
  headline: string;
  title: string;
}) => (
  <article
    className={`flex flex-col h-[408px] md:w-80 p-8 bg-primary1 rounded-lg shadow mb-5 md:mr-0 ${className}`}
  >
    <p className="mb-4 leading-6 uppercase tracking-wider">{headline}</p>
    {/*
        I'm using exact units value here just to match closely with the design.
        Might want to adopt a different strategy in a real project.
      */}
    <h2 className="mb-6 font-black leading-10 text-[32px] tracking-[-0.02em]">
      {title}
    </h2>
    <p className="flex-1 leading-6">{content}</p>
    <div className="flex justify-end">
      <button
        className="flex w-16 h-16 justify-center items-center bg-accent1 hover:bg-accent1-hover rounded-lg transition"
        title={title}
        type="button"
      >
        <ChevronIcon />
      </button>
    </div>
  </article>
);
