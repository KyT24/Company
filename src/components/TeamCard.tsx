import type { TeamMember } from "../types";

type Props = {
  member: TeamMember;
};

function TeamCard({ member }: Props) {
  return (
    <article className="card text-center">
      <img
        src={member.photo}
        alt={"Photo of " + member.name}
        width={128}
        height={128}
        loading="lazy"
        className="mx-auto h-32 w-32 rounded-full border-4 border-silver object-cover"
      />
      <h3 className="mt-4 text-lg text-white">{member.name}</h3>
      <p className="font-semibold text-neon-light">{member.role}</p>
      <p className="mt-2 text-sm text-silver">{member.bio}</p>
      <p className="mt-3 break-all text-xs text-silver-dark">{member.email}</p>
    </article>
  );
}

export default TeamCard;