import type { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

export default function ParentComponent({ name, children }: Props) {
  return (
    <div>
      <h1 className="text-text-lg-center mb-5">{name}</h1>
      {children}
    </div>
  );
}
