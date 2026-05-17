import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const GlassCard = ({ children }: Props) => {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6">
      {children}
    </div>
  );
};

export default GlassCard;