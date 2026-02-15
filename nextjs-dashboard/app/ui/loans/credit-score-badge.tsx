import { creditScoreLevel, creditScoreStyle } from "./credit-score";


type Props = {
  score: number;
};


export function CreditScoreBadge({ score }: Props) {
  const level = creditScoreLevel(score);

  return (
    <span
      className={`
        inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset
        ${creditScoreStyle(level)}
      `}
    >
      {score}
    </span>
  );
}