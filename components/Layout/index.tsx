import { ReactNode } from "react";
import Header from "../Header";

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

type Props = {
  children: ReactNode;
};
