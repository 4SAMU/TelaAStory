import { useRouter } from "next/router";
import { AurthorCardImg, AuthorName } from "@/Components/Blogg/Styles";

const AurthorCard = () => {
  const router = useRouter();

  return (
    <AurthorCardImg imageUrl="/HomeImage.jpg">
      <div className="Avatar" />
      <div>
        <AuthorName
          variant="text"
          onClick={() => router.push(`/Aurthor/Jamol`)}
        >
          James Mburu
        </AuthorName>
        <div className="follow">Follow</div>
      </div>
    </AurthorCardImg>
  );
};

export default AurthorCard;
