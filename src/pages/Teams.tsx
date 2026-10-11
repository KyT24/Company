import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import Loading from "../components/Loading";
import { teamRoles, teamBios } from "../data/siteData";
import type { TeamMember } from "../types";

function Teams() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(function () {
    async function loadTeam() {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=8&inc=name,email,picture&noinfo"
        );
        if (response.ok === false) {
          throw new Error("Request failed");
        }
        const data = await response.json();

        const list: TeamMember[] = [];
        for (let i = 0; i < data.results.length; i++) {
          const person = data.results[i];
          list.push({
            name: person.name.first + " " + person.name.last,
            role: teamRoles[i],
            bio: teamBios[i],
            photo: person.picture.large,
            email: person.email,
          });
        }
        setMembers(list);
      } catch (err) {
        setError("Could not load the team. Please try again later.");
      }
      setLoading(false);
    }
    loadTeam();
  }, []);

  if (loading === true) {
    return <Loading />;
  }

  const cards: ReactElement[] = [];
  for (let i = 0; i < members.length; i++) {
    cards.push(<TeamCard key={members[i].email} member={members[i]} />);
  }

  let errorMessage: ReactElement | null = null;
  if (error !== "") {
    errorMessage = <p className="text-center text-silver">{error}</p>;
  }

  return (
    <div className="page-wrap">
      <h1 className="sr-only">Teams</h1>
      <SectionTitle
        title="Meet the Team"
        subtitle="The gamers who keep PixelVault running."
      />
      {errorMessage}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{cards}</div>
    </div>
  );
}

export default Teams;