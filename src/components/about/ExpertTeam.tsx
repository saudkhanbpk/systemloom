import React from "react";
import ProfileCard from "../constant/ProfileCard";

interface Profile {
  name: string;
  position: string;
  imageUrl: string;
  linkedInUrl: string;
}

const profiles: Profile[] = [
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtC8qi0IqjKwtubphD5ORe7dKOiyfwBZNtO8ioIzVG3zU08-WLrvnqm4BhrqbcCBeS69JDflvhC~OKv17W1WWMklzLLBLOV9HhW-hZUdnF6hji7ru-FSzndRrmiOSPLW7b4e7wkLhqARxyPui83bS2b1GOpIRopnM91i~jaNuM2efunuH1rP2OE5UGHYFssy8xXow1CdYnI1VSen9XAf3JVB-aQ4g9CyAMixWWWfq~GmI63eDdz9ni3p0pyFz3Dw6YsxiuUapnoXPjiby3X7zqGE8CcIuCsxiHLA22bIh55Fa82KVNZ11--oUNH2-9zVmW8EdfZ8X8AdOQKugyLB8w__",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "https://s3-alpha-sig.figma.com/img/ce45/a896/d958cf406bb83c3c0a93e2f03fcb0bef?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H3hCTWNhu9anpCCdTSdayZG7HsvZtZkn5MI16u35SMqOwTv~tLBV7zrsTZY3ctA5bD6zUz0Riig6pBMUGwzc-uiz2izIOcSXLYzGcxerdm5xQEFG7oB~LhCh9jYN3iUJiw4M0TdcJI656s~RlbS13MTqlQfBwZ7-LBy6UjjjbphcyQ7ucsURbLf54WsWykkHv8DhZLKS~fLITk5hYvDjwwNyqFOe7TnR~TA0bc6tFo8WlzVA2oBBmGcN8MhSr4NZSzfhkqpmj9D5Xf-GrDZ0nvJ2ejqrPKFzRe8zm2xqi-5Pn0gdz~k3Kn9kFf3RKfHajHHj7vgf0ao6H9P0MHu1oQ__",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "https://s3-alpha-sig.figma.com/img/7568/3fd5/7261c2ae940abab762a6e0130b36b3a9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dzRR9s0ye7eFBoiO761vMN-3xwwmbYxMzrN2X1zNuUr6EUGd73AExbH~mucJTWrmwTxUhXxPfGoCnQ38DCdipHJB1FXKj2dVgiYwFvtgxvYbFsUUFQwOHsL67hjjAcDF4uWHMcstj3p5VKtEK22FOENQatsERcJS-FHOpCqM~II0W0Erz0yJD6xCSfXy-fs9Qc4iPHm6GrnC5F2lh24pBYxRjul5yfYfOl5X84ru19jvvfw2fjnrD3HQSzGT9Fqr4uFgZ1wSNwZ3TrU1FeRB3IENcQUdqzbOSo9lJ39i24Rb718-h8AH~oPCJ6sdmPfbeqZGJY6mpKkum5n9rUqzww__",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "https://s3-alpha-sig.figma.com/img/ce45/a896/d958cf406bb83c3c0a93e2f03fcb0bef?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H3hCTWNhu9anpCCdTSdayZG7HsvZtZkn5MI16u35SMqOwTv~tLBV7zrsTZY3ctA5bD6zUz0Riig6pBMUGwzc-uiz2izIOcSXLYzGcxerdm5xQEFG7oB~LhCh9jYN3iUJiw4M0TdcJI656s~RlbS13MTqlQfBwZ7-LBy6UjjjbphcyQ7ucsURbLf54WsWykkHv8DhZLKS~fLITk5hYvDjwwNyqFOe7TnR~TA0bc6tFo8WlzVA2oBBmGcN8MhSr4NZSzfhkqpmj9D5Xf-GrDZ0nvJ2ejqrPKFzRe8zm2xqi-5Pn0gdz~k3Kn9kFf3RKfHajHHj7vgf0ao6H9P0MHu1oQ__",
    linkedInUrl: "https://linkedin.com",
  },
];

const ExpertTeam: React.FC = () => {
  return (
    <div>
      <div className="py-20 text-center">
        <p className="font-inter font-bold text-[35px] text-[#9A00FF]">Expert Team</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-20">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            position={profile.position}
            imageUrl={profile.imageUrl}
            linkedInUrl={profile.linkedInUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
