import React, { HTMLAttributes } from "react";

interface BlockInt extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
}

export default function Block({ children, title, ...props }: BlockInt) {
  return (
    <section {...props} className="block">
      <div>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
