import React from "react";
import TopNav from "../TopNav";

interface Props {
  children: React.ReactNode;
}

function PublicRoute({ children }: Props) {
  return (
    <div className="w-screen h-screen">
      <TopNav />
      {children}
    </div>
  );
}

export default PublicRoute;
