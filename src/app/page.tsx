import Header from "@/components/organisms/Header/Header";
import data from "../data/header.data.json";
export default function Home() {
  return (<>
  <Header data={data} />
  <div style={{ height: "200vh"}} />
    
  </>
  );
}
