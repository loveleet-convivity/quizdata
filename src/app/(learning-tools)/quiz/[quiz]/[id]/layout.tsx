import Provider from "@/app/utils/provider";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
