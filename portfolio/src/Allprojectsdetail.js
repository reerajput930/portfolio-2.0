import Card from "./Card";
import data from "./components/projectdata";

export default function Allprojectsdetail() {
  console.log(data);
  return (
    <div className="allprojectdetail--block">
      <div className="heading--block">
        <h2>ALL PROJECTS</h2>
      </div>

      <div
        className="projects--block"
        style={{
          width: "-webkit-fill-available",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => {
          //    console.log(item)
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
}
