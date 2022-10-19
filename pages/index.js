import Format from "../Layout/Format";
import Section1 from "../Components/Section-one";
import Section2 from "../Components/Section-two";
import Section3 from "../Components/Section3";
import Category from "../Components/Category";

export default function Home() {
  return (
    <Format>
     <Section1 />
      <Section2 />
      <Section3 />
      <Category />
      
    </Format>
  );
}
