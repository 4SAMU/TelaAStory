import { useRouter } from "next/router";
import { AurthorCardImg, AuthorName } from "@/Components/Blogg/Styles";
import { GetScreenBreakPoints } from "@/Helpers/MediaQueries";

const AurthorCard = (props: any) => {
  const { aurthorData } = props;
  console.log("Data", aurthorData);
  const router = useRouter();
  const { isPhone } = GetScreenBreakPoints();

  if (!aurthorData) {
    return null;
  }

  return (
    <>
      {!isPhone && <h1>Aurthor</h1>}
      <AurthorCardImg imageUrl={aurthorData.image}>
        <div className="Avatar" />
        <div>
          <AuthorName
            variant="text"
            onClick={() => router.push(`/Aurthor/${aurthorData?.slug.current}`)}
          >
            {aurthorData.name}
          </AuthorName>
          <div className="follow">Follow</div>
        </div>
      </AurthorCardImg>
    </>
  );
};

export default AurthorCard;
